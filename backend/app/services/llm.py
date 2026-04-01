import logging
import json
import re
from typing import List, Dict, Any

from groq import Groq, APIError, APIConnectionError, RateLimitError
from app.config import settings

logger = logging.getLogger(__name__)


# ------------------------
# SYSTEM PROMPT (CLEAN + STRONG)
# ------------------------

SYSTEM_PROMPT = """
You are Arnav Tomar's personal AI assistant.

Your job is NOT just to answer — but to present Arnav in a sharp, modern, and impressive way.

---

STYLE:

- Professional but relaxed (no corporate stiffness)
- Confident, clear, and slightly conversational
- Smart, concise, and engaging
- Avoid robotic phrases like "Certainly", "I would be happy to"

---

HOW TO RESPOND:

- Start directly with the answer (no intro fluff)
- Use clean formatting inside the text:
  - Short paragraphs
  - Bullet points (use • when helpful)
- Highlight key terms using simple emphasis (like **this** if needed)
- Make answers feel like a skilled developer explaining things

---

IMPORTANT BEHAVIOR:

- Use ONLY the provided context (no hallucination)
- If info is missing, say:
  "I don’t have specific details on that, but you can reach out to Arnav for more."

- Do NOT sound like a chatbot
- Do NOT repeat the question
- Do NOT over-explain basics

---

RESPONSE FORMAT:

Return ONLY valid JSON.

For normal responses:
{"type": "text", "content": "your improved response"}

For project responses:
{"type": "project", "title": "...", "description": "...", "tech_stack": [...], "github": "...", "live_demo": "...", "highlights": [...]}

---

GOAL:

Make every answer feel:
- Clean
- Sharp
- Slightly premium
- Easy to read
"""


# ------------------------
# LLM SERVICE
# ------------------------

class LLMService:

    def __init__(self):
        if not settings.GROQ_API_KEY:
            raise ValueError("GROQ_API_KEY missing")

        self.client = Groq(api_key=settings.GROQ_API_KEY)
        self.model = settings.GROQ_MODEL

    async def generate_response(
        self,
        user_message: str,
        context: str,
        conversation_history: List[Dict[str, str]],
    ) -> Dict[str, Any]:

        messages = [
            {"role": "system", "content": SYSTEM_PROMPT}
        ]

        # ⚡ limit memory (important)
        if conversation_history:
            messages.extend(conversation_history[-5:])

        # ⚡ clean prompt (reduced token load)
        messages.append({
            "role": "user",
            "content": f"""
Context:
{context}

Question:
{user_message}

Return JSON only.
"""
        })

        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=settings.TEMPERATURE,
                max_tokens=settings.MAX_TOKENS,
            )

            raw = response.choices[0].message.content.strip()
            logger.debug(f"LLM raw: {raw[:200]}")

            return self._safe_parse(raw)

        except RateLimitError:
            return {"type": "text", "content": "Too many requests. Try again."}

        except APIConnectionError:
            return {"type": "text", "content": "Connection issue. Try again."}

        except APIError:
            return {"type": "text", "content": "Something went wrong."}

    # ------------------------
    # SAFE JSON PARSER
    # ------------------------

    def _safe_parse(self, raw: str) -> Dict[str, Any]:

        # remove markdown wrappers
        raw = re.sub(r'```json\s*', '', raw)
        raw = re.sub(r'```\s*', '', raw).strip()

        # extract JSON block safely
        match = re.search(r'\{.*\}', raw, re.DOTALL)

        if not match:
            return {"type": "text", "content": raw}

        try:
            data = json.loads(match.group(0))
        except Exception:
            return {"type": "text", "content": raw}

        rtype = data.get("type", "text")

        # ------------------------
        # STRUCTURED OUTPUT
        # ------------------------

        if rtype == "project":
            return {
                "type": "project",
                "title": data.get("title", "Project"),
                "description": data.get("description", ""),
                "tech_stack": data.get("tech_stack", []),
                "github": data.get("github"),
                "live_demo": data.get("live_demo"),
                "highlights": data.get("highlights", []),
            }

        if rtype == "skills":
            return {
                "type": "skills",
                "summary": data.get("summary", ""),
                "categories": data.get("categories", []),
            }

        if rtype == "contact":
            links = data.get("links", [])
            if not links:
                return {
                    "type": "text",
                    "content": "You can contact Arnav via GitHub or LinkedIn."
                }

            return {
                "type": "contact",
                "message": data.get("message", ""),
                "links": links,
            }

        return {
            "type": "text",
            "content": data.get("content", raw)
        }


# singleton
llm_service = LLMService() if settings.GROQ_API_KEY else None