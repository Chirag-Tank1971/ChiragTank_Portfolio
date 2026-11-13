import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import HeroStage from './HeroStage';

export default function Hero({ onOpenResume }) {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Chirag-Tank1971',
      id: 'github',
      icon: <GithubIcon size={16} />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/chirag-tank',
      id: 'linkedin',
      icon: <LinkedinIcon size={16} />
    },
    {
      name: 'Twitter',
      url: 'https://x.com/ChiragT38130967',
      id: 'twitter',
      icon: <TwitterIcon size={16} />
    }
  ];

  const facts = [
    { value: '3', label: 'roles in the last two years', note: 'Mintergraph, Myna Solutions, Pratham Software' },
    { value: '3', label: 'scripts digitised', note: 'Hindi, Urdu and Kaithi government records' },
    { value: '2026', label: 'MCA', note: 'Sri Balaji College of Engineering and Technology, Jaipur' }
  ];

  return (
    <section className="hero-section section-pad">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Chirag Tank</h1>
          <p className="hero-script" lang="hi" aria-label="Chirag Tank in Devanagari">
            चिराग टंक
          </p>

          <p className="hero-role">
            Full stack developer. I build web platforms and work on turning scanned
            records into searchable text.
          </p>

          <p className="hero-description">
            Full-stack developer (MERN, ASP.NET Core, Python) with hands-on experience evaluating, fine-tuning and deploying OCR and vision-language models on NVIDIA GPU hardware for multilingual document digitisation in Hindi, Urdu and Kaithi. Experienced in building web platforms across HR tech, ed-tech and social media, and in integrating LLM APIs for task classification and routing.
          </p>

          <div className="hero-actions">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileTap={{ scale: 0.98 }}
            >
              <span>View projects</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact me</span>
            </motion.a>

            {onOpenResume && (
              <motion.button
                onClick={onOpenResume}
                className="btn btn-secondary"
                whileTap={{ scale: 0.98 }}
              >
                <span>Resume</span>
              </motion.button>
            )}
          </div>

          <div className="hero-socials">
            <div className="socials-list">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`social-pill ${social.id}`}
                  aria-label={social.name}
                >
                  <span className="social-pill-icon">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <HeroStage />
      </div>

      <div className="container">
        <dl className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt className="fact-value">{f.value}</dt>
                <dd className="fact-label">{f.label}</dd>
                <dd className="fact-note">{f.note}</dd>
              </div>
            ))}
        </dl>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 15rem;
          padding-bottom: 8rem;
        }
        .hero-container {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 4rem;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: 8.4rem;
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 0.98;
          color: var(--text-primary);
        }
        .hero-script {
          font-family: var(--font-script);
          font-size: 3.6rem;
          font-weight: 500;
          line-height: 1.5;
          color: var(--accent-primary);
          margin: 0.6rem 0 3.2rem;
        }
        .hero-role {
          font-family: var(--font-display);
          font-size: 2.6rem;
          line-height: 1.3;
          color: var(--text-primary);
          max-width: 30ch;
          margin-bottom: 2rem;
        }
        .hero-description {
          font-size: 1.6rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 64ch;
          margin-bottom: 3.2rem;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          margin-bottom: 3rem;
        }
        .socials-list {
          display: flex;
          gap: 2.4rem;
          flex-wrap: wrap;
        }
        .facts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.4rem;
          width: 100%;
          margin-top: 6.4rem;
          padding-top: 2.8rem;
          border-top: 1px solid var(--border-subtle);
        }
        .fact {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .fact-value {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 500;
          line-height: 1.1;
          color: var(--text-primary);
        }
        .fact-label {
          font-size: 1.4rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .fact-note {
          font-size: 1.3rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 7.2rem;
          }
          .facts {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .hero-section {
            padding-top: 11rem;
          }
          .hero-title {
            font-size: 5.2rem;
          }
          .hero-script {
            font-size: 2.8rem;
          }
          .hero-role {
            font-size: 2.1rem;
          }
          .facts {
            gap: 2rem 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
