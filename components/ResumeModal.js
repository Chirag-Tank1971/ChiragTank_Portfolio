import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-content bento-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          >
            <div className="modal-header">
              <div>
                <span className="section-tag">Resume / CV</span>
                <h2 className="modal-title">CHIRAG TANK</h2>
                <p className="modal-subtitle">
                  Full Stack Developer &bull; Rajasthan, India &bull; Open to remote work and relocation
                </p>
            <div className="contact-badges">
              <a href="mailto:chiragtank1971@gmail.com" className="badge-link">
                chiragtank1971@gmail.com
              </a>
              <span className="badge-sep">&bull;</span>
              <a href="tel:+916367583182" className="badge-link">
                +91-6367583182
              </a>
              <span className="badge-sep">&bull;</span>
              <a href="https://github.com/Chirag-Tank1971" target="_blank" rel="noreferrer" className="badge-link">
                github.com/Chirag-Tank1971
              </a>
              <span className="badge-sep">&bull;</span>
              <a href="https://linkedin.com/in/chirag-tank" target="_blank" rel="noreferrer" className="badge-link">
                linkedin.com/in/chirag-tank
              </a>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">Summary</h3>
            <p className="resume-text">
              Full-stack developer who has built and deployed MERN and ASP.NET Core applications, including a multi-role HR performance review platform at Mintergraph and TaskFlow, an AI-assisted lead management platform. Improved database query performance by ~30% and cut redundant API calls by 60–80% through TTL caching. Experienced with REST API design, Docker, and GitHub Actions CI/CD, and with integrating LLM APIs (Gemini, OpenRouter) into products. MCA (2026).
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, C#, HTML5, CSS3
              </div>
              <div>
                <strong>Frontend:</strong> React.js, Angular, Tailwind CSS
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Express.js, ASP.NET Core, FastAPI, REST APIs, WebSockets
              </div>
              <div>
                <strong>Databases:</strong> MongoDB, SQL Server, PostgreSQL
              </div>
              <div>
                <strong>Cloud &amp; DevOps:</strong> Docker, GitHub Actions (CI/CD), AWS S3, Vercel, Render, Git
              </div>
              <div>
                <strong>AI &amp; LLM:</strong> Google Gemini API, OpenRouter, RAG, Vector Database (Chroma Cloud), Prompt Engineering
              </div>
              <div>
                <strong>Testing:</strong> Jest, pytest, Postman, Swagger
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">Work Experience</h3>
            <div className="experience-items">
              <div className="exp-item">
                <div className="exp-header">
                  <strong>Full Stack Developer — Mintergraph</strong>
                  <span className="exp-date">Sept 2026 – Present | Jaipur, Rajasthan</span>
                </div>
                <ul className="resume-list">
                  <li>Building a full-stack HR Quarterly Review &amp; Appraisal System on the MERN stack, with multi-role workflows for admins, managers, and employees.</li>
                  <li>Implementing KRA (Key Result Area)-based scoring to standardize and automate quarterly performance evaluations across teams.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <strong>Associate Full Stack Developer (Contract) — Myna Solutions</strong>
                  <span className="exp-date">Oct 2025 – Jan 2026 | Hyderabad, India (Remote)</span>
                </div>
                <ul className="resume-list">
                  <li>Developed an online tutoring platform with personalized learning paths and real-time progress tracking for students and tutors, using React and Node.js.</li>
                  <li>Built responsive React and Tailwind CSS interfaces integrated with REST APIs, AWS S3 storage, and WebSocket-based live sessions for real-time tutoring.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <strong>.NET Full Stack Developer Intern — Pratham Software (PSI)</strong>
                  <span className="exp-date">May 2025 – Aug 2025 | Jaipur, Rajasthan</span>
                </div>
                <ul className="resume-list">
                  <li>Developed a social media platform using ASP.NET Core, C#, SQL Server, and Angular, following N-tier architecture.</li>
                  <li>Designed database schemas and data access layers with Entity Framework Core, improving query performance by ~30%.</li>
                  <li>Integrated the OpenRouter API to add an AI chat feature alongside real-time user-to-user messaging.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="resume-section">
            <h3 className="resume-section-title">Projects</h3>
            <div className="experience-items">
              <div className="exp-item">
                <div className="exp-header">
                  <strong>TaskFlow – AI-Powered Lead &amp; Call Management Platform</strong>
                  <span className="exp-tags">React, Node.js, Express, MongoDB, Gemini, Chroma</span>
                </div>
                <p className="project-sublinks">
                  Live demo: <a href="https://task-flow-five-snowy.vercel.app" target="_blank" rel="noreferrer">task-flow-five-snowy.vercel.app</a> | GitHub: <a href="https://github.com/Chirag-Tank1971/TaskFlow" target="_blank" rel="noreferrer">github.com/Chirag-Tank1971/TaskFlow</a>
                </p>
                <ul className="resume-list">
                  <li>Built a full-stack platform for call-centre and sales teams: CSV/manual lead import, automatic distribution across available agents, call outcome logging, callback scheduling, manager dashboards, and RBAC.</li>
                  <li>Integrated Google Gemini to categorize leads; a TTL cache cut redundant API calls by 60–80%, with retry and model fallback on overload or quota errors.</li>
                  <li>Added a RAG knowledge base on Chroma Cloud that answers agents&apos; questions from company documents with citations, plus full audit trails.</li>
                  <li>Secured with cookie-based sessions, rate limiting, and input validation; CI/CD pipeline via GitHub Actions on Vercel and Render with Docker.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <strong>Binance Futures Trading Bot</strong>
                  <span className="exp-tags">Python, FastAPI, python-binance</span>
                </div>
                <ul className="resume-list">
                  <li>Built a FastAPI trading bot on the Binance Futures Testnet with MARKET/LIMIT order execution, account and order management, structured error handling, and logging; tested with pytest, Postman, and Swagger.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="experience-items">
              <div className="exp-item">
                <div className="exp-header">
                  <strong>Master of Computer Applications (MCA)</strong>
                  <span className="exp-date">2024 – 2026</span>
                </div>
                <p className="exp-school">Sri Balaji College of Engineering and Technology, Jaipur</p>
              </div>
              <div className="exp-item">
                <div className="exp-header">
                  <strong>Bachelor of Computer Applications (BCA)</strong>
                  <span className="exp-date">2021 – 2024</span>
                </div>
                <p className="exp-school">Sri Balaji College of Engineering and Technology, Jaipur</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="mailto:chiragtank1971@gmail.com?subject=Job%20Opportunity%20-%20Chirag%20Tank"
            className="btn btn-secondary btn-sm"
          >
            Get in Touch
          </a>
          <button
            onClick={() => window.print()}
            className="btn btn-primary btn-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Print / Save PDF
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }
        .modal-content {
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-card);
          padding: 3.6rem;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.4rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .modal-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0.8rem 0 0.4rem;
        }
        .modal-subtitle {
          font-size: 1.45rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .contact-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.3rem;
          color: var(--accent-primary);
        }
        .badge-link {
          color: var(--accent-primary);
          font-weight: 500;
        }
        .badge-link:hover {
          text-decoration: underline;
        }
        .badge-sep {
          color: var(--text-muted);
        }
        .modal-close {
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .modal-close:hover {
          color: var(--text-primary);
          border-color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
        }
        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
        }
        .resume-section-title {
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(99, 102, 241, 0.15);
          padding-bottom: 0.4rem;
        }
        .resume-text {
          font-size: 1.45rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .resume-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
          font-size: 1.4rem;
          color: var(--text-secondary);
        }
        .resume-skills-grid strong {
          color: var(--text-primary);
        }
        .experience-items {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .exp-item {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.8rem;
          font-size: 1.5rem;
          color: var(--text-primary);
        }
        .exp-date {
          font-size: 1.3rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
        }
        .exp-tags {
          font-size: 1.3rem;
          color: var(--accent-secondary);
          font-family: 'JetBrains Mono', monospace;
        }
        .exp-school {
          font-size: 1.4rem;
          color: var(--text-secondary);
        }
        .project-sublinks {
          font-size: 1.3rem;
          color: var(--text-muted);
        }
        .project-sublinks a {
          color: var(--accent-primary);
        }
        .project-sublinks a:hover {
          text-decoration: underline;
        }
        .resume-list {
          padding-left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-size: 1.35rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1.2rem;
          margin-top: 3.2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
