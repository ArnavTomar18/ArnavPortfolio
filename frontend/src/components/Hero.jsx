import { useState, useEffect, useRef } from 'react'

const roles = [
  {
    text: "Data & ML Engineer",
    description: "Turning raw data into deployable machine learning systems."
  },
  {
    text: "Full Stack ML Developer",
    description: "Creating production-ready ML applications with FastAPI, React, and real-time data pipelines."
  },
  {
    text: "Data Scraper",
    description: "Extracting high-quality datasets through scalable web scraping."
  },
  {
    text: "Data Science Student",
    description: "Focused on practical learning through projects, datasets, and experimentation."
  }
]

const badges = [
  { icon: '🤖', label: 'ML Engineer', cls: 'badge-tl' },
  { icon: '📊', label: 'Data Analyst', cls: 'badge-tr' },
  { icon: '🐍', label: 'Python Dev', cls: 'badge-br' },
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [description, setDescription] = useState('')
  const [descVisible, setDescVisible] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [imgError, setImgError] = useState(false)
  const rafRef = useRef(null)

  /* ── typewriter ─────────────────────────────────────── */
  useEffect(() => {
    const role = roles[roleIndex]
    let timeout

    if (!isDeleting && displayText === role.text) {
      setDescription(role.description)
      setDescVisible(true)
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setDescVisible(false)
      setRoleIndex(i => (i + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText(t => t.slice(0, -1)), 45)
    } else {
      timeout = setTimeout(
        () => setDisplayText(role.text.slice(0, displayText.length + 1)),
        95
      )
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  /* ── smooth scroll helper ───────────────────────────── */
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── Fonts injected once ─────────────────────── */}

      <section id="home" className="hero">
        {/* radial sweep — sits above canvas, below content */}
        <div className="hero-sweep" aria-hidden="true" />

        <div className="hero-two-col">

          {/* ── LEFT COLUMN ──────────────────────────────── */}
          <div className="hero-left">

            {/* name */}
            <h1 className="hero-name">
              <span className="name-first">ARNAV</span>
              <span className="name-last">TOMAR</span>
            </h1>

            {/* typewriter */}
            <div className="typewriter-container hero-tw">
              <div className="typewriter-text">{displayText}</div>
            </div>

            {/* description fades in/out with the role */}
            <p className="hero-desc" style={{ opacity: descVisible ? 1 : 0 }}>
              {description ||
                'Turning raw data into intelligent systems — merging machine learning, NLP, and full-stack engineering to build real-world AI solutions.'}
            </p>

            {/* CTA buttons */}
            <div className="hero-cta-row">
              <a
                href="https://github.com/ArnavTomar18"
                className="hbtn hbtn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-code" />
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1uCP92keu6DWzv7F38emGGxBuhxJl-h4I/view?usp=sharing"
                className="hbtn hbtn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-download" />
                Resume
              </a>
              <a
                href="#contact"
                className="hbtn hbtn-outline"
                onClick={e => { e.preventDefault(); scrollTo('contact') }}
              >
                <i className="fas fa-hand-sparkles" />
                Say Hello 👋
              </a>
            </div>

          </div>{/* /hero-left */}


          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div className="hero-right">

            {/* floating badges */}
            {badges.map(b => (
              <div key={b.label} className={`float-badge ${b.cls}`}>
                <span className="badge-icon">{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}

            {/* avatar with rings */}
            <div className="avatar-stage">
              <div className="ring ring-1" />
              <div className="ring ring-2" />
              <div className="ring ring-3" />
              <div className="ring ring-pulse" />

              <div className="avatar-frame">
                {!imgError ? (
                  <img
                    src="images/profile.jpg"
                    alt="Arnav Tomar"
                    className="avatar-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="avatar-fallback">AT</div>
                )}
              </div>

              {/* orbiting dot */}
              <div className="orbit-dot" aria-hidden="true" />
            </div>

          </div>{/* /hero-right */}

        </div>{/* /hero-two-col */}

        {/* scroll cue */}
        <a
          href="#about"
          className="scroll-cue"
          aria-label="Scroll to about"
          onClick={e => { e.preventDefault(); scrollTo('about') }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.8"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>

      </section>
    </>
  )
}