import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { X, Minimize2, Maximize2, Send, Mic, MicOff, Volume2, VolumeX, MessageCircle } from 'lucide-react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { sendMessage } from '../services/api';

const SESSION_KEY = 'arnav_portfolio_session_id';
const SUGGESTIONS = [
  "Why should I hire Arnav?",
  "What's his tech stack?",
  "Show me IntelliSearch project",
  "What's his experience?",
];

function getOrCreateSession() {
  let sid = sessionStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = uuidv4().replace(/-/g, '').slice(0, 32);
    sessionStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  response: {
    type: 'text',
    content: "Hey! 👋 I'm Arnav's AI assistant. I know everything about his skills, projects, and experience. Ask me anything — from his tech stack to specific projects. What would you like to know?",
  },
  timestamp: Date.now(),
};

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sessionId] = useState(getOrCreateSession);
  const [isMinimized, setIsMinimized] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen && !isMinimized) inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.onresult = (e) => {
        setInput(e.results[0][0].transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, []);

  const toggleListening = useCallback(() => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  const speakText = useCallback((text) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  const handleSend = useCallback(async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput('');
    setError(null);
    setShowSuggestions(false);

    const userMessage = {
      id: uuidv4(),
      role: 'user',
      response: { type: 'text', content: msg },
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const data = await sendMessage(msg, sessionId);
      const aiMessage = {
        id: uuidv4(),
        role: 'assistant',
        response: data.response,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      if (data.response.type === 'text') speakText(data.response.content);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [input, loading, sessionId, speakText]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        className="chat-button"
        onClick={() => { setIsOpen(!isOpen); setIsMinimized(false); }}
        title="Chat with Arnav's AI"
      >
        <MessageCircle size={26} color="white" />
      </button>

      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chat-container show ${isMinimized ? 'minimized' : ''}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-left">
                <div className="avatar">
                  <span>AT</span>
                  <div className="avatar-online" />
                </div>
                <div className="header-info">
                  <span className="header-name">Arnav's AI</span>
                  <span className="header-status">
                    {loading ? 'Thinking...' : 'Online'}
                  </span>
                </div>
              </div>
              <div className="header-actions">
                <button
                  className="header-btn"
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
                >
                  {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button
                  className="header-btn"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  className="header-btn header-close"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="chat-messages">
                  <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                      <MessageBubble key={msg.id} message={msg} />
                    ))}
                  </AnimatePresence>

                  {loading && <TypingIndicator />}

                  <AnimatePresence>
                    {showSuggestions && messages.length <= 1 && !loading && (
                      <motion.div
                        className="suggestions"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {SUGGESTIONS.map((s) => (
                          <button
                            key={s}
                            className="suggestion-pill"
                            onClick={() => handleSend(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <motion.div
                      className="error-banner"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      ⚠️ {error}
                      <button onClick={() => setError(null)} className="error-dismiss">×</button>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chat-input-area">
                  <div className="input-wrapper">
                    <textarea
                      ref={inputRef}
                      className="chat-input"
                      placeholder="Ask about Arnav"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      rows={1}
                      maxLength={2000}
                    />
                    <div className="input-actions">
                      {(window.SpeechRecognition || window.webkitSpeechRecognition) && (
                        <button
                          className={`input-btn ${isListening ? 'input-btn-active' : ''}`}
                          onClick={toggleListening}
                          title="Voice input"
                        >
                          {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                        </button>
                      )}
                      <button
                        className={`input-btn send-btn ${input.trim() && !loading ? 'send-active' : ''}`}
                        onClick={() => handleSend()}
                        disabled={!input.trim() || loading}
                      >
                        <Send size={17} />
                      </button>
                    </div>
                  </div>
                  <p className="input-hint">Enter to send · Shift+Enter for new line</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}