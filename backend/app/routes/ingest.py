import logging
import os   # ✅ ONLY HERE

from fastapi import APIRouter, Request, HTTPException, Header
from slowapi import Limiter
from slowapi.util import get_remote_address

from app.models import IngestRequest, IngestResponse
from app.services.vector_store import vector_store
from app.utils.loader import load_all_documents
from app.config import settings

logger = logging.getLogger(__name__)
router = APIRouter()
limiter = Limiter(key_func=get_remote_address)


@router.post("/ingest", response_model=IngestResponse)
@limiter.limit("5/minute")
async def ingest_documents(
    request: Request,
    ingest_request: IngestRequest = IngestRequest(),
    x_ingest_key: str = Header(default=None)
):
    """
    Ingest all markdown and PDF files from the knowledge directory into FAISS.
    """

    ingest_key = os.getenv("INGEST_SECRET_KEY", "")
    if ingest_key and x_ingest_key != ingest_key:
        raise HTTPException(status_code=403, detail="Invalid ingest key")

    try:
        await vector_store.initialize()

        if ingest_request.force_reingest:
            await vector_store.clear()
            logger.info("Cleared existing vector store for re-ingestion")

        if vector_store.get_document_count() > 0 and not ingest_request.force_reingest:
            return IngestResponse(
                success=True,
                documents_indexed=0,
                chunks_created=vector_store.get_document_count(),
                message=f"Vector store already has {vector_store.get_document_count()} chunks."
            )

        # ✅ DEBUG CHECK
        print("KNOWLEDGE DIR:", settings.KNOWLEDGE_DIR)

        if os.path.exists(settings.KNOWLEDGE_DIR):
            print("FILES FOUND:", os.listdir(settings.KNOWLEDGE_DIR))
        else:
            print("PATH DOES NOT EXIST ❌")

        # Load documents
        logger.info(f"Loading documents from: {settings.KNOWLEDGE_DIR}")
        chunks = load_all_documents(settings.KNOWLEDGE_DIR)

        if not chunks:
            return IngestResponse(
                success=False,
                documents_indexed=0,
                chunks_created=0,
                message="No documents found to index."
            )

        chunks_added = await vector_store.add_documents(chunks)

        sources = set(c.get("source", "unknown") for c in chunks)

        logger.info(f"✅ Ingestion complete: {len(sources)} files, {chunks_added} chunks")

        return IngestResponse(
            success=True,
            documents_indexed=len(sources),
            chunks_created=chunks_added,
            message=f"Indexed {len(sources)} documents into {chunks_added} chunks"
        )

    except Exception as e:
        logger.error(f"Ingestion failed: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Ingestion failed: {str(e)}"
        )


@router.get("/ingest/status")
async def ingest_status():
    try:
        await vector_store.initialize()
        return {
            "indexed": vector_store.get_document_count() > 0,
            "total_chunks": vector_store.get_document_count(),
            "knowledge_dir": settings.KNOWLEDGE_DIR,
        }
    except Exception as e:
        return {"indexed": False, "error": str(e)}