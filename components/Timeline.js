import { motion } from 'framer-motion';

export default function Timeline() {
  const milestones = [
    {
      period: 'Sept 2026 — Present',
      title: 'Full Stack Developer',
      organization: 'Mintergraph • Jaipur, Rajasthan',
      type: 'Experience',
      description: 'Building a production full-stack HR Quarterly Review & Appraisal System on the MERN stack with multi-role workflows for admins, managers, and employees. Implementing KRA (Key Result Area)-based scoring to standardize and automate quarterly performance evaluations across cross-functional teams.',
      tags: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'RBAC', 'HR Platform']
    },
    {
      period: 'Oct 2025 — Jan 2026',
      title: 'Associate Full Stack Developer (Contract)',
      organization: 'Myna Solutions • Hyderabad, India (Remote)',
      type: 'Experience',
      description: 'Fixed-term contract to build an online tutoring platform end-to-end with personalized learning paths and real-time progress tracking for students and tutors. Engineered responsive React and Tailwind CSS interfaces integrated with REST APIs, AWS S3 storage, and WebSocket-based live sessions for real-time tutoring.',
      tags: ['React.js', 'Node.js', 'WebSockets', 'AWS S3', 'Tailwind CSS', 'REST APIs']
    },
    {
      period: 'May 2025 — Aug 2025',
      title: '.NET Full Stack Developer Intern',
      organization: 'Pratham Software (PSI) • Jaipur, Rajasthan',
      type: 'Experience',
      description: 'Developed a social media platform using ASP.NET Core, C#, SQL Server, and Angular following N-tier enterprise architecture. Designed database schemas and data access layers with Entity Framework Core, improving query performance by ~30%. Integrated the OpenRouter API to build an AI chat feature alongside real-time messaging.',
      tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Angular', 'Entity Framework Core', 'OpenRouter AI']
    },
    {
      period: '2024 — 2026',
      title: 'Master of Computer Applications (MCA)',
      organization: 'Sri Balaji College of Engineering and Technology, Jaipur',
      type: 'Education',
      description: 'Advanced coursework in Cloud Architecture, Database Systems, Advanced Software Engineering, Distributed Systems, and AI & Machine Learning applications.',
      tags: ['MCA', 'Cloud Architecture', 'Distributed Systems', 'Advanced Database Design']
    },
    {
      period: '2021 — 2024',
      title: 'Bachelor of Computer Applications (BCA)',
      organization: 'Sri Balaji College of Engineering and Technology, Jaipur',
      type: 'Education',
      description: 'Foundations in Data Structures, Object-Oriented Programming (C++, Java, C#), Web Development, Operating Systems, Computer Networks, and Software Testing.',
      tags: ['BCA', 'Data Structures', 'OOP', 'C++', 'C#', 'DBMS']
    }
  ];

  return (
    <section id="journey" className="section-pad">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Experience &amp; Education</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey Map</span>
          </h2>
          <p className="section-subtitle">
            My industry engineering roles, professional full-stack contracts, and formal Computer Science education.
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot-wrapper">
                  <div className={`timeline-dot ${item.type === 'Education' ? 'dot-edu' : ''}`}></div>
                </div>

                <div className="timeline-content bento-card">
                  <div className="timeline-meta-row">
                    <span className="timeline-period-badge">{item.period}</span>
                    <span className="timeline-type-pill">{item.type}</span>
                  </div>

                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-org">{item.organization}</div>
                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-wrapper {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 24px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-primary) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 100%);
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3.6rem;
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 2.8rem;
          position: relative;
        }
        .timeline-dot-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-canvas);
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 16px var(--accent-primary);
          transition: all 0.3s ease;
        }
        .dot-edu {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 16px var(--accent-cyan);
        }
        .timeline-item:hover .timeline-dot {
          background: var(--accent-primary);
          transform: scale(1.3);
        }
        .timeline-item:hover .dot-edu {
          background: var(--accent-cyan);
        }
        .timeline-content {
          flex: 1;
          padding: 3rem;
        }
        .timeline-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .timeline-period-badge {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--accent-primary);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          padding: 0.4rem 1.2rem;
          border-radius: 9999px;
        }
        .timeline-type-pill {
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
        }
        .timeline-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.6rem;
          letter-spacing: -0.02em;
        }
        .timeline-org {
          font-size: 1.5rem;
          color: var(--accent-secondary);
          font-weight: 600;
          margin-bottom: 1.4rem;
        }
        .timeline-desc {
          font-size: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .timeline-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        @media (max-width: 640px) {
          .timeline-line {
            left: 16px;
          }
          .timeline-dot-wrapper {
            width: 32px;
            height: 32px;
          }
          .timeline-item {
            gap: 1.6rem;
          }
          .timeline-title {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </section>
  );
}
