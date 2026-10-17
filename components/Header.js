import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Header({ onOpenResume }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('portfolio-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      );
    }
    return 'dark';
  });
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const scrollToElement = (targetId) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (router.pathname !== '/') {
      router.push(`/#${targetId}`).then(() => {
        setTimeout(() => scrollToElement(targetId), 200);
      });
    } else {
      scrollToElement(targetId);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="header-progress-bar"
        style={{ scaleX }}
      />

      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-badge">CT</span>
          <span className="logo-name">
            Chirag Tank<span className="logo-dot">.</span>
          </span>
        </Link>

        <nav className="nav-desktop">
          <ul className="nav-links">
            {['about', 'skills', 'journey', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleNavClick(e, item)}
                  style={{ textTransform: 'capitalize' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              // Sun Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              // Moon Icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="btn btn-secondary btn-sm resume-btn"
            >
              <span>Resume</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ul className="mobile-links">
              {['about', 'skills', 'journey', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleNavClick(e, item)}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {onOpenResume && (
                <li>
                  <button
                    onClick={() => { setIsMenuOpen(false); onOpenResume(); }}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    View Resume
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        :global(.header-progress-bar) {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-gradient);
          transform-origin: 0%;
          z-index: 1000;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.6);
        }
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 2rem 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .header-scrolled {
          padding: 1.2rem 0;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .logo-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 1rem;
          background: var(--accent-gradient);
          color: #ffffff;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }
        .logo-name {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .logo-dot {
          color: var(--accent-primary);
        }
        .nav-desktop {
          display: block;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 3.2rem;
          list-style: none;
        }
        .nav-links a {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .nav-links a:hover {
          color: var(--accent-primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .theme-toggle {
          width: 40px;
          height: 40px;
          border-radius: 1.2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .theme-toggle:hover {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
          color: var(--accent-primary);
        }
        .resume-btn {
          display: inline-flex;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 1rem;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .mobile-menu {
          display: none;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border-bottom: 1px solid var(--border-subtle);
          padding: 2rem;
          animation: slideDown 0.2s ease;
        }
        .mobile-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        .mobile-links a {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-primary);
          display: block;
          padding: 0.8rem 0;
        }
        @media (max-width: 860px) {
          .nav-desktop {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
          .resume-btn {
            display: none;
          }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
