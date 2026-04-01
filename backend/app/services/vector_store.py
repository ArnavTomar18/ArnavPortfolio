import faiss
import pickle
import numpy as np
import os


class VectorStore:

    def __init__(self):
        # ✅ dynamic base path (works everywhere)
        current_dir = os.path.dirname(os.path.abspath(__file__))
        base = os.path.join(current_dir, "../data/faiss_index")

        index_path = os.path.join(base, "index.faiss")
        docs_path = os.path.join(base, "docs.pkl")

        if not os.path.exists(index_path) or not os.path.exists(docs_path):
            raise FileNotFoundError(
                "FAISS files missing. Make sure index.faiss and docs.pkl exist."
            )

        self.index = faiss.read_index(index_path)

        with open(docs_path, "rb") as f:
            self.docs = pickle.load(f)

    def search(self, query_embedding, k=3):
        # ensure correct shape
        query_embedding = query_embedding.reshape(1, -1)

        # normalize for cosine similarity
        faiss.normalize_L2(query_embedding)

        scores, indices = self.index.search(query_embedding, k)

        results = []
        for i, idx in enumerate(indices[0]):
            if 0 <= idx < len(self.docs):
                results.append((self.docs[idx], float(scores[0][i])))

        return results


# singleton
vector_store = VectorStore()