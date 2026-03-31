import { useEffect, useRef } from 'react'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-up'))
    }, { threshold: 0.1 })
    sectionRef.current?.querySelectorAll('.observe-me').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header observe-me">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">

          {/* ── CodSoft ─────────────────────────────────── */}
          <div className="timeline-item observe-me">
            <div className="timeline-content">
              <h3>Machine Learning Engineer Intern</h3>
              <h4>CodSoft</h4>
              <div className="timeline-period">Dec 2025 – Jan 2026 · 1 mos</div>
              <p>
                Built and evaluated machine learning models using Python, focusing on data
                preprocessing, feature engineering, and model performance improvement.
                Gained hands-on experience in end-to-end ML workflows and best practices.
              </p>
            </div>
          </div>

          {/* ── Ashna AI ────────────────────────────────── */}
          <div className="timeline-item observe-me">
            <div className="timeline-content">
              <h3>Data Analyst Intern</h3>
              <h4>Ashna AI · ScholarRankAI</h4>
              <div className="timeline-period">Apr 2025 – Jul 2025 · 3 mos · Hybrid</div>
              <p>
                Processed and cleaned structured datasets using Python (Pandas, NumPy),
                improving data usability for downstream analytics. Conducted exploratory
                data analysis and built visual reports using Matplotlib to support
                data-driven decisions for the ScholarRankAI platform.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}