from typing import Dict, List
from collections import defaultdict, deque
import time
import logging
from app.models import ConversationMessage, MessageRole
from app.config import settings

logger = logging.getLogger(__name__)


class MemoryService:
    """
    In-memory conversation history manager.
    Stores last N messages per session to inject into prompts.
    """
    
    def __init__(self):
        # session_id -> deque of messages
        self._sessions: Dict[str, deque] = defaultdict(
            lambda: deque(maxlen=settings.MAX_MEMORY_MESSAGES)
        )
        # session_id -> last access time for cleanup
        self._last_access: Dict[str, float] = {}
        # Cleanup threshold: 1 hour
        self._cleanup_threshold = 3600
    
    def add_message(self, session_id: str, role: MessageRole, content: str) -> None:
        """Add a message to session memory."""
        self._sessions[session_id].append(
            ConversationMessage(role=role, content=content)
        )
        self._last_access[session_id] = time.time()
        logger.debug(f"Added {role} message to session {session_id}. Total: {len(self._sessions[session_id])}")
    
    def get_history(self, session_id: str) -> List[ConversationMessage]:
        """Get conversation history for a session."""
        self._last_access[session_id] = time.time()
        return list(self._sessions[session_id])
    
    def get_history_as_dicts(self, session_id: str) -> List[dict]:
        """Get history formatted for LLM API calls."""
        history = self.get_history(session_id)
        return [
            {"role": msg.role.value, "content": msg.content}
            for msg in history
        ]
    
    def format_history_for_prompt(self, session_id: str) -> str:
        """Format conversation history as text for prompt injection."""
        history = self.get_history(session_id)
        if not history:
            return ""
        
        formatted = "\n\nConversation History:\n"
        for msg in history:
            prefix = "User" if msg.role == MessageRole.USER else "Arnav's AI"
            formatted += f"{prefix}: {msg.content}\n"
        return formatted
    
    def clear_session(self, session_id: str) -> None:
        """Clear memory for a specific session."""
        if session_id in self._sessions:
            self._sessions[session_id].clear()
            logger.info(f"Cleared memory for session {session_id}")
    
    def cleanup_old_sessions(self) -> int:
        """Remove sessions older than cleanup threshold."""
        current_time = time.time()
        expired = [
            sid for sid, last_access in self._last_access.items()
            if current_time - last_access > self._cleanup_threshold
        ]
        for sid in expired:
            if sid in self._sessions:
                del self._sessions[sid]
            del self._last_access[sid]
        
        if expired:
            logger.info(f"Cleaned up {len(expired)} expired sessions")
        return len(expired)
    
    def get_session_count(self) -> int:
        return len(self._sessions)


# Singleton instance
memory_service = MemoryService()
