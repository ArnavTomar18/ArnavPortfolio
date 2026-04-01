import os
import pickle
import logging
import numpy as np
from typing import List, Tuple, Optional
import faiss

from app.config import settings

logger = logging.getLogger(__name__)


class VectorStoreService:
    """
    FAISS-based vector store.
    No embedding generation on server.
    """

    def __init__(self):
        self.index: Optional[faiss.Index] = None
        self.documents: List[dict] = []
        self._initialized = False

    async def initialize(self):
        if self._initialized:
            return

        if not self._index_exists():
            raise Exception("FAISS index not found. Build it locally first.")

        await self.load_index()
        logger.info(f"✅ Loaded FAISS index with {len(self.documents)} docs")

        self._initialized = True

    def _index_exists(self) -> bool:
        index_file = os.path.join(settings.FAISS_INDEX_PATH, "index.faiss")
        docs_file = os.path.join(settings.FAISS_INDEX_PATH, "documents.pkl")
        return os.path.exists(index_file) and os.path.exists(docs_file)

    async def similarity_search(self, query_embedding: np.ndarray, k: int = None) -> List[Tuple[dict, float]]:
        """
        IMPORTANT: query_embedding must be precomputed (same model as index)
        """

        if not self._initialized:
            await self.initialize()

        if not self.documents or self.index.ntotal == 0:
            return []

        k = k or settings.TOP_K_RESULTS
        k = min(k, len(self.documents))

        query_embedding = query_embedding.reshape(1, -1)
        faiss.normalize_L2(query_embedding)

        scores, indices = self.index.search(query_embedding, k)

        results = []
        for score, idx in zip(scores[0], indices[0]):
            if 0 <= idx < len(self.documents):
                results.append((self.documents[idx], float(score)))

        return results

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