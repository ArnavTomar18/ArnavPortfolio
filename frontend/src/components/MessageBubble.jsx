import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Bot, User } from 'lucide-react';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  const response = message?.response;

  if (!response) return null;

  return (
    <motion.div
      className={`bubble-row ${isUser ? 'bubble-user' : 'bubble-ai'}`}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="msg-avatar">
          <Bot size={14} />
        </div>
      )}

      <div className="bubble-content">

        {/* ---------------- USER MESSAGE ---------------- */}
        {isUser && (
          <div className="bubble bubble-user-msg">
            <FormattedText text={response.content} />
          </div>
        )}

        {/* ---------------- TEXT ---------------- */}
        {!isUser && response.type === 'text' && (
          <div className="bubble bubble-ai-msg">
            <FormattedText text={response.content} />
          </div>
        )}

        {/* ---------------- SKILLS ---------------- */}
        {!isUser && response.type === 'skills' && (
          <div className="bubble bubble-ai-msg">
            <strong>Skills</strong>
            <p>{response.summary}</p>

            <div className="skills-block">
              {response.categories?.map((cat, i) => (
                <div key={i} className="skill-category">
                  <span className="skill-title">{cat.name}</span>
                  <div className="skill-items">
                    {cat.items.map((item, j) => (
                      <span key={j} className="skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- PROJECT ---------------- */}
        {!isUser && response.type === 'project' && (
          <ProjectCard project={response} />
        )}

        {/* ---------------- CONTACT ---------------- */}
        {!isUser && response.type === 'contact' && (
          <div className="bubble bubble-ai-msg">
            <strong>Contact</strong>
            <p>{response.message}</p>

            {response.links?.length > 0 && (
              <ul className="contact-links">
                {response.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* ---------------- FALLBACK ---------------- */}
        {!isUser &&
          !['text', 'skills', 'project', 'contact'].includes(response.type) && (
            <div className="bubble bubble-ai-msg">
              {response.content || "I couldn't format that properly."}
            </div>
          )}

        {/* ---------------- TIME ---------------- */}
        <span className={`bubble-time ${isUser ? 'time-right' : 'time-left'}`}>
          {formatTime(message.timestamp)}
        </span>
      </div>

      {/* USER AVATAR */}
      {isUser && (
        <div className="msg-avatar msg-avatar-user">
          <User size={14} />
        </div>
      )}
    </motion.div>
  );
}


/* ---------------- FORMATTED TEXT ---------------- */

function FormattedText({ text }) {
  const lines = text.split('\n');

  return (
    <span className="fmt-text">
      {lines.map((line, i) => {
        const formatted = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return (
          <span key={i} className="fmt-line">
            {formatted}
            {i < lines.length - 1 && '\n'}
          </span>
        );
      })}
    </span>
  );
}


/* ---------------- TIME FORMAT ---------------- */

function formatTime(ts) {
  return new Date(ts).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}