import { motion } from 'framer-motion';

export default function Timeline() {
  const milestones = [
    {
      period: 'Sept 2026 — Present',
      title: 'Full Stack Developer',
      organization: 'Mintergraph • Jaipur, Rajasthan',
      type: 'Experience',
      description: 'Digitising government records in Hindi, Urdu and Kaithi: evaluated 8+ OCR engines and vision-language models (PaddleOCR, IndicOCR, GLM-OCR, Qwen3-VL, Gemma, Gemini), designed a two-stage IndicOCR region-detection + VLM parsing pipeline, ran open-weight VLMs locally on an NVIDIA DGX Spark (GB10) against paid APIs, and fine-tuned Kraken handwriting models using eScriptorium and Transkribus. Also building a MERN-stack HR Quarterly Review & Appraisal System with multi-role workflows and KRA-based scoring.',
      tags: ['OCR/HTR', 'Vision-Language Models', 'IndicOCR', 'Kraken', 'NVIDIA DGX Spark', 'MERN Stack', 'KRA Scoring']
    },
    {
      period: 'Oct 2025 — Jan 2026',
      title: 'Associate Full Stack Developer (Contract)',
      organization: 'Myna Solutions • Hyderabad, India (Remote)',
      type: 'Experience',
      description: 'Fixed-term contract to build an AI-powered online tutoring platform end-to-end with React and Node.js, including personalised learning paths and real-time progress tracking for students and tutors. Delivered live tutoring sessions over WebSockets, with AWS S3 for content storage and RESTful APIs behind a responsive React and Tailwind CSS interface.',
      tags: ['React.js', 'Node.js', 'WebSockets', 'AWS S3', 'Tailwind CSS', 'REST APIs']
    },
    {
      period: 'May 2025 — Aug 2025',
      title: '.NET Full Stack Developer Intern',
      organization: 'Pratham Software (PSI) • Jaipur, Rajasthan',
      type: 'Experience',
      description: 'Developed a social media platform using ASP.NET Core, C#, SQL Server, and Angular following N-tier enterprise architecture. Designed database schemas and data access layers with Entity Framework Core, improving query performance by ~30%. Integrated an AI-powered chat feature into the platform using the OpenRouter API.',
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience and education</h2>
          <p className="section-subtitle">
            Three engineering roles and an MCA, most recent first.
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

    </section>
  );
}
