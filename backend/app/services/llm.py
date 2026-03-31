import logging
import json
import re
from typing import List, Dict, Any, Optional
from groq import Groq, APIError, APIConnectionError, RateLimitError

from app.config import settings

logger = logging.getLogger(__name__)

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


class LLMService:
    """Groq LLM service for generating responses."""

    def __init__(self):
        if not settings.GROQ_API_KEY:
            raise ValueError("GROQ_API_KEY is not configured")
        self.client = Groq(api_key=settings.GROQ_API_KEY)
        self.model = settings.GROQ_MODEL

    async def generate_response(
        self,
        user_message: str,
        context: str,
        conversation_history: List[Dict[str, str]],
    ) -> Dict[str, Any]:
        """Generate a structured response using RAG context and conversation history."""

        augmented_message = f"""Context from Arnav's portfolio knowledge base:
{context}

---

User question: {user_message}

Respond with valid JSON only. Choose the most appropriate response type (text, project, skills, or contact).
No markdown. No explanation. Just the JSON object."""

        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
        ]

        if conversation_history:
            messages.extend(conversation_history[-settings.MAX_MEMORY_MESSAGES:])

        messages.append({"role": "user", "content": augmented_message})

        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                max_tokens=settings.MAX_TOKENS,
                temperature=settings.TEMPERATURE,
                stream=False,
            )

            raw_content = response.choices[0].message.content.strip()
            logger.debug(f"LLM raw response: {raw_content[:200]}...")

            parsed = self._parse_response(raw_content)
            return parsed

        except RateLimitError:
            logger.error("Groq rate limit exceeded")
            return {
                "type": "text",
                "content": "Too many requests hitting at once — give it a second and try again."
            }
        except APIConnectionError as e:
            logger.error(f"Groq connection error: {e}")
            return {
                "type": "text",
                "content": "Having trouble reaching the AI service right now. Try again in a moment."
            }
        except APIError as e:
            logger.error(f"Groq API error: {e}")
            return {
                "type": "text",
                "content": "Something went sideways on my end. Try sending that again."
            }

    def _parse_response(self, raw: str) -> Dict[str, Any]:
        """Parse and validate LLM response as structured JSON."""
        raw = re.sub(r'```json\s*', '', raw)
        raw = re.sub(r'```\s*', '', raw)
        raw = raw.strip()

        try:
            data = json.loads(raw)
            response_type = data.get("type", "text")

            if response_type == "project":
                return {
                    "type": "project",
                    "title": data.get("title", "Project"),
                    "description": data.get("description", ""),
                    "tech_stack": data.get("tech_stack", []),
                    "github": data.get("github"),
                    "live_demo": data.get("live_demo"),
                    "highlights": data.get("highlights", []),
                }

            elif response_type == "skills":
                return {
                    "type": "skills",
                    "summary": data.get("summary", ""),
                    "categories": data.get("categories", []),
                }

            elif response_type == "contact":
                return {
                    "type": "contact",
                    "message": data.get("message", ""),
                    "links": data.get("links", []),
                }

            else:
                return {
                    "type": "text",
                    "content": data.get("content", raw)
                }

        except json.JSONDecodeError:
            logger.warning(f"Failed to parse JSON response, wrapping as text: {raw[:100]}")
            return {
                "type": "text",
                "content": raw
            }


# Singleton instance
llm_service = LLMService() if settings.GROQ_API_KEY else None