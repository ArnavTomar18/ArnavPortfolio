import logging
from typing import Dict, Any, List

from app.services.vector_store import vector_store
from app.services.llm import llm_service, LLMService
from app.services.memory import memory_service
from app.models import MessageRole
from app.config import settings

logger = logging.getLogger(__name__)


class RAGService:
    """
    Retrieval Augmented Generation orchestrator.
    Combines vector search, memory, and LLM generation.
    """
    
    async def query(
        self,
        user_message: str,
        session_id: str,
    ) -> Dict[str, Any]:
        """
        Full RAG pipeline:
        1. Retrieve relevant context from vector store
        2. Load conversation memory
        3. Generate structured response
        4. Update memory
        """
        
        # Step 1: Retrieve relevant context
        context, sources = await self._retrieve_context(user_message)
        
        # Step 2: Get conversation history
        conversation_history = memory_service.get_history_as_dicts(session_id)
        
        # Step 3: Get LLM service
        llm = self._get_llm_service()
        
        # Step 4: Generate response
        response = await llm.generate_response(
            user_message=user_message,
            context=context,
            conversation_history=conversation_history,
        )
        
        # Step 5: Update memory with this exchange
        memory_service.add_message(session_id, MessageRole.USER, user_message)
        
        # Store assistant message as text summary
        if response.get("type") == "project":
            assistant_summary = f"I provided information about the project: {response.get('title', 'unknown project')}"
        else:
            assistant_summary = response.get("content", "")[:500]  # Truncate for memory efficiency
        
        memory_service.add_message(session_id, MessageRole.ASSISTANT, assistant_summary)
        
        logger.info(f"RAG query completed for session {session_id}. Response type: {response.get('type')}")
        
        return {
            "response": response,
            "session_id": session_id,
            "sources": sources
        }
    
    async def _retrieve_context(self, query: str) -> tuple[str, List[str]]:
        """Retrieve and format relevant context from vector store."""
        try:
            results = await vector_store.similarity_search(query, k=settings.TOP_K_RESULTS)
            
            if not results:
                logger.warning("No relevant context found in vector store")
                return self._get_fallback_context(), []
            
            context_parts = []
            sources = []
            
            for doc, score in results:
                if score > 0.2:  # Minimum relevance threshold
                    context_parts.append(doc["content"])
                    if doc.get("source"):
                        sources.append(doc["source"])
            
            if not context_parts:
                return self._get_fallback_context(), []
            
            context = "\n\n---\n\n".join(context_parts)
            logger.debug(f"Retrieved {len(context_parts)} context chunks")
            return context, list(set(sources))
        
        except Exception as e:
            logger.error(f"Context retrieval failed: {e}")
            return self._get_fallback_context(), []
    
    def _get_fallback_context(self) -> str:
        """Fallback context when vector store has no results."""
        return """Arnav Tomar is a Full Stack Developer specializing in AI, Machine Learning, 
        Data Science, and Product Thinking. He builds intelligent, scalable products. 
        For detailed information about specific projects or experiences, 
        please check the portfolio or contact Arnav directly."""
    
    def _get_llm_service(self) -> LLMService:
        """Get or create LLM service instance."""
        if llm_service is None:
            from app.services.llm import LLMService
            return LLMService()
        return llm_service


# Singleton
rag_service = RAGService()
