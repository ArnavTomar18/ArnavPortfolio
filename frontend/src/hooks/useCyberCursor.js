// useCyberCursor.js
// Custom hook — handles the custom cursor dot + follower ring
// Usage: call useCyberCursor() once inside App.jsx (or any top-level component)
// Make sure .cursor and .cursor-follower divs exist in your JSX (see App.jsx example below)

import { useEffect, useRef } from "react";

export default function useCyberCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    if (!cursor || !follower) return;

    // Show cursors on first move
    function onMouseMove(e) {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    }

    // Hover effect on interactive elements
    const interactiveSelectors = "a, button, [role='button'], input, textarea, select, .nav-link, .hero-btn, .project-card, .skill-tag, .social-icon, .service-card";

    function onMouseOver(e) {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.add("hover");
        follower.classList.add("hover");
      }
    }

    function onMouseOut(e) {
      if (e.target.closest(interactiveSelectors)) {
        cursor.classList.remove("hover");
        follower.classList.remove("hover");
      }
    }

    // Smooth follower using lerp
    function lerp(a, b, t) { return a + (b - a) * t; }

    function animateFollower() {
      followerPosRef.current.x = lerp(followerPosRef.current.x, posRef.current.x, 0.12);
      followerPosRef.current.y = lerp(followerPosRef.current.y, posRef.current.y, 0.12);

      cursor.style.left = `${posRef.current.x}px`;
      cursor.style.top  = `${posRef.current.y}px`;
      follower.style.left = `${followerPosRef.current.x}px`;
      follower.style.top  = `${followerPosRef.current.y}px`;

      rafRef.current = requestAnimationFrame(animateFollower);
    }

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout",  onMouseOut);
    rafRef.current = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout",  onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);
}

/*
 ─── App.jsx usage example ───────────────────────────────────

import useCyberCursor from './hooks/useCyberCursor';
import ParticleBackground from './components/ParticleBackground';
import './portfolio-advanced.css';

export default function App() {
  useCyberCursor();

  return (
    <>
      // Custom cursor elements — must be direct children of App
      <div className="cursor" />
      <div className="cursor-follower" />

      // All background layers (grid, glow, scanlines, noise, particles)
      <ParticleBackground />

      // Your existing sections go here unchanged
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
*/