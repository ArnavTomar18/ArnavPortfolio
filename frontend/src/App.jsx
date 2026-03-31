import { useState, useCallback, useEffect } from 'react';
import { Brain, Code2, Database, Layers } from 'lucide-react';

import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatWindow from './components/ChatWindow';
import Footer from './components/Footer';

// (kept in case any child component uses it)
const SKILLS_PREVIEW = [
  { icon: <Brain size={18} />,    label: 'AI / ML',           color: '#3b82f6' },
  { icon: <Code2 size={18} />,    label: 'Full Stack',        color: '#8b5cf6' },
  { icon: <Database size={18} />, label: 'Data Science',      color: '#06b6d4' },
  { icon: <Layers size={18} />,   label: 'Product Thinking',  color: '#10b981' },
];

export { SKILLS_PREVIEW };

function App() {
  // ── Theme persistence ──────────────────────────────────────
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light');
    }
  }, []);

  // ── Chat state (kept for ChatWindow) ───────────────────────
  const [chatOpen, setChatOpen] = useState(false);
  const [floatingMode, setFloatingMode] = useState(false);

  const openChat = useCallback((floating = false) => {
    setFloatingMode(floating);
    setChatOpen(true);
  }, []);

  return (
    <>
      {/* ── Cyber background: grid + glow + scanlines + noise + particles ── */}
      <ParticleBackground />

      {/* ── Custom orange cursor (your existing component) ── */}
      <CustomCursor />

      {/* ── All your existing sections — untouched ── */}
      <Navbar />
      <Hero openChat={openChat} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <ChatWindow open={chatOpen} floating={floatingMode} onClose={() => setChatOpen(false)} />
      <Footer />
    </>
  );
}

export default App;