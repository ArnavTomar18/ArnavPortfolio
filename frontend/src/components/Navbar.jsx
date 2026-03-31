import { useState, useEffect } from 'react'

const links = [
  { id: 'about',      label: 'About'        },
  { id: 'experience', label: 'Experience'   },
  { id: 'projects',   label: 'Projects'     },
  { id: 'skills',     label: 'Skills'       },
  { id: 'services',   label: 'Certifications' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [active,      setActive]      = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(s => {
        if (window.pageYOffset >= s.offsetTop - 220) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`
        /* ─── Navbar overrides / enhancements ─────── */

        /* Logo glyph uses Syne if loaded */
        .logo-circle {
          font-family: 'Syne', 'Montserrat', sans-serif !important;
          font-size: 13px !important;
          letter-spacing: -.5px;
        }

        /* Nav link — glow underline on active/hover */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 50%; right: 50%;
          height: 2px;
          background: linear-gradient(90deg,#ff7a18,#ff3d77,#7a5cff);
          border-radius: 2px;
          transition: left .25s ease, right .25s ease, box-shadow .25s ease;
          opacity: 0;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          left: 12px; right: 12px;
          opacity: 1;
          box-shadow: 0 0 8px rgba(255,106,0,.5);
        }

        /* CTA pill button */
        .cta-button {
          border-radius: 999px !important;
          font-family: 'DM Sans', 'Montserrat', sans-serif;
          font-size: 13px !important;
          letter-spacing: .04em;
          padding: 9px 22px !important;
          cursor: pointer;
        }

        /* Mobile CTA */
        .mobile-cta-button {
          border-radius: 999px !important;
          cursor: pointer;
        }

        /* Navbar shimmer line colour tweak */
        .navbar::before {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0,229,255,.4) 20%,
            rgba(255,106,0,.7) 50%,
            rgba(122,92,255,.4) 80%,
            transparent
          ) !important;
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('home') }}>
            <div className="logo-circle">𝔸╥</div>
            <span className="logo-text">Arnav Tomar</span>
          </a>

          {/* Desktop nav */}
          <div className="nav-menu">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link${active === l.id ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); scrollTo(l.id) }}
              >
                {l.label}
              </a>
            ))}
            <button className="cta-button" onClick={() => scrollTo('contact')}>
              Let's Connect
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${mobileOpen ? 'times' : 'bars'}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-menu${mobileOpen ? ' active' : ''}`}>
          {links.map(l => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="mobile-nav-link"
              onClick={e => { e.preventDefault(); scrollTo(l.id) }}
            >
              {l.label}
            </a>
          ))}
          <button className="mobile-cta-button" onClick={() => scrollTo('contact')}>
            Let's Connect
          </button>
        </div>
      </nav>
    </>
  )
}