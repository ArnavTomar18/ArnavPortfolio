import os
import pickle
import logging
import numpy as np
from typing import List, Tuple, Optional
import faiss

from app.config import settings

logger = logging.getLogger(__name__)


# ✅ SIMPLE LIGHTWEIGHT EMBEDDING (NO TORCH)
def simple_embedding(text: str, dim: int = 100):
    vec = [float(ord(c)) for c in text[:dim]]
    return vec + [0.0] * (dim - len(vec))


class VectorStoreService:
    """
    FAISS-based vector store for document retrieval.
    Uses lightweight embeddings (no heavy ML models).
    """

    def __init__(self):
        self.index: Optional[faiss.Index] = None
        self.documents: List[dict] = []
        self.embedding_dim = 100  # matches simple_embedding
        self._initialized = False

        os.makedirs(settings.FAISS_INDEX_PATH, exist_ok=True)

    async def initialize(self):
        if self._initialized:
            return

        logger.info("Initializing lightweight vector store...")

        if self._index_exists():
            await self.load_index()
            logger.info(f"✅ Loaded existing index with {len(self.documents)} documents")
        else:
            self.index = faiss.IndexFlatIP(self.embedding_dim)
            logger.info("Created new FAISS index")

        self._initialized = True

    def _index_exists(self) -> bool:
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")
        return os.path.exists(index_file) and os.path.exists(docs_file)

    async def embed_texts(self, texts: List[str]) -> np.ndarray:
        if not self._initialized:
            await self.initialize()

        embeddings = np.array([simple_embedding(t, self.embedding_dim) for t in texts]).astype(np.float32)

        # normalize (important for similarity)
        faiss.normalize_L2(embeddings)
        return embeddings

    async def add_documents(self, chunks: List[dict]) -> int:
        if not self._initialized:
            await self.initialize()

        if not chunks:
            return 0

        texts = [chunk["content"] for chunk in chunks]
        embeddings = await self.embed_texts(texts)

        self.index.add(embeddings)
        self.documents.extend(chunks)

        await self.save_index()
        logger.info(f"Added {len(chunks)} chunks. Total: {len(self.documents)}")

        return len(chunks)

    async def similarity_search(self, query: str, k: int = None) -> List[Tuple[dict, float]]:
        if not self._initialized:
            await self.initialize()

        if not self.documents or self.index.ntotal == 0:
            logger.warning("Vector store is empty")
            return []

        k = k or settings.TOP_K_RESULTS
        k = min(k, len(self.documents))

        query_embedding = await self.embed_texts([query])
        scores, indices = self.index.search(query_embedding, k)

        results = []
        for score, idx in zip(scores[0], indices[0]):
            if 0 <= idx < len(self.documents):
                results.append((self.documents[idx], float(score)))

        return results

    async def clear(self):
        self.index = faiss.IndexFlatIP(self.embedding_dim)
        self.documents = []
        await self.save_index()
        logger.info("Vector store cleared")

    async def save_index(self):
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")

        faiss.write_index(self.index, index_file)
        with open(docs_file, "wb") as f:
            pickle.dump(self.documents, f)

    async def load_index(self):
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")

        self.index = faiss.read_index(index_file)
        with open(docs_file, "rb") as f:
            self.documents = pickle.load(f)

    def get_document_count(self) -> int:
        return len(self.documents)


# Singleton
vector_store = VectorStoreService()