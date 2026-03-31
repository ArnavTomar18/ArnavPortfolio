import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';

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
function ProjectCard({ project, index }) {
  const {
    title,
    description,
    tech_stack = [],
    github,
    live_demo,
    highlights = [],
    year,
  } = project;

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28, delay: index * 0.12 }}
    >
      <div className="project-content">
        {/* Header */}
        <div className="pc-header">
          <div className="pc-header-row">
            <div className="pc-badge">
              <Zap size={11} />
              Project
            </div>
            {year && <span className="pc-year">{year}</span>}
          </div>
          <h3>{title}</h3>
        </div>

        {/* Description */}
        <p>{description}</p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="pc-highlights">
            {highlights.slice(0, 3).map((h, i) => (
              <li key={i}>
                <span className="bullet">▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        {tech_stack.length > 0 && (
          <div className="tech-stack">
            {tech_stack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        {/* Links */}
        {(github || live_demo) && (
          <div className="pc-links">
            {github && (
              <a
                href={github.startsWith('http') ? github : `https://${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-link pc-link-ghost"
              >
                <Github size={14} />
                GitHub
              </a>
            )}

            {live_demo && (
              <a
                href={live_demo.startsWith('http') ? live_demo : `https://${live_demo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pc-link pc-link-primary"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} index={i} />
      ))}
    </div>
  );
}