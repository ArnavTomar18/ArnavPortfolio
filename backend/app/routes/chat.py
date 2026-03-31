from fastapi import APIRouter, Request, HTTPException, Depends
from slowapi import Limiter
from slowapi.util import get_remote_address
import logging

from app.models import ChatRequest, ChatResponse
from app.services.rag import rag_service
from app.config import settings

logger = logging.getLogger(__name__)
router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/chat", response_model=ChatResponse)
@limiter.limit("20/minute")
async def chat(request: Request, chat_request: ChatRequest):
    """
    Main chat endpoint.
    Accepts user message + session_id, returns structured AI response.
    """
    try:
        logger.info(f"Chat request - session: {chat_request.session_id} | message: {chat_request.message[:50]}...")
        
        # Validate GROQ API key
        if not settings.GROQ_API_KEY:
            raise HTTPException(
                status_code=503,
                detail="AI service not configured. Please set GROQ_API_KEY."
            )
        
        # Run RAG pipeline
        result = await rag_service.query(
            user_message=chat_request.message,
            session_id=chat_request.session_id,
        )
        
        return ChatResponse(
            response=result["response"],
            session_id=result["session_id"],
            sources=result.get("sources", [])
        )
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Chat endpoint error: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail="Failed to process your message. Please try again."
        )
