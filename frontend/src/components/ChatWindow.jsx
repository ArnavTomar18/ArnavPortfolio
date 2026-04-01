import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import {
  X, Minimize2, Maximize2, Send,
  Mic, MicOff, Volume2, VolumeX, MessageCircle
} from 'lucide-react';

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
    content:
      "Hey! 👋 I'm Arnav's AI assistant. Ask me anything about his skills, projects, or experience.",
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
  const abortRef = useRef(null);

  // ---------------- SCROLL ----------------
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages, loading]);

  // ---------------- FOCUS ----------------
  useEffect(() => {
    if (isOpen && !isMinimized) inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  // ---------------- SPEECH RECOGNITION ----------------
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (e) => {
      setInput(e.results[0][0].transcript);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => setIsListening(false);
    recognitionRef.current.onerror = () => setIsListening(false);
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }

    setIsListening(!isListening);
  };

  // ---------------- SPEAK ----------------
  const speakText = useCallback((text) => {
    if (!voiceEnabled || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    const utter = new SpeechSynthesisUtterance(text);
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utter);
  }, [voiceEnabled]);

  // ---------------- INPUT AUTO RESIZE ----------------
  const handleInput = (e) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  // ---------------- SEND ----------------
  const handleSend = useCallback(async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    // cancel previous request
    abortRef.current?.abort();
    abortRef.current = new AbortController();

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

      if (data.response.type === 'text') {
        speakText(data.response.content);
      }

    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }, [input, loading, sessionId, speakText]);

  // ---------------- ENTER KEY ----------------
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* BUTTON */}
      <button
        className="chat-button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
      >
        <MessageCircle size={26} color="white" />
      </button>

      {/* CHAT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chat-container ${isMinimized ? 'minimized' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HEADER */}
            <div className="chat-header">
              <span>Arnav's AI</span>

              <div>
                <button onClick={() => setVoiceEnabled(!voiceEnabled)}>
                  {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>

                <button onClick={() => setIsMinimized(!isMinimized)}>
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>

                <button onClick={() => setIsOpen(false)}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* MESSAGES */}
                <div className="chat-messages">
                  {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                  ))}

                  {loading && <TypingIndicator />}

                  {showSuggestions && messages.length <= 1 && (
                    <div className="suggestions">
                      {SUGGESTIONS.map((s) => (
                        <button key={s} onClick={() => handleSend(s)}>
                          {s}
                        </button>
                      ))}
                    </div>
                  )}

                  {error && <div className="error-banner">{error}</div>}

                  <div ref={messagesEndRef} />
                </div>

                {/* INPUT */}
                <div className="chat-input-area">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Arnav..."
                    rows={1}
                  />

                  <div>
                    <button onClick={toggleListening}>
                      {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                    </button>

                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim() || loading}
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}