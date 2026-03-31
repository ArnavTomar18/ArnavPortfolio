from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    # API Keys
    GROQ_API_KEY: str = ""
    
    # App settings
    APP_NAME: str = "Arnav Tomar AI Portfolio"
    DEBUG: bool = False
    
    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://arnav-portfolio.vercel.app",
        "https://*.vercel.app",
    ]
    
    # Model settings
    GROQ_MODEL: str = "llama3-8b-8192"
    EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"
    MAX_TOKENS: int = 1024
    TEMPERATURE: float = 0.7
    
    # RAG settings
    CHUNK_SIZE: int = 500
    CHUNK_OVERLAP: int = 50
    TOP_K_RESULTS: int = 4
    
    # Memory settings
    MAX_MEMORY_MESSAGES: int = 10  # 5 exchanges = 10 messages
    
    # Paths
    BASE_DIR: str = os.path.dirname(os.path.abspath(__file__))  # app/
    DATA_DIR: str = os.path.join(BASE_DIR, "data")
    FAISS_INDEX_PATH: str = os.path.join(DATA_DIR, "faiss_index")
    KNOWLEDGE_DIR: str = os.path.join(DATA_DIR, "knowledge")
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
