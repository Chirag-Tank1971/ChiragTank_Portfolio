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
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C#', 'HTML5', 'CSS3']
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
      skills: ['React.js', 'Angular', 'Tailwind CSS', 'Redux', 'Responsive UI']
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
      skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'FastAPI', 'REST APIs', 'WebSockets']
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
      skills: ['MongoDB', 'SQL Server', 'PostgreSQL', 'Entity Framework Core']
    },
    {
      title: 'AI & LLM Integration',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      ),
      skills: ['Google Gemini API', 'OpenRouter', 'RAG Architecture', 'Vector DB (Chroma Cloud)', 'Prompt Engineering']
    },
    {
      title: 'Cloud, DevOps & Testing',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: ['Docker', 'GitHub Actions (CI/CD)', 'AWS S3', 'Vercel', 'Render', 'Jest', 'pytest', 'Postman', 'Swagger']
    }
  ];

  return (
    <section id="about" className="section-pad">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About &amp; Skills</span>
          <h2 className="section-title">
            Engineering High-Performance <span className="gradient-text">Full-Stack Solutions</span>
          </h2>
          <p className="section-subtitle">
            Experienced with MERN and ASP.NET Core applications, REST API architecture, CI/CD pipelines, and integrating production LLM workflows.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Main Bio Card */}
          <div className="bento-card bio-card">
            <div className="card-badge">Summary &bull; MCA (2026)</div>
            <h3 className="card-title">Chirag Tank — Full Stack Developer</h3>
            <p className="bio-para">
              I am a <strong>Full-Stack Developer</strong> based in <strong>Rajasthan, India</strong>, experienced in building and deploying production-scale <strong>MERN</strong> and <strong>ASP.NET Core</strong> systems, including multi-role HR performance platforms and AI-assisted lead management systems.
            </p>
            <p className="bio-para">
              Proven track record in engineering high-efficiency applications: improved database query performance by <strong>~30%</strong> with Entity Framework Core and slashed redundant API calls by <strong>60–80%</strong> through TTL caching. Experienced with Docker, GitHub Actions CI/CD, and integrating modern LLMs (Google Gemini, OpenRouter) and RAG vector search into real-world workflows.
            </p>
            <div className="bio-cta">
              <a href="#contact" className="btn btn-primary btn-sm">
                Get In Touch
              </a>
              <span className="location-pill">📍 Rajasthan, India &bull; Open to Remote &amp; Relocation</span>
            </div>
          </div>

          {/* Quick Metrics & Core Impact */}
          <div className="bento-card philosophy-card">
            <div className="card-badge">Engineering Highlights</div>
            <h3 className="card-title">Key Impacts</h3>
            <ul className="principles-list">
              <li>
                <span className="principle-dot"></span>
                <div>
                  <strong>60–80% API Cost Cut:</strong> Implemented smart TTL caching and fallback systems for LLM API integrations.
                </div>
              </li>
              <li>
                <span className="principle-dot"></span>
                <div>
                  <strong>~30% Query Speedup:</strong> Schema redesign and EF Core optimization across SQL Server and MongoDB.
                </div>
              </li>
              <li>
                <span className="principle-dot"></span>
                <div>
                  <strong>CI/CD &amp; Testing:</strong> Automated GitHub Actions pipelines, Docker containerization, Jest and pytest testing.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Categorized Skills Section */}
        <div id="skills" className="skills-container">
          <div className="section-header" style={{ marginBottom: '3.6rem', marginTop: '6rem' }}>
            <span className="section-tag">Technical Competencies</span>
            <h3 className="section-title" style={{ fontSize: '3rem' }}>
              Technical <span className="gradient-text">Skillset</span>
            </h3>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="bento-card skill-category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h4 className="category-title">{category.title}</h4>
                </div>
                <div className="category-pills">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2.4rem;
          margin-bottom: 3.2rem;
        }
        .card-badge {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }
        .card-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.6rem;
          letter-spacing: -0.02em;
        }
        .bio-para {
          font-size: 1.55rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.6rem;
        }
        .bio-para strong {
          color: var(--text-primary);
        }
        .bio-cta {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2.8rem;
          flex-wrap: wrap;
        }
        .location-pill {
          font-size: 1.3rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .principles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
          margin-top: 1.6rem;
        }
        .principles-list li {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          font-size: 1.45rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .principles-list strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.2rem;
        }
        .principle-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-primary);
          margin-top: 0.6rem;
          flex-shrink: 0;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.4rem;
        }
        .skill-category-card {
          padding: 2.8rem;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 1.4rem;
          margin-bottom: 2rem;
        }
        .category-icon {
          width: 44px;
          height: 44px;
          border-radius: 1.2rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .category-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 860px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
