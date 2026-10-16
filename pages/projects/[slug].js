import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ResumeModal from '../../components/ResumeModal';

const projectData = {
  taskflow: {
    title: 'TaskFlow',
    subtitle: 'AI-Powered Lead & Call Management Platform',
    description: 'An enterprise-scale platform for call-centre and sales teams featuring automated lead distribution, Google Gemini AI categorization with TTL caching (cutting redundant API calls by 60–80%), and a Chroma Cloud RAG knowledge base.',
    liveLink: 'https://task-flow-five-snowy.vercel.app',
    codeLink: 'https://github.com/Chirag-Tank1971/TaskFlow',
    image: '/assets/jpeg/Project-2.jpg',
    paragraphs: [
      'TaskFlow is a production-grade full-stack platform built for call-centre and sales teams to streamline customer outreach, lead management, and agent productivity. The system handles CSV and manual lead ingestion with automated distribution algorithms that route prospective leads across currently available sales agents, call outcome logging, callback scheduling, manager dashboards, and fine-grained role-based access control.',
      'Integrated with Google Gemini LLM to automatically analyze, summarize, and categorize incoming leads into key buckets (Sales, Billing, Technical, Support, Urgent, General). To optimize resource utilization and maintain low latency, a smart TTL cache was engineered that reduced redundant API calls by 60–80%, complete with exponential backoff retries and model fallback on overload or quota limitations.',
      'Engineered an intelligent Retrieval-Augmented Generation (RAG) knowledge base leveraging Chroma Cloud Vector Database, empowering sales agents to query internal company documentation with instant grounded citations during live calls. All document revisions and data mutations are tracked with an immutable audit trail.',
      'Secured using HTTP-only cookie-based sessions, rate limiting, and defensive input validation. Deployed seamlessly across Vercel and Render using Docker containers, backed by an automated GitHub Actions CI/CD pipeline executing unit testing with Jest, pytest, and API verification via Postman and Swagger.'
    ],
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Gemini API', 'Chroma Cloud (RAG)', 'Docker', 'GitHub Actions (CI/CD)', 'Jest', 'Postman']
  },
  'binance-bot': {
    title: 'Binance Futures Trading Bot',
    subtitle: 'High-Performance Algorithmic Order Execution Service',
    description: 'A robust FastAPI trading service on the Binance Futures Testnet with MARKET and LIMIT order execution, real-time account and order tracking, structured error handling, and pytest-validated test suites.',
    liveLink: null,
    codeLink: 'https://github.com/Chirag-Tank1971',
    image: '/assets/jpeg/Project-1.jpg',
    paragraphs: [
      'An asynchronous algorithmic trading bot developed in Python with FastAPI, engineered to execute high-frequency order operations on the Binance Futures Testnet via the python-binance SDK.',
      'Features comprehensive order execution routines supporting both MARKET and LIMIT orders, precision position sizing, leverage calculation, account balance synchronization, and real-time open order tracking with millisecond-level reaction times.',
      'Architected with structured hierarchical error handling to manage exchange disconnection, margin call notifications, and rate-limiting throttling. Validated through automated test suites using pytest, along with interactive API documentation powered by OpenAPI/Swagger and Postman collections.'
    ],
    tools: ['Python', 'FastAPI', 'python-binance', 'Binance Futures Testnet', 'pytest', 'Swagger / OpenAPI', 'Postman', 'REST APIs']
  },
  swiftmart: {
    title: 'SwiftMart',
    subtitle: 'Modern Responsive E-Commerce Platform',
    description: 'A scalable e-commerce frontend architecture engineered with React, Redux Toolkit, and Tailwind CSS. Built to deliver sub-second product browsing, reactive state management, and fluid shopping cart interactions.',
    liveLink: 'https://ecommerce-website-kr4b.vercel.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/Ecommerce_website.git',
    image: '/assets/jpeg/Project-3.jpg',
    paragraphs: [
      'SwiftMart is a modern e-commerce website developed using React.js, designed to provide users with a smooth and responsive shopping experience. The platform features essential functionalities such as dynamic product listings, a shopping cart, and user authentication. React\'s component-based architecture was leveraged to build reusable UI elements, while state management tools ensured seamless user interactions across the site.',
      'The responsive design, developed with Tailwind CSS, ensures that SwiftMart performs well on both desktop and mobile devices. This project showcases strong front-end development skills and a clear understanding of building scalable, real-world web applications.'
    ],
    tools: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vercel']
  }
};

export async function getStaticPaths() {
  const paths = Object.keys(projectData).map((slug) => ({
    params: { slug }
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = projectData[params.slug] || null;
  return {
    props: {
      project,
      slug: params.slug
    }
  };
}

export default function ProjectDetail({ project: initialProject, slug: initialSlug }) {
  const router = useRouter();
  const { slug: querySlug } = router.query;
  const slug = initialSlug || querySlug;
  const project = initialProject || (slug ? projectData[slug] : null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  if (router.isFallback) {
    return (
      <div className="container" style={{ padding: '14rem 0', textAlign: 'center' }}>
        <h2 className="section-title">Loading Case Study...</h2>
      </div>
    );
  }

  if (!project) {
    return (
      <>
        <Header onOpenResume={() => setIsResumeOpen(true)} />
        <div className="container" style={{ padding: '14rem 0', textAlign: 'center' }}>
          <span className="section-tag">Error 404</span>
          <h1 className="section-title">Project Not Found</h1>
          <p className="section-subtitle" style={{ marginBottom: '3.2rem' }}>
            The case study you are looking for doesn&apos;t exist or has moved.
          </p>
          <Link href="/#projects" className="btn btn-primary">
            Return to Projects
          </Link>
        </div>
        <Footer />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  // Get other project slugs for next/prev navigation
  const otherProjects = Object.entries(projectData)
    .filter(([key]) => key !== slug)
    .map(([key, val]) => ({ slug: key, ...val }));

  return (
    <>
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      <main className="case-study-page section-pad">
        <div className="ambient-glow"></div>

        <div className="container">
          {/* Breadcrumb / Back Navigation */}
          <div className="breadcrumb-nav">
            <Link href="/#projects" className="back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Hero Banner */}
          <div className="case-study-header">
            <div className="case-badge">
              <span className="pulse-dot"></span>
              <span>Case Study</span>
            </div>
            <h1 className="case-title">
              {project.title}: <span className="gradient-text">{project.subtitle}</span>
            </h1>
            <p className="case-lead">{project.description}</p>

            <div className="case-cta-row">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <span>View Live Application</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}

              <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
                <span>GitHub Source</span>
              </a>
            </div>
          </div>

          {/* Showcase Image Banner */}
          <div className="bento-card showcase-card">
            <div className="showcase-img-container">
              <Image
                src={project.image}
                alt={project.title}
                width={1100}
                height={620}
                className="showcase-img"
                priority
              />
            </div>
          </div>

          {/* Details Bento Grid */}
          <div className="case-content-grid">
            <div className="bento-card case-main-card">
              <h2 className="content-heading">Engineering &amp; System Architecture</h2>
              {project.paragraphs.map((para, index) => (
                <p key={index} className="content-para">
                  {para}
                </p>
              ))}
            </div>

            <div className="case-side-column">
              <div className="bento-card side-card">
                <h3 className="side-title">Technologies Used</h3>
                <div className="tools-pills">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bento-card side-card">
                <h3 className="side-title">Project Summary</h3>
                <div className="meta-list">
                  <div className="meta-item">
                    <span className="meta-k">Author:</span>
                    <span className="meta-v">Chirag Tank</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-k">Architecture:</span>
                    <span className="meta-v">Production Full-Stack</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-k">Testing &amp; CI/CD:</span>
                    <span className="meta-v" style={{ color: 'var(--accent-emerald)' }}>Docker &bull; Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Section */}
          <div className="more-projects">
            <h3 className="more-title">Explore Other Projects</h3>
            <div className="more-grid">
              {otherProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="bento-card more-card">
                  <div>
                    <span className="more-tag">Case Study</span>
                    <h4 className="more-name">{p.title}</h4>
                    <p className="more-desc">{p.subtitle}</p>
                  </div>
                  <span className="more-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <style jsx>{`
        .case-study-page {
          padding-top: 13rem;
          min-height: 100vh;
        }
        .breadcrumb-nav {
          margin-bottom: 2.4rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .back-link:hover {
          color: var(--accent-primary);
          transform: translateX(-4px);
        }
        .case-study-header {
          margin-bottom: 4rem;
          max-width: 900px;
        }
        .case-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.4rem 1.2rem;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.6rem;
        }
        .case-title {
          font-size: 4.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 1.8rem;
        }
        .case-lead {
          font-size: 1.8rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 3.2rem;
        }
        .case-cta-row {
          display: flex;
          gap: 1.4rem;
          flex-wrap: wrap;
        }
        .showcase-card {
          padding: 1.6rem;
          margin-bottom: 4rem;
        }
        .showcase-img-container {
          border-radius: 1.6rem;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }
        :global(.showcase-img) {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .case-content-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 3.2rem;
          margin-bottom: 6rem;
        }
        .case-main-card {
          padding: 3.6rem;
        }
        .content-heading {
          font-size: 2.6rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }
        .content-para {
          font-size: 1.65rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .case-side-column {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }
        .side-card {
          padding: 2.8rem;
        }
        .side-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.6rem;
        }
        .tools-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .meta-list {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }
        .meta-item {
          display: flex;
          justify-content: space-between;
          font-size: 1.4rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .meta-k {
          color: var(--text-muted);
        }
        .meta-v {
          color: var(--text-primary);
          font-weight: 600;
        }
        .more-projects {
          margin-top: 6rem;
          padding-top: 4rem;
          border-top: 1px solid var(--border-subtle);
        }
        .more-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2.4rem;
        }
        .more-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .more-card {
          padding: 2.4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
        }
        .more-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          color: var(--accent-primary);
          display: block;
          margin-bottom: 0.4rem;
        }
        .more-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }
        .more-desc {
          font-size: 1.3rem;
          color: var(--text-muted);
        }
        .more-arrow {
          font-size: 2.4rem;
          color: var(--accent-primary);
          transition: transform 0.2s ease;
        }
        .more-card:hover .more-arrow {
          transform: translateX(6px);
        }
        @media (max-width: 900px) {
          .case-title {
            font-size: 3.4rem;
          }
          .case-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
