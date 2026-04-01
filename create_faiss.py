# create_faiss.py

from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pickle
import os

model = SentenceTransformer("all-MiniLM-L6-v2")

docs = []
base_path = "backend/app/data/knowledge"

for file in os.listdir(base_path):
    with open(os.path.join(base_path, file), "r", encoding="utf-8") as f:
        docs.append(f.read())

embeddings = model.encode(docs).astype("float32")
faiss.normalize_L2(embeddings)

index = faiss.IndexFlatIP(384)
index.add(embeddings)

# SAVE
faiss.write_index(index, "backend/app/data/faiss_index/index.faiss")

with open("backend/app/data/faiss_index/docs.pkl", "wb") as f:
    pickle.dump(docs, f)

print("DONE")