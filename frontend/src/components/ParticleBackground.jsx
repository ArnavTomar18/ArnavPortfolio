// ParticleBackground.jsx  v2.0
// Theme-aware: adapts blend mode, opacity, colour brightness,
// connection strength, and cursor glow for light + dark modes.
// Watches body.classList for .light via MutationObserver so
// it reacts instantly when the toggle fires.

import { useEffect, useRef } from "react";

/* ─── Palette ─────────────────────────────────────────────── */
const COLORS_DARK = [
  { r: 41,  g: 121, b: 255 }, // #2979ff  electric blue
  { r: 101, g: 31,  b: 255 }, // #651fff  deep violet
  { r: 213, g: 0,   b: 249 }, // #d500f9  vivid magenta
  { r: 85,  g: 153, b: 255 }, // #5599ff  light cobalt
  { r: 160, g: 80,  b: 255 }, // #a050ff  mid violet
];

// In light mode we darken each colour so multiply blend darkens
// against the white/pale background rather than washing out.
const COLORS_LIGHT = [
  { r: 20,  g: 80,  b: 210 }, // deep blue
  { r: 70,  g: 10,  b: 200 }, // deep violet
  { r: 140, g: 0,   b: 180 }, // deep magenta
  { r: 30,  g: 100, b: 220 }, // cobalt
  { r: 100, g: 30,  b: 200 }, // mid violet
];

/* ─── Per-theme render config ─────────────────────────────── */
const THEME = {
  dark: {
    blendMode:          "screen",
    canvasOpacity:      0.88,
    alphaScale:         1.0,       // particle alpha multiplier
    connectionOpacity:  0.13,
    glowL1opacity:      0.10,
    glowL2opacity:      0.12,
    colors:             COLORS_DARK,
  },
  light: {
    blendMode:          "multiply",
    canvasOpacity:      0.65,      // higher than before (was 0.18)
    alphaScale:         1.6,       // boost particle alpha so they're visible
    connectionOpacity:  0.28,      // stronger connections needed on light bg
    glowL1opacity:      0.08,
    glowL2opacity:      0.09,
    colors:             COLORS_LIGHT,
  },
};

/* ─── Base Config ─────────────────────────────────────────── */
const CFG = {
  count:          100,
  sizeMin:        1.0,
  sizeMax:        3.2,
  opacityMin:     0.10,
  opacityMax:     0.55,
  connectionDist: 130,
  repelRadius:    130,
  repelStrength:  62,
  returnStrength: 0.030,
  damping:        0.86,
  glowRadius:     160,
  fps:            60,
};

/* ─── Particle class ──────────────────────────────────────── */
class Particle {
  constructor(W, H, colors) {
    this.W = W;
    this.H = H;
    this.colors = colors;
    this.init();
  }

  init() {
    this.color     = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.homeX     = Math.random() * this.W;
    this.homeY     = Math.random() * this.H;
    this.x         = this.homeX;
    this.y         = this.homeY;
    this.vx        = 0;
    this.vy        = 0;
    this.r         = CFG.sizeMin + Math.random() * (CFG.sizeMax - CFG.sizeMin);
    this.baseAlpha = CFG.opacityMin + Math.random() * (CFG.opacityMax - CFG.opacityMin);
    this.alpha     = this.baseAlpha;
    this.glowSize  = this.r * (3.5 + Math.random() * 3);
  }

  // Swap colour palette when theme changes (preserves position/velocity)
  setColors(colors) {
    this.colors = colors;
    this.color  = colors[Math.floor(Math.random() * colors.length)];
  }

  update(mouse) {
    const dx   = this.x - mouse.x;
    const dy   = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < CFG.repelRadius && dist > 0) {
      const force = (1 - dist / CFG.repelRadius) * CFG.repelStrength;
      this.vx += (dx / dist) * force * 0.018;
      this.vy += (dy / dist) * force * 0.018;
      this.alpha = Math.min(CFG.opacityMax * 1.8, this.alpha + 0.03);
    } else {
      this.alpha += (this.baseAlpha - this.alpha) * 0.04;
    }

    this.vx += (this.homeX - this.x) * CFG.returnStrength;
    this.vy += (this.homeY - this.y) * CFG.returnStrength;
    this.vx *= CFG.damping;
    this.vy *= CFG.damping;
    this.x  += this.vx;
    this.y  += this.vy;
  }

  draw(ctx, alphaScale) {
    const { r: cr, g: cg, b: cb } = this.color;
    const a = Math.min(1, this.alpha * alphaScale);

    // Soft glow halo
    const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
    grd.addColorStop(0,   `rgba(${cr},${cg},${cb},${a * 0.55})`);
    grd.addColorStop(0.4, `rgba(${cr},${cg},${cb},${a * 0.18})`);
    grd.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    // Hard core dot
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${cr},${cg},${cb},${Math.min(1, a * 2.2)})`;
    ctx.fill();
  }
}

/* ─── Helpers ─────────────────────────────────────────────── */
function drawConnections(ctx, particles, connectionOpacity) {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i], b = particles[j];
      const dx   = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= CFG.connectionDist) continue;

      const t     = 1 - dist / CFG.connectionDist;
      const alpha = connectionOpacity * t * t;

      const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      const { r: ar, g: ag, b: ab_c } = a.color;
      const { r: br, g: bg, b: bb_c } = b.color;
      grad.addColorStop(0, `rgba(${ar},${ag},${ab_c},${alpha})`);
      grad.addColorStop(1, `rgba(${br},${bg},${bb_c},${alpha})`);

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth   = 0.7 * t;
      ctx.stroke();
    }
  }
}

function drawCursorGlow(ctx, mouse, themeConfig) {
  const { x, y } = mouse;
  if (x < 0) return;

  const { glowL1opacity, glowL2opacity, colors } = themeConfig;
  const c1 = colors[0]; // blue
  const c2 = colors[2]; // magenta

  const g1 = ctx.createRadialGradient(x, y, 0, x, y, CFG.glowRadius);
  g1.addColorStop(0,   `rgba(${c1.r},${c1.g},${c1.b},${glowL1opacity})`);
  g1.addColorStop(0.5, `rgba(${c1.r},${c1.g},${c1.b},${glowL1opacity * 0.5})`);
  g1.addColorStop(1,   `rgba(${c1.r},${c1.g},${c1.b},0)`);
  ctx.beginPath();
  ctx.arc(x, y, CFG.glowRadius, 0, Math.PI * 2);
  ctx.fillStyle = g1;
  ctx.fill();

  const g2 = ctx.createRadialGradient(x, y, 0, x, y, CFG.glowRadius * 0.4);
  g2.addColorStop(0, `rgba(${c2.r},${c2.g},${c2.b},${glowL2opacity})`);
  g2.addColorStop(1, `rgba(${c2.r},${c2.g},${c2.b},0)`);
  ctx.beginPath();
  ctx.arc(x, y, CFG.glowRadius * 0.4, 0, Math.PI * 2);
  ctx.fillStyle = g2;
  ctx.fill();
}

/* ─── Component ──────────────────────────────────────────── */
export default function ParticleBackground() {
  const canvasRef    = useRef(null);
  const mouseRef     = useRef({ x: -9999, y: -9999 });
  const rafRef       = useRef(null);
  const themeRef     = useRef("dark");   // "dark" | "light"
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let W, H;
    let last     = 0;
    const interval = 1000 / CFG.fps;

    /* ── Detect current theme ─────────────────────────────── */
    function getTheme() {
      return document.body.classList.contains("light") ? "light" : "dark";
    }

    /* ── Rebuild particles (on resize or theme change) ─────── */
    function buildParticles() {
      const colors     = THEME[themeRef.current].colors;
      particlesRef.current = Array.from(
        { length: CFG.count },
        () => new Particle(W, H, colors)
      );
    }

    /* ── Apply canvas CSS properties for current theme ──────── */
    function applyCanvasTheme() {
      const t = THEME[themeRef.current];
      canvas.style.opacity      = t.canvasOpacity;
      canvas.style.mixBlendMode = t.blendMode;
    }

    /* ── Resize handler ───────────────────────────────────── */
    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildParticles();
    }

    /* ── Theme change: swap colours, reapply canvas props ──── */
    function handleThemeChange() {
      const next = getTheme();
      if (next === themeRef.current) return;
      themeRef.current = next;

      // Smoothly swap particle colours without re-building positions
      const colors = THEME[next].colors;
      particlesRef.current.forEach((p) => p.setColors(colors));
      applyCanvasTheme();
    }

    /* ── MutationObserver watches body.classList ────────────── */
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes:      true,
      attributeFilter: ["class"],
    });

    /* ── Input listeners ─────────────────────────────────────  */
    const onMouseMove  = (e) => { mouseRef.current = { x: e.clientX,            y: e.clientY }; };
    const onMouseLeave = ()  => { mouseRef.current = { x: -9999,                y: -9999    }; };
    const onTouchMove  = (e) => { mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
    const onTouchEnd   = ()  => { mouseRef.current = { x: -9999,                y: -9999    }; };

    /* ── Render loop ─────────────────────────────────────────  */
    function loop(ts) {
      rafRef.current = requestAnimationFrame(loop);
      if (ts - last < interval) return;
      last = ts;

      const t = THEME[themeRef.current];

      ctx.clearRect(0, 0, W, H);
      drawCursorGlow(ctx, mouseRef.current, t);
      drawConnections(ctx, particlesRef.current, t.connectionOpacity);
      particlesRef.current.forEach((p) => {
        p.update(mouseRef.current);
        p.draw(ctx, t.alphaScale);
      });
    }

    /* ── Bootstrap ──────────────────────────────────────────── */
    themeRef.current = getTheme();
    applyCanvasTheme();
    resize();

    window.addEventListener("resize",     resize);
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove",  onTouchMove, { passive: true });
    window.addEventListener("touchend",   onTouchEnd);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="bg-grid"        aria-hidden="true" />
      <div className="bg-radial-glow" aria-hidden="true" />
      <div className="bg-scanlines"   aria-hidden="true" />
      <div className="bg-noise"       aria-hidden="true" />
      {/*
        No inline opacity/mixBlendMode here — applyCanvasTheme()
        sets them dynamically so they respond to theme toggles.
      */}
      <canvas
        ref={canvasRef}
        id="particle-canvas"
        aria-hidden="true"
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />
    </>
  );
}