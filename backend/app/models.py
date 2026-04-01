from pydantic import BaseModel, Field, field_validator
from typing import Optional, List, Dict, Any, Literal
from enum import Enum
import re


# ------------------------
# ENUMS
# ------------------------

class MessageRole(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"


# ------------------------
# CHAT MESSAGE
# ------------------------

class ConversationMessage(BaseModel):
    role: MessageRole
    content: str


# ------------------------
# REQUEST MODEL
# ------------------------

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    session_id: str = Field(..., min_length=1, max_length=100)

    @field_validator("message")
    @classmethod
    def sanitize_message(cls, v: str):
        v = v.strip()
        v = re.sub(r"\s+", " ", v)
        return v[:2000]

    @field_validator("session_id")
    @classmethod
    def sanitize_session_id(cls, v: str):
        v = re.sub(r"[^a-zA-Z0-9\-_]", "", v)
        return v[:100]


# ------------------------
# RESPONSE TYPES
# ------------------------

class ProjectResponse(BaseModel):
    type: Literal["project"]
    title: str
    description: str
    tech_stack: List[str]
    github: Optional[str] = None
    live_demo: Optional[str] = None
    highlights: Optional[List[str]] = None


class SkillsResponse(BaseModel):
    type: Literal["skills"]
    summary: str
    categories: List[Dict[str, Any]]


class ContactResponse(BaseModel):
    type: Literal["contact"]
    message: str
    links: List[Dict[str, str]]


class TextResponse(BaseModel):
    type: Literal["text"]
    content: str


# ------------------------
# FINAL CHAT RESPONSE
# ------------------------

class ChatResponse(BaseModel):
    response: Dict[str, Any]  # flexible for all types
    session_id: str
    sources: Optional[List[str]] = None


# ------------------------
# INGEST (OPTIONAL)
# ------------------------

class IngestRequest(BaseModel):
    force_reingest: bool = False


class IngestResponse(BaseModel):
    success: bool
    documents_indexed: int
    message: str
    chunks_created: int = 0