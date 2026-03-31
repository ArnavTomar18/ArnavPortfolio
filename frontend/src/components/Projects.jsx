import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Sentiment Intelligence Engine',
    desc: 'Multi-domain AI/ML platform with 18+ models for classification and recommendation.',
    tags: ['Python', 'FastAPI', 'React', 'XGBoost'],
    live: 'https://sentiment-intelligence-engine.vercel.app',
    code: 'https://github.com/arnavtomar18/Sentiment-Intelligence-Engine',
    gradient: 'gradient-blue',
    year: '2026',
  },
    {
    title: 'FocusPlus',
    desc: 'AI-powered productivity dashboard with real-time attention tracking and smart task management.',
    tags: ['React', 'Vite', 'JavaScript', 'MediaPipe'],
    live: 'https://focusplus-gray.vercel.app/',
    code: 'https://github.com/arnavtomar18/focusplus',
    gradient: 'gradient-purple',
    year: '2026',
  },
  {
    title: 'Sentiment Analysis',
    desc: 'NLP model for sentiment classification with preprocessing and visualization.',
    tags: ['Python', 'NLP', 'Scikit-learn'],
    live: 'https://github.com/arnavtomar18/Sentiment-Analysis',
    code: 'https://github.com/arnavtomar18/Sentiment-Analysis',
    gradient: 'gradient-pink',
    year: '2025',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-up'))
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.observe-me').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, url) => {
    e.preventDefault()
    const icon = e.currentTarget.querySelector('i')
    if (!icon) return window.open(url, '_blank')
    const orig = icon.className
    icon.className = 'fas fa-spinner fa-spin'
    setTimeout(() => { icon.className = orig; window.open(url, '_blank') }, 800)
  }

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header observe-me">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.title} className={`project-card ${p.gradient} observe-me`}>
              <div className="project-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3>{p.title}</h3>
                  <span className="tech-tag" style={{ fontSize: '0.75rem', opacity: 0.8, whiteSpace: 'nowrap', marginLeft: '0.5rem' }}>{p.year}</span>
                </div>
                <p>{p.desc}</p>
                <div className="tech-stack">
                  {p.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.live} className="project-link" onClick={e => handleLinkClick(e, p.live)}>
                    <i className="fas fa-external-link-alt"></i> Live
                  </a>
                  <a href={p.code} className="project-link" onClick={e => handleLinkClick(e, p.code)}>
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}