import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'AI-Powered Lead & Call Management Platform',
    description: 'Built a full-stack platform for call-centre and sales teams with automated lead distribution, Gemini lead categorization (60-80% API call reduction via TTL caching), Chroma Cloud RAG document QA, cookie-based sessions, Docker, and GitHub Actions CI/CD.',
    image: '/assets/jpeg/Project-2.jpg',
    liveLink: 'https://task-flow-five-snowy.vercel.app',
    codeLink: 'https://github.com/Chirag-Tank1971/TaskFlow',
    link: '/projects/taskflow',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini', 'Chroma Cloud', 'Docker', 'CI/CD']
  },
  {
    id: 'binance-bot',
    title: 'Binance Futures Trading Bot',
    subtitle: 'High-Performance Algorithmic Execution Service',
    description: 'A FastAPI trading bot engineered on the Binance Futures Testnet supporting MARKET and LIMIT order execution, real-time account and order tracking, structured error handling, and robust logging validated with pytest and Swagger.',
    image: '/assets/jpeg/Project-1.jpg',
    liveLink: null,
    codeLink: 'https://github.com/Chirag-Tank1971',
    link: '/projects/binance-bot',
    tags: ['Python', 'FastAPI', 'python-binance', 'pytest', 'REST APIs', 'Swagger', 'Postman']
  },
  {
    id: 'swiftmart',
    title: 'SwiftMart E-Commerce',
    subtitle: 'Modern Responsive Shopping Platform',
    description: 'A scalable e-commerce application developed with React.js, Redux Toolkit, and Tailwind CSS. Features real-time search, category filtering, a reactive shopping cart, and secure checkout architecture.',
    image: '/assets/jpeg/Project-3.jpg',
    liveLink: 'https://ecommerce-website-kr4b.vercel.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/Ecommerce_website.git',
    link: '/projects/swiftmart',
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vercel']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">
            Production &amp; <span className="gradient-text">Engineered Projects</span>
          </h2>
          <p className="section-subtitle">
            Showcasing full-stack MERN platforms, automated trading bots, and enterprise web solutions with measurable performance.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="bento-card project-card">
              <div className="project-image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={420}
                  className="project-image"
                />
                <div className="project-image-overlay"></div>
                <div className="project-badge">
                  <span className="pulse-dot"></span>
                  <span>{project.liveLink ? 'Live Demo' : 'Engineered'}</span>
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <motion.span
                      key={tIdx}
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="project-actions">
                  <Link href={project.link} className="btn btn-primary btn-sm">
                    <span>Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <span>Live Demo</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label="GitHub Repository"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3.2rem;
        }
        .project-card {
          padding: 2.4rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-image-wrapper {
          position: relative;
          width: 100%;
          height: 230px;
          border-radius: 1.6rem;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          margin-bottom: 2.4rem;
        }
        :global(.project-image) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover :global(.project-image) {
          transform: scale(1.06);
        }
        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(9, 10, 17, 0.8) 100%);
        }
        .project-badge {
          position: absolute;
          top: 1.4rem;
          right: 1.4rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          background: rgba(9, 10, 17, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 9999px;
          font-size: 1.2rem;
          color: var(--accent-emerald);
          font-weight: 600;
        }
        .project-info {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.8rem;
        }
        .project-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          color: var(--accent-primary);
          font-weight: 700;
        }
        .project-subtitle {
          font-size: 1.3rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .project-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .project-desc {
          font-size: 1.45rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.8rem;
          flex: 1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.4rem;
        }
        .project-actions {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-image-wrapper {
            height: 190px;
          }
        }
      `}</style>
    </section>
  );
}
