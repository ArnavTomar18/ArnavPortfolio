import os
import re
import logging
from typing import List, Dict
from pathlib import Path

logger = logging.getLogger(__name__)


def chunk_text(text: str, chunk_size: int = 500, overlap: int = 50) -> List[str]:
    """Split text into overlapping chunks."""
    if not text.strip():
        return []
    
    # Split by paragraphs first
    paragraphs = re.split(r'\n\s*\n', text)
    
    chunks = []
    current_chunk = ""
    
    for para in paragraphs:
        para = para.strip()
        if not para:
            continue
        
        # If adding this paragraph would exceed chunk_size, save current chunk
        if len(current_chunk) + len(para) > chunk_size and current_chunk:
            chunks.append(current_chunk.strip())
            # Start new chunk with overlap (last few words of previous chunk)
            words = current_chunk.split()
            overlap_text = " ".join(words[-overlap//10:]) if len(words) > overlap//10 else ""
            current_chunk = overlap_text + " " + para
        else:
            current_chunk = current_chunk + "\n\n" + para if current_chunk else para
    
    if current_chunk.strip():
        chunks.append(current_chunk.strip())
    
    return chunks


def load_markdown_file(filepath: str) -> List[Dict]:
    """Load and chunk a markdown file."""
    chunks = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        filename = Path(filepath).stem
        text_chunks = chunk_text(content)
        
        for i, chunk in enumerate(text_chunks):
            chunks.append({
                "content": chunk,
                "source": filename,
                "type": "markdown",
                "chunk_index": i
            })
        
        logger.info(f"Loaded {len(chunks)} chunks from {filename}")
    except Exception as e:
        logger.error(f"Error loading markdown file {filepath}: {e}")
    
    return chunks


def load_pdf_file(filepath: str) -> List[Dict]:
    """Load and chunk a PDF file."""
    chunks = []
    try:
        import PyPDF2
        filename = Path(filepath).stem
        
        with open(filepath, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            full_text = ""
            for page in reader.pages:
                full_text += page.extract_text() + "\n\n"
        
        text_chunks = chunk_text(full_text)
        
        for i, chunk in enumerate(text_chunks):
            chunks.append({
                "content": chunk,
                "source": filename,
                "type": "pdf",
                "chunk_index": i
            })
        
        logger.info(f"Loaded {len(chunks)} chunks from PDF: {filename}")
    except ImportError:
        logger.warning("PyPDF2 not installed. Skipping PDF files.")
    except Exception as e:
        logger.error(f"Error loading PDF file {filepath}: {e}")
    
    return chunks


def load_text_file(filepath: str) -> List[Dict]:
    """Load and chunk a plain text file."""
    chunks = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        filename = Path(filepath).stem
        text_chunks = chunk_text(content)
        
        for i, chunk in enumerate(text_chunks):
            chunks.append({
                "content": chunk,
                "source": filename,
                "type": "text",
                "chunk_index": i
            })
        
        logger.info(f"Loaded {len(chunks)} chunks from {filename}")
    except Exception as e:
        logger.error(f"Error loading text file {filepath}: {e}")
    
    return chunks


def load_all_documents(knowledge_dir: str) -> List[Dict]:
    """Load all supported documents from knowledge directory."""
    all_chunks = []
    
    if not os.path.exists(knowledge_dir):
        logger.warning(f"Knowledge directory not found: {knowledge_dir}")
        return all_chunks
    
    supported_extensions = {
        ".md": load_markdown_file,
        ".txt": load_text_file,
        ".pdf": load_pdf_file,
    }
    
    total_files = 0
    for root, dirs, files in os.walk(knowledge_dir):
        # Skip hidden directories
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for filename in files:
            ext = Path(filename).suffix.lower()
            if ext in supported_extensions:
                filepath = os.path.join(root, filename)
                loader = supported_extensions[ext]
                chunks = loader(filepath)
                all_chunks.extend(chunks)
                total_files += 1
    
    logger.info(f"Loaded {len(all_chunks)} total chunks from {total_files} files")
    return all_chunks
