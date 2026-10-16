import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="brand-badge">CT</span>
              <span className="brand-name">Chirag Tank</span>
            </div>
            <p className="brand-desc">
              Full-Stack Web Developer crafting modern, resilient digital products. Based in Jaipur, India.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-socials">
            <span className="footer-heading">Social</span>
            <div className="footer-icons">
              <a href="https://github.com/Chirag-Tank1971" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="GitHub">
                <Image src="/assets/png/github-ico.png" alt="GitHub" width={18} height={18} />
              </a>
              <a href="https://linkedin.com/in/chirag-tank" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="LinkedIn">
                <Image src="/assets/png/linkedin-ico.png" alt="LinkedIn" width={18} height={18} />
              </a>
              <a href="https://x.com/ChiragT38130967" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="Twitter">
                <Image src="/assets/png/twitter-ico.png" alt="Twitter" width={18} height={18} />
              </a>
              <a href="https://dev.to/chirag_tank" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="Dev.to">
                <Image src="/assets/png/icons8-book-50.png" alt="Dev.to" width={18} height={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Designed &amp; Engineered by{' '}
            <a href="https://github.com/Chirag-Tank1971" target="_blank" rel="noreferrer" className="author-link">
              Chirag Tank
            </a>
          </p>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-canvas-subtle);
          padding: 6rem 0 3.2rem;
          margin-top: 6rem;
          position: relative;
        }
        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 4.8rem;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          max-width: 380px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .brand-badge {
          width: 32px;
          height: 32px;
          border-radius: 0.8rem;
          background: var(--accent-gradient);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.25rem;
        }
        .brand-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .brand-desc {
          font-size: 1.45rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .footer-heading {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 1.6rem;
          display: block;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links a {
          font-size: 1.45rem;
          color: var(--text-secondary);
        }
        .footer-links a:hover {
          color: var(--accent-primary);
        }
        .footer-icons {
          display: flex;
          gap: 1rem;
        }
        .footer-icon-link {
          width: 38px;
          height: 38px;
          border-radius: 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-icon-link:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2.8rem;
          border-top: 1px solid var(--border-subtle);
          font-size: 1.4rem;
          color: var(--text-muted);
        }
        .author-link {
          color: var(--text-primary);
          font-weight: 600;
        }
        .author-link:hover {
          color: var(--accent-primary);
        }
        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .back-to-top:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: var(--bg-card);
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.6rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
