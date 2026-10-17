import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero({ onOpenResume }) {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Chirag-Tank1971',
      icon: '/assets/png/github-ico.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/chirag-tank',
      icon: '/assets/png/linkedin-ico.png'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ChiragT38130967',
      icon: '/assets/png/twitter-ico.png'
    }
  ];

  return (
    <section className="hero-section section-pad">
      <div className="ambient-glow"></div>
      <div className="ambient-glow-secondary"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-pill">
            <span className="pulse-dot"></span>
            <span>Open to Remote Work &amp; Relocation</span>
          </div>

          <h1 className="hero-title">
            Hey, I&apos;m <span className="gradient-text">Chirag Tank</span>
          </h1>

          <p className="hero-role">
            Full Stack Developer &bull; MERN &amp; ASP.NET Core &bull; LLM Integration &bull; MCA (2026)
          </p>

          <p className="hero-description">
            Full-stack developer who has built and deployed MERN and ASP.NET Core applications, including an HR performance review system at Mintergraph and TaskFlow, an AI-assisted lead management platform. Experienced with REST API design, Docker, GitHub Actions CI/CD, and integrating LLM APIs (Gemini, OpenRouter) into production products.
          </p>

          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
            >
              <span>Contact Me</span>
            </motion.a>

            {onOpenResume && (
              <motion.button
                onClick={onOpenResume}
                className="btn btn-secondary"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>CV / Resume</span>
              </motion.button>
            )}
          </div>

          {/* Social Links Row */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="socials-list">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                  />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Highlights Bento Card */}
        <motion.div
          className="hero-stats-card bento-card"
          whileHover={{ y: -6 }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number gradient-text">3+</span>
              <span className="stat-label">Industry Roles</span>
              <span className="stat-sub">Mintergraph &bull; Myna &bull; PSI</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">~30%</span>
              <span className="stat-label">DB Speedup</span>
              <span className="stat-sub">Query &amp; EF Core Optimization</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">60-80%</span>
              <span className="stat-label">API Cost Cut</span>
              <span className="stat-sub">TTL Cache &amp; Fallbacks</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">MCA</span>
              <span className="stat-label">Candidate &apos;26</span>
              <span className="stat-sub">Sri Balaji College (Jaipur)</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 14rem;
          padding-bottom: 8rem;
          min-height: 85vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 4.8rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-title {
          font-size: 5.2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.15;
          margin: 2.2rem 0 1.2rem;
          color: var(--text-primary);
        }
        .hero-role {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.6rem;
          line-height: 1.4;
        }
        .hero-description {
          font-size: 1.55rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 620px;
          margin-bottom: 3.2rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.4rem;
          margin-bottom: 3.6rem;
        }
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          flex-wrap: wrap;
        }
        .socials-label {
          font-size: 1.3rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
        }
        .socials-list {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .social-pill:hover {
          color: var(--accent-primary);
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }
        .hero-stats-card {
          padding: 3.6rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.4rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-number {
          font-size: 3.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .stat-label {
          font-size: 1.4rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .stat-sub {
          font-size: 1.2rem;
          color: var(--text-muted);
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3.6rem;
          }
          .hero-title {
            font-size: 4.2rem;
          }
          .hero-role {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 580px) {
          .hero-section {
            padding-top: 11rem;
          }
          .hero-title {
            font-size: 3.4rem;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
