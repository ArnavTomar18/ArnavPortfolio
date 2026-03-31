import { useEffect, useRef } from 'react'

const left = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'C', 'SQL (MySQL)'],
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'XGBoost', 'Supervised Learning', 'Classification', 'Regression', 'Ensemble Methods', 'Model Evaluation'],
  },
  {
    title: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Data Cleaning', 'EDA'],
  },
]

const right = [
    {
    title: 'Tools & Platforms',
    skills: ['Jupyter Notebook', 'Google Colab', 'VS Code', 'Git', 'GitHub', 'Kaggle'],
  },
  {
    title: 'Concepts',
    skills: ['Machine Learning', 'Sentiment Analysis', 'TF-IDF', 'Data Scraping'],
  },
    {
    title: 'Visualization',
    skills: ['Matplotlib', 'Seaborn'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-up')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.observe-me').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header observe-me">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-brain">
          {left.map((lCat, i) => {
            const rCat = right[i]
            return (
              <div key={lCat.title} className="skills-row observe-me">

                {/* Left card */}
                <div className="skill-category skill-category--left">
                  <h3>{lCat.title}</h3>
                  <div className="skill-tags">
                    {lCat.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                </div>

                {/* Centre connector */}
                <div className="skills-connector">
                  <div className="connector-h">
                    <div className="connector-line"></div>
                    <div className="connector-node"></div>
                    <div className="connector-line connector-line--right"></div>
                  </div>
                </div>

                {/* Right card */}
                <div className="skill-category skill-category--right">
                  <h3>{rCat.title}</h3>
                  <div className="skill-tags">
                    {rCat.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}