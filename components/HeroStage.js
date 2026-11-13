import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

// One floating object: drifts on its own and shifts with the pointer.
// `depth` is how far (px) it moves across the full pointer range.
function Floater({ sx, sy, depth, drift = 10, duration = 7, delay = 0, rotate = 0, className, children }) {
  const x = useTransform(sx, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(sy, [-0.5, 0.5], [-depth, depth]);
  const reduce = useReducedMotion();

  return (
    <motion.div className={className} style={{ x, y, rotate, position: 'absolute' }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -drift, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroStage() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="stage" onMouseMove={onMove} onMouseLeave={onLeave} aria-hidden="true">
      {/* Current role, written like a line on a resume with the key phrases marked */}
      <Floater sx={sx} sy={sy} depth={14} drift={9} duration={7.5} rotate={-3} className="pos-role">
        <div className="sheet">
          <p className="sheet-title">Mintergraph</p>
          <p className="sheet-role">Full Stack Developer, Sept 2026 to present</p>
          <ul className="sheet-list">
            <li>
              Evaluated <mark>8+ OCR and vision-language models</mark> for Hindi, Urdu and Kaithi government records
            </li>
            <li>
              Ran open-weight models on an <mark>NVIDIA DGX Spark</mark> and compared them with paid APIs
            </li>
            <li>
              Fine-tuned <mark>Kraken</mark> handwriting models
            </li>
          </ul>
        </div>
      </Floater>

      {/* Measured results */}
      <Floater sx={sx} sy={sy} depth={26} drift={12} duration={8.5} delay={1.2} rotate={2} className="pos-results">
        <div className="panel results">
          <div className="result">
            <span className="result-value">60–80%</span>
            <span className="result-text">fewer redundant Gemini API calls<br />TaskFlow, TTL caching</span>
          </div>
          <div className="result">
            <span className="result-value">~30%</span>
            <span className="result-text">faster database queries<br />Entity Framework Core</span>
          </div>
        </div>
      </Floater>

      {/* Stack */}
      <Floater sx={sx} sy={sy} depth={20} drift={8} duration={6.5} delay={0.6} rotate={-1.5} className="pos-stack">
        <div className="panel stack">
          <dl>
            <div><dt>Frontend</dt><dd>React.js, Angular</dd></div>
            <div><dt>Backend</dt><dd>Node.js, ASP.NET Core, FastAPI</dd></div>
            <div><dt>Data</dt><dd>MongoDB, SQL Server</dd></div>
            <div><dt>Ship</dt><dd>Docker, GitHub Actions</dd></div>
          </dl>
        </div>
      </Floater>

      {/* Availability */}
      <Floater sx={sx} sy={sy} depth={34} drift={14} duration={9} delay={2} rotate={1.5} className="pos-open">
        <div className="panel open">
          <p className="open-label">MCA, 2026</p>
          <p className="open-text">Open to remote work and relocation</p>
        </div>
      </Floater>

      <style jsx>{`
        .stage {
          position: relative;
          width: 100%;
          height: 540px;
        }
        :global(.pos-role) { top: 0; left: 0; }
        :global(.pos-results) { top: 64px; right: 0; }
        :global(.pos-stack) { top: 392px; left: 12px; }
        :global(.pos-open) { top: 366px; right: 0; }

        /* The resume line is paper in both themes */
        .sheet {
          width: 322px;
          padding: 2.2rem 2.4rem 2.4rem;
          background: #efe8d6;
          color: #2a2418;
          border: 1px solid #d8cfb8;
          border-radius: 4px;
          box-shadow: 0 24px 44px -22px rgba(8, 12, 20, 0.55);
        }
        .sheet-title {
          font-family: var(--font-display);
          font-size: 2.6rem;
          font-weight: 500;
          line-height: 1.1;
        }
        .sheet-role {
          font-size: 1.25rem;
          color: #6f6650;
          margin: 0.4rem 0 1.4rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid #cfc5ab;
        }
        .sheet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sheet-list li {
          position: relative;
          padding-left: 1.4rem;
          font-size: 1.35rem;
          line-height: 1.55;
          color: #3b3324;
        }
        .sheet-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.75em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8a7f66;
        }
        .sheet-list mark {
          background: rgba(47, 111, 102, 0.24);
          color: #17233b;
          font-weight: 600;
          padding: 0.05em 0.25em;
          margin: 0 -0.05em;
          border-radius: 2px;
        }

        .panel {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          box-shadow: 0 20px 40px -24px rgba(8, 12, 20, 0.5);
        }

        .results {
          width: 250px;
          padding: 1.4rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .result {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 1.2rem 0;
        }
        .result + .result {
          border-top: 1px solid var(--border-subtle);
        }
        .result-value {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 500;
          line-height: 1.1;
          color: var(--accent-primary);
        }
        .result-text {
          font-size: 1.3rem;
          line-height: 1.45;
          color: var(--text-secondary);
        }

        .stack {
          width: 310px;
          padding: 1.6rem 2rem;
        }
        .stack dl > div {
          display: grid;
          grid-template-columns: 8rem 1fr;
          gap: 1rem;
          padding: 0.7rem 0;
        }
        .stack dl > div + div {
          border-top: 1px solid var(--border-subtle);
        }
        .stack dt {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .stack dd {
          font-size: 1.3rem;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .open {
          width: 236px;
          padding: 1.6rem 1.8rem;
        }
        .open-label {
          font-size: 1.2rem;
          color: var(--text-muted);
          margin-bottom: 0.3rem;
        }
        .open-text {
          font-family: var(--font-display);
          font-size: 1.8rem;
          line-height: 1.3;
          color: var(--text-primary);
        }

        @media (max-width: 1100px) {
          .stage {
            transform: scale(0.86);
            transform-origin: top left;
          }
        }
        @media (max-width: 992px) {
          .stage {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
