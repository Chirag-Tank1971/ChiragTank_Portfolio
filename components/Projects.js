import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    subtitle: 'AI Task Management System',
    description: 'A task-processing pipeline with separate classification, routing and CSV/file-processing layers, a TTL cache that cuts redundant Gemini API calls by 60–80%, JWT authentication, rate limiting, and a Dockerised backend deployed via GitHub Actions CI/CD.',
    image: '/assets/project_img/taskflow.png',
    liveLink: 'https://task-flow-five-snowy.vercel.app',
    codeLink: 'https://github.com/Chirag-Tank1971/TaskFlow',
    link: '/projects/taskflow',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Gemini', 'JWT', 'Docker', 'CI/CD']
  },
  {
    id: 'binance-bot',
    title: 'Binance Futures Trading Bot',
    subtitle: 'High-Performance Algorithmic Execution Service',
    description: 'A FastAPI trading bot engineered on the Binance Futures Testnet supporting MARKET and LIMIT order execution, structured error handling and logging, tested with pytest.',
    image: '/assets/project_img/tradingbot.png',
    liveLink: 'https://frontend-tawny-zeta-56.vercel.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/Tradingbot',
    link: '/projects/binance-bot',
    tags: ['Python', 'FastAPI', 'python-binance', 'pytest', 'REST APIs']
  },
  {
    id: 'swiftmart',
    title: 'SwiftMart E-Commerce',
    subtitle: 'Modern Responsive Shopping Platform',
    description: 'A scalable e-commerce application developed with React.js, Redux Toolkit, and Tailwind CSS. Features real-time search, category filtering, a reactive shopping cart, and secure checkout architecture.',
    image: '/assets/project_img/swiftmart.png',
    liveLink: 'https://ecommerce-website-kr4b.vercel.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/Ecommerce_website.git',
    link: '/projects/swiftmart',
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vercel']
  }
];

const GithubMark = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A task-routing system, a trading bot and an online store, each deployed and linked below.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.id} className="project">
              <Link href={project.link} className="project-image-wrapper" aria-label={`${project.title} case study`}>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={1400}
                  height={640}
                  className="project-image"
                />
              </Link>

              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>

                <div className="project-main">
                  <p className="project-desc">{project.description}</p>
                  <p className="project-stack">{project.tags.join(', ')}</p>

                  <div className="project-actions">
                    <Link href={project.link} className="btn btn-primary btn-sm">
                      Read case study
                    </Link>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        Open live site
                      </a>
                    )}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <GithubMark />
                      <span>Source code</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 7.2rem;
        }
        .project {
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
        }
        .project-image-wrapper {
          display: block;
          width: 100%;
          aspect-ratio: 1917 / 870;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          overflow: hidden;
          background: var(--bg-canvas-subtle);
        }
        :global(.project-image) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .project-body {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
        }
        .project-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 500;
          line-height: 1.15;
          color: var(--text-primary);
          margin-bottom: 0.8rem;
        }
        .project-subtitle {
          font-size: 1.5rem;
          color: var(--text-muted);
        }
        .project-desc {
          font-size: 1.6rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 62ch;
          margin-bottom: 1.4rem;
        }
        .project-stack {
          font-size: 1.35rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.4rem;
        }
        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        @media (max-width: 860px) {
          .project-body {
            grid-template-columns: 1fr;
            gap: 1.8rem;
          }
          .project-title {
            font-size: 2.6rem;
          }
          .projects-list {
            gap: 5.6rem;
          }
        }
      `}</style>
    </section>
  );
}
