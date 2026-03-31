from pydantic import BaseModel, Field, validator
from typing import Optional, List, Dict, Any, Literal
from enum import Enum
import re


class MessageRole(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"


class ConversationMessage(BaseModel):
    role: MessageRole
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    session_id: str = Field(..., min_length=1, max_length=100)
    
    @validator("message")
    def sanitize_message(cls, v):
        # Remove potential injection attempts
        v = v.strip()
        # Remove excessive whitespace
        v = re.sub(r'\s+', ' ', v)
        # Limit length after sanitization
        if len(v) > 2000:
            v = v[:2000]
        return v
    
    @validator("session_id")
    def sanitize_session_id(cls, v):
        # Only allow alphanumeric, hyphens, underscores
        v = re.sub(r'[^a-zA-Z0-9\-_]', '', v)
        return v[:100]


class ProjectResponse(BaseModel):
    type: Literal["project"] = "project"
    title: str
    description: str
    tech_stack: List[str]
    github: Optional[str] = None
    live_demo: Optional[str] = None
    highlights: Optional[List[str]] = None


class TextResponse(BaseModel):
    type: Literal["text"] = "text"
    content: str


class ChatResponse(BaseModel):
    response: Dict[str, Any]  # Either ProjectResponse or TextResponse dict
    session_id: str
    sources: Optional[List[str]] = None


class IngestRequest(BaseModel):
    force_reingest: bool = False


class IngestResponse(BaseModel):
    success: bool
    documents_indexed: int
    message: str
    chunks_created: int = 0
