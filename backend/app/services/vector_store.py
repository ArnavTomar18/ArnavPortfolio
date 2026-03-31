import os
import pickle
import logging
import numpy as np
from typing import List, Tuple, Optional
from sentence_transformers import SentenceTransformer
import faiss

from app.config import settings

logger = logging.getLogger(__name__)


class VectorStoreService:
    """
    FAISS-based vector store for document retrieval.
    Uses sentence-transformers for embeddings.
    """
    
    def __init__(self):
        self.model: Optional[SentenceTransformer] = None
        self.index: Optional[faiss.Index] = None
        self.documents: List[dict] = []  # Store text + metadata
        self.embedding_dim = 384  # all-MiniLM-L6-v2 dimension
        self._initialized = False
        
        os.makedirs(settings.FAISS_INDEX_PATH, exist_ok=True)
    
    async def initialize(self):
        """Load embedding model and existing index if available."""
        if self._initialized:
            return
        
        logger.info("Loading embedding model...")
        self.model = SentenceTransformer(settings.EMBEDDING_MODEL)
        logger.info(f"✅ Embedding model loaded: {settings.EMBEDDING_MODEL}")
        
        # Try to load existing index
        if self._index_exists():
            await self.load_index()
            logger.info(f"✅ Loaded existing FAISS index with {len(self.documents)} documents")
        else:
            # Create empty index
            self.index = faiss.IndexFlatIP(self.embedding_dim)  # Inner product (cosine after normalization)
            logger.info("Created new FAISS index")
        
        self._initialized = True
    
    def _index_exists(self) -> bool:
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")
        return os.path.exists(index_file) and os.path.exists(docs_file)
    
    async def embed_texts(self, texts: List[str]) -> np.ndarray:
        """Generate normalized embeddings for texts."""
        if not self._initialized:
            await self.initialize()
        
        embeddings = self.model.encode(texts, show_progress_bar=False, convert_to_numpy=True)
        # Normalize for cosine similarity via inner product
        faiss.normalize_L2(embeddings)
        return embeddings.astype(np.float32)
    
    async def add_documents(self, chunks: List[dict]) -> int:
        """Add document chunks to the vector store."""
        if not self._initialized:
            await self.initialize()
        
        if not chunks:
            return 0
        
        texts = [chunk["content"] for chunk in chunks]
        embeddings = await self.embed_texts(texts)
        
        self.index.add(embeddings)
        self.documents.extend(chunks)
        
        await self.save_index()
        logger.info(f"Added {len(chunks)} chunks to FAISS index. Total: {len(self.documents)}")
        return len(chunks)
    
    async def similarity_search(self, query: str, k: int = None) -> List[Tuple[dict, float]]:
        """Search for similar documents."""
        if not self._initialized:
            await self.initialize()
        
        if not self.documents or self.index.ntotal == 0:
            logger.warning("Vector store is empty, no documents to search")
            return []
        
        k = k or settings.TOP_K_RESULTS
        k = min(k, len(self.documents))
        
        query_embedding = await self.embed_texts([query])
        
        scores, indices = self.index.search(query_embedding, k)
        
        results = []
        for score, idx in zip(scores[0], indices[0]):
            if idx >= 0 and idx < len(self.documents):
                results.append((self.documents[idx], float(score)))
        
        return results
    
    async def clear(self):
        """Clear all documents and reset index."""
        self.index = faiss.IndexFlatIP(self.embedding_dim)
        self.documents = []
        await self.save_index()
        logger.info("Vector store cleared")
    
    async def save_index(self):
        """Persist FAISS index and documents to disk."""
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")
        
        faiss.write_index(self.index, index_file)
        with open(docs_file, "wb") as f:
            pickle.dump(self.documents, f)
        
        logger.debug(f"Saved FAISS index: {len(self.documents)} documents")
    
    async def load_index(self):
        """Load FAISS index and documents from disk."""
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")
        
        self.index = faiss.read_index(index_file)
        with open(docs_file, "rb") as f:
            self.documents = pickle.load(f)
    
    def get_document_count(self) -> int:
        return len(self.documents)


# Singleton instance
vector_store = VectorStoreService()
