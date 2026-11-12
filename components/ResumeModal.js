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
              Full-stack developer (MERN, ASP.NET Core, Python) with hands-on experience evaluating, fine-tuning and deploying OCR and vision-language models on NVIDIA GPU hardware for multilingual document digitisation in Hindi, Urdu and Kaithi. Experienced in building web platforms across HR tech, ed-tech and social media, and in integrating LLM APIs for task classification and routing.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, C#
              </div>
              <div>
                <strong>Frontend:</strong> React.js, Angular, Tailwind CSS
              </div>
              <div>
                <strong>Backend:</strong> Node.js, Express.js, ASP.NET Core, FastAPI, REST APIs, WebSockets, JWT Authentication
              </div>
              <div>
                <strong>AI/ML &amp; LLM:</strong> OCR/HTR, Vision-Language Models (Qwen-VL, Gemma, Gemini), PaddleOCR, IndicOCR, Kraken, eScriptorium, Transkribus, Model Fine-Tuning, Model Evaluation &amp; Benchmarking, Local VLM Deployment (NVIDIA DGX Spark), Google Gemini API, OpenRouter
              </div>
              <div>
                <strong>Databases:</strong> MongoDB, SQL Server, Entity Framework Core
              </div>
              <div>
                <strong>Testing &amp; API Tools:</strong> Jest, pytest, Postman, Swagger
              </div>
              <div>
                <strong>Cloud &amp; DevOps:</strong> Docker, GitHub Actions (CI/CD), AWS S3, Vercel, Render, Git
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
                <p className="project-sublinks"><strong>Document Digitisation (OCR/HTR) for Government Records</strong></p>
                <ul className="resume-list">
                  <li>Evaluated 8+ OCR engines and vision-language models, including PaddleOCR, IndicOCR, GLM-OCR, Qwen3-VL, Gemma and Gemini, for text extraction from thousands of government documents in Hindi, Urdu and Kaithi script.</li>
                  <li>Designed a two-stage pipeline using IndicOCR for region detection followed by VLM parsing of each region.</li>
                  <li>Deployed and ran open-weight VLMs locally on an NVIDIA DGX Spark (GB10), comparing them against paid APIs on accuracy, speed and cost.</li>
                  <li>Fine-tuned handwriting recognition models with Kraken on character, word, sentence and paragraph-level datasets, using eScriptorium and Transkribus for annotation and transcription.</li>
                </ul>
                <p className="project-sublinks"><strong>HR Quarterly Review &amp; Appraisal System</strong></p>
                <ul className="resume-list">
                  <li>Building a MERN-stack appraisal platform with multi-role workflows for admins, managers and employees.</li>
                  <li>Implemented KRA-based scoring to standardise and automate quarterly performance evaluations across teams.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <strong>Associate Full Stack Developer (Contract) — Myna Solutions</strong>
                  <span className="exp-date">Oct 2025 – Jan 2026 | Hyderabad, India (Remote)</span>
                </div>
                <ul className="resume-list">
                  <li>Built an AI-powered online tutoring platform end-to-end with React and Node.js, including personalised learning paths and real-time progress tracking for students and tutors.</li>
                  <li>Delivered live tutoring sessions over WebSockets, with AWS S3 for content storage and RESTful APIs behind a responsive React and Tailwind CSS interface.</li>
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
                  <li>Integrated an AI-powered chat feature into the platform using the OpenRouter API.</li>
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
                  <strong>TaskFlow – AI Task Management System</strong>
                  <span className="exp-tags">React.js, Express.js, Node.js, MongoDB, Google Gemini API</span>
                </div>
                <p className="project-sublinks">
                  Live demo: <a href="https://task-flow-five-snowy.vercel.app" target="_blank" rel="noreferrer">task-flow-five-snowy.vercel.app</a> | GitHub: <a href="https://github.com/Chirag-Tank1971/TaskFlow" target="_blank" rel="noreferrer">github.com/Chirag-Tank1971/TaskFlow</a>
                </p>
                <ul className="resume-list">
                  <li>Built a task-processing pipeline with separate classification, routing and CSV/file-processing layers, so new task types can be added without changing the rest of the system.</li>
                  <li>Implemented a TTL-based caching layer keyed on request parameters and checked before external calls, cutting redundant Gemini API calls by 60–80%.</li>
                  <li>Added JWT authentication, rate limiting and bulk operations that split large CSV datasets into independently processed batches to avoid timeouts.</li>
                  <li>Deployed the frontend on Vercel and the Dockerised backend on Render, with a GitHub Actions CI/CD pipeline that builds, tests (Jest) and deploys on every push and pull request.</li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="exp-header">
                  <strong>Binance Futures Trading Bot</strong>
                  <span className="exp-tags">Python, FastAPI, python-binance</span>
                </div>
                <ul className="resume-list">
                  <li>Built a FastAPI trading bot on the Binance Futures Testnet with MARKET and LIMIT order execution, structured error handling and logging, tested with pytest.</li>
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
                <p className="exp-school">Sri Balaji College of Engineering and Technology, Jaipur, Rajasthan</p>
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
