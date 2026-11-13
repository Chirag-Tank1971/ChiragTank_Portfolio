import { motion } from 'framer-motion';

export default function About() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C#']
    },
    {
      title: 'Frontend Development',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ['React.js', 'Angular', 'Tailwind CSS']
    },
    {
      title: 'Backend & Systems',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT Authentication']
    },
    {
      title: 'Databases & Storage',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ['MongoDB', 'SQL Server', 'Entity Framework Core']
    },
    {
      title: 'AI/ML & LLM',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      ),
      skills: ['OCR/HTR', 'Vision-Language Models (Qwen-VL, Gemma, Gemini)', 'PaddleOCR', 'IndicOCR', 'Kraken', 'eScriptorium', 'Transkribus', 'Model Fine-Tuning', 'Model Evaluation & Benchmarking', 'Local VLM Deployment (NVIDIA DGX Spark)', 'Google Gemini API', 'OpenRouter']
    },
    {
      title: 'Cloud, DevOps & Testing',      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: ['Docker', 'GitHub Actions (CI/CD)', 'AWS S3', 'Vercel', 'Render', 'Jest', 'pytest', 'Postman', 'Swagger']
    }
  ];

  const highlights = [
    {
      title: '8+ OCR and vision-language models benchmarked',
      text: 'Open-weight models on an NVIDIA DGX Spark compared against paid APIs on accuracy, speed and cost.'
    },
    {
      title: '60–80% fewer redundant API calls',
      text: 'TTL caching and model fallback for the Gemini integration in TaskFlow.'
    },
    {
      title: '~30% faster queries',
      text: 'Schema redesign and Entity Framework Core optimisation on SQL Server.'
    },
    {
      title: 'Tested and shipped through CI/CD',
      text: 'GitHub Actions pipelines, Docker, Jest and pytest.'
    }
  ];

  return (
    <section id="about" className="section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Full-stack development with MERN, ASP.NET Core and Python, plus hands-on OCR and vision-language model work for multilingual document digitisation.
          </p>
        </motion.div>

        <div className="about-grid">
          <div className="bio">
            <p className="bio-para">
              I am a full-stack developer based in Jaipur, Rajasthan (MERN, ASP.NET Core, Python) with hands-on experience evaluating, fine-tuning and deploying OCR and vision-language models on NVIDIA GPU hardware for multilingual document digitisation in Hindi, Urdu and Kaithi.
            </p>
            <p className="bio-para">
              I have built web platforms across HR tech, ed-tech and social media, and I integrate LLM APIs for task classification and routing. I finish my MCA in 2026 and I am open to remote work and relocation.
            </p>
            <a href="#contact" className="btn btn-primary btn-sm">
              Get in touch
            </a>
          </div>

          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h.title}>
                <h3 className="highlight-title">{h.title}</h3>
                <p className="highlight-text">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div id="skills" className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <dl className="skills-list">
            {skillCategories.map((category) => (
              <div key={category.title} className="skills-row">
                <dt className="skills-name">{category.title}</dt>
                <dd className="skills-items">{category.skills.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 6.4rem;
          margin-bottom: 9rem;
        }
        .bio-para {
          font-size: 1.7rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 60ch;
          margin-bottom: 1.8rem;
        }
        .bio .btn {
          margin-top: 1rem;
        }
        .highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
        }
        .highlights li {
          padding: 2rem 0;
          border-top: 1px solid var(--border-subtle);
        }
        .highlights li:last-child {
          border-bottom: 1px solid var(--border-subtle);
        }
        .highlight-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          line-height: 1.25;
        }
        .highlight-text {
          font-size: 1.45rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .skills-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 500;
          margin-bottom: 2.4rem;
        }
        .skills-list {
          border-top: 1px solid var(--border-subtle);
        }
        .skills-row {
          display: grid;
          grid-template-columns: 22rem 1fr;
          gap: 2.4rem;
          padding: 1.8rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .skills-name {
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .skills-items {
          font-size: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 70ch;
        }
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            margin-bottom: 6rem;
          }
          .skills-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
        }
      `}</style>
    </section>
  );
}
