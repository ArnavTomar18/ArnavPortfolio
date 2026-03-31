import { useEffect, useRef, useState } from 'react'

const certs = [
  { icon: 'fa-certificate', img: '/images/Arnav Tomar_internship_Certificate.png', title: 'Ashna AI Internship Completion', desc: 'Completed internship focused on AI development and applied ML projects.' },
  { icon: 'fa-award', img: '/images/Openaihackathon.jpg', title: 'OpenAI Hackathon Certification', desc: "Recognized for participating in OpenAI's NextWave Hackathon – Sep 2025." },
  { icon: 'fa-database', img: '/images/eCertificate_Oracle.jpg', title: 'Oracle Data Science Professional Certificate', desc: 'Issued Oct 2025 — Demonstrated proficiency in data analysis and ML workflows.' },
  { icon: 'fa-chart-line', img: '/images/deloitte_analyist.jpg', title: 'Deloitte Australia – Data Analytics Job Simulation', desc: 'Forage Program — Completed Aug 2025 showcasing business data insights.' },
  {
    icon: 'fa-aws',
    img: '/images/aws_ai_practitioner.jpg',
    title: 'AWS Certified AI Practitioner – Pretest',
    desc: 'AWS Training & Certification | Completed Jan 2026 — Covered AI/ML fundamentals, cloud concepts, and AWS AI services.'
  },
  {
    icon: 'fa-database',
    img: '/images/ibm_python_datascience.jpg',
    title: 'Python for Data Science, AI & Development',
    desc: 'IBM (Coursera) | Completed Oct 2025 — Hands-on Python, data handling, and AI basics.'
  },
  {
    icon: 'fa-cogs',
    img: '/images/servicenow_micro.jpg',
    title: 'ServiceNow Micro-Certification',
    desc: 'ServiceNow | Issued Apr 2025 — Intro to workflows, platform basics, and enterprise automation.'
  },
  { icon: 'fa-brain', img: '/images/Coursera_project1.jpg', title: 'Python Case Study – Sentiment Analysis', desc: 'Infosys Springboard | Completed Jun 2025 — Applied NLP for sentiment prediction.' },
  { icon: 'fa-comment-dots', img: '/images/SpringBoard.jpg', title: 'NLP: Twitter Sentiment Analysis', desc: 'Coursera | Completed May 2025 — Text classification using NLP techniques.' },
]

export default function Certifications() {
  const sectionRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    const elements = sectionRef.current?.querySelectorAll('.observe-me')
    elements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [visibleCount])

  const handleViewMore = () => {
    setVisibleCount(certs.length)

    setTimeout(() => {
      window.scrollBy({
        top: 200,
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header observe-me">
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="services-grid">
          {certs.slice(0, visibleCount).map(c => (
            <div key={c.title} className="service-card observe-me">
              <div className="service-icon">
                <i className={`fas ${c.icon}`}></i>
              </div>
              <img src={c.img} alt={c.title} />
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        {visibleCount < certs.length && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="view-more-btn" onClick={handleViewMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}