import logging
import numpy as np
import hashlib
from typing import Dict, Any, List

from app.services.vector_store import vector_store
from app.services.llm import llm_service, LLMService
from app.services.memory import memory_service
from app.models import MessageRole
from app.config import settings

logger = logging.getLogger(__name__)


class RAGService:
    """
    Lightweight RAG pipeline (Render-safe)
    """

    async def query(self, user_message: str, session_id: str) -> Dict[str, Any]:

        # 1. Retrieve context
        context, sources = self._retrieve_context(user_message)

        # 2. Memory
        conversation_history = memory_service.get_history_as_dicts(session_id)

        # 3. LLM
        llm = self._get_llm_service()

        response = await llm.generate_response(
            user_message=user_message,
            context=context,
            conversation_history=conversation_history,
        )

        # 4. Memory update
        memory_service.add_message(session_id, MessageRole.USER, user_message)

        memory_service.add_message(
            session_id,
            MessageRole.ASSISTANT,
            self._summarize(response)
        )

        logger.info(f"RAG query done | session={session_id}")

        return {
            "response": response,
            "session_id": session_id,
            "sources": sources
        }

    # ------------------------
    # 🔍 CONTEXT RETRIEVAL
    # ------------------------

    def _retrieve_context(self, query: str):

        try:
            # ⚡ generate lightweight embedding
            query_embedding = self._cheap_embedding(query)

            # ⚡ FAISS search (SYNC, not async)
            results = vector_store.search(
                query_embedding,
                k=settings.TOP_K_RESULTS
            )

            if not results:
                logger.warning("Fallback: no FAISS results")
                return self._get_fallback_context(), []

            context_parts = []
            sources = []

            for doc, score in results:
                if score > 0.05:
                    # docs can be str OR dict depending on your index
                    if isinstance(doc, dict):
                        context_parts.append(doc.get("content", ""))
                        if doc.get("source"):
                            sources.append(doc["source"])
                    else:
                        context_parts.append(doc)

            if not context_parts:
                logger.warning("Fallback: filtered empty")
                return self._get_fallback_context(), []

            context = "\n\n---\n\n".join(context_parts)

            return context, list(set(sources))

        except Exception as e:
            logger.error(f"Context error: {e}")
            return self._get_fallback_context(), []

    # ------------------------
    # ⚡ LIGHT EMBEDDING
    # ------------------------

    def _cheap_embedding(self, text: str) -> np.ndarray:
        """
        Deterministic lightweight embedding (no ML)
        """
        hash_val = hashlib.md5(text.encode()).hexdigest()

        vec = np.zeros(384, dtype="float32")

        for i, char in enumerate(hash_val):
            vec[i % 384] += ord(char)

        return vec

    # ------------------------
    # 🧠 MEMORY SUMMARY
    # ------------------------

    def _summarize(self, response):

        rtype = response.get("type")

        if rtype == "project":
            return f"Project: {response.get('title', '')}"

        if rtype == "skills":
            return "Discussed skills"

        if rtype == "contact":
            return "Shared contact info"

        return response.get("content", "")[:200]

    # ------------------------
    # 🧯 FALLBACK
    # ------------------------

    def _get_fallback_context(self) -> str:
        return """
    Arnav Tomar – Full Stack Developer
    
    Skills:
    - AI, Machine Learning, Data Science
    - Python, FastAPI, React
    - Building scalable AI applications
    
    Projects:
    - IntelliSearch: AI-powered search system
    - OTT Recommender System: ML-based recommendation engine
    - Portfolio Website: React + FastAPI backend with AI assistant
    
    Experience:
    - Completed Ashna AI Internship (worked on AI and ML systems)
    
    Contact:
    - GitHub: https://github.com/arnavtomar18
    - LinkedIn: https://linkedin.com/in/arnavtomar18
    - Email: mailto:arnavtomar1812007@gmail.com
    """

    # ------------------------
    # 🔧 LLM SERVICE
    # ------------------------

    def _get_llm_service(self) -> LLMService:
        return llm_service or LLMService()


# Singleton
rag_service = RAGService()