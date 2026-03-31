import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <motion.div
      className="typing-row"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="typing-avatar">
        <Bot size={14} />
      </div>
      <div className="typing-bubble">
        <span className="dot" style={{ animationDelay: '0ms' }} />
        <span className="dot" style={{ animationDelay: '160ms' }} />
        <span className="dot" style={{ animationDelay: '320ms' }} />
      </div>

      <style>{`
.typing-row {
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
}

.typing-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6A00, #FF8C42);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(255,106,0,0.35);
}

.typing-bubble {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,106,0,0.15);
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  backdrop-filter: blur(6px);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #FF6A00;
  display: inline-block;
  animation: typing-bounce 1s ease-in-out infinite;
  opacity: 0.6;
  box-shadow: 0 0 6px rgba(255,106,0,0.6);
}

@keyframes typing-bounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  40% {
    transform: translateY(-5px);
    opacity: 1;
  }
}
      `}</style>
    </motion.div>
  );
}
