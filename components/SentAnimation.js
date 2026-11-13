import { motion, useReducedMotion } from 'framer-motion';

// Every piece uses the same "M L L L Z" structure so framer-motion can morph
// the path between the envelope shape and the paper-plane shape.
const q = (a, b, c, d) => `M ${a} L ${b} L ${c} L ${d} Z`;

const pieces = [
  {
    // back of envelope -> upper wing
    key: 'back',
    fill: '#2f6f66',
    env: q('20 44', '180 44', '180 124', '20 124'),
    plane: q('192 64', '28 22', '82 70', '82 70')
  },
  {
    // left triangle -> lower wing
    key: 'left',
    fill: '#4a8f84',
    env: q('20 44', '100 88', '20 124', '20 124'),
    plane: q('192 64', '82 70', '56 104', '56 104')
  },
  {
    // right triangle -> keel
    key: 'right',
    fill: '#1f5149',
    env: q('180 44', '100 88', '180 124', '180 124'),
    plane: q('192 64', '82 70', '112 90', '112 90')
  },
  {
    // bottom triangle -> tail fold
    key: 'bottom',
    fill: '#8fc2b8',
    env: q('20 124', '100 88', '180 124', '180 124'),
    plane: q('82 70', '56 104', '70 112', '112 90')
  }
];

const FLAP_OPEN = q('20 44', '180 44', '100 -6', '100 -6');
const FLAP_CLOSED = q('20 44', '180 44', '100 92', '100 92');
const FLAP_GONE = q('112 90', '112 90', '112 90', '112 90');

// timeline (seconds)
const T_POP = 0;
const T_FLAP = 0.45;
const T_FOLD = 1.35;
const T_FLY = 2.35;

export const SENT_ANIMATION_DURATION = 3.4;

export default function SentAnimation() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="sent-anim sent-anim-static" aria-hidden="true">
        <svg viewBox="0 0 200 140" width="100%" height="100%">
          {pieces.map((p) => (
            <path key={p.key} d={p.plane} fill={p.fill} />
          ))}
        </svg>
        <style jsx>{`
          .sent-anim {
            width: 160px;
            height: 112px;
            margin: 0 auto 1.6rem;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="sent-anim" aria-hidden="true">
      {/* flight trail */}
      <motion.svg
        className="trail"
        viewBox="0 0 400 200"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.9, 0] }}
        transition={{ delay: T_FLY, duration: 1.1, times: [0, 0.3, 1] }}
      >
        <motion.path
          d="M 0 190 C 80 190, 120 120, 200 110 S 330 40, 400 0"
          fill="none"
          stroke="#4a8f84"
          strokeWidth="2"
          strokeDasharray="5 7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: T_FLY, duration: 1.0, ease: 'easeOut' }}
        />
      </motion.svg>

      {/* whole envelope / plane */}
      <motion.div
        className="fly-group"
        initial={{ opacity: 0, scale: 0.5, y: 14, x: 0, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [0.5, 1, 1, 1.05, 0.35],
          y: [14, 0, 0, 0, -150],
          x: [0, 0, 0, 0, 230],
          rotate: [0, 0, 0, -6, -22]
        }}
        transition={{
          duration: SENT_ANIMATION_DURATION,
          times: [
            T_POP / SENT_ANIMATION_DURATION,
            0.4 / SENT_ANIMATION_DURATION,
            T_FOLD / SENT_ANIMATION_DURATION,
            T_FLY / SENT_ANIMATION_DURATION,
            1
          ],
          ease: 'easeInOut'
        }}
      >
        <svg viewBox="0 0 200 140" width="100%" height="100%" style={{ overflow: 'visible' }}>
          {pieces.map((p) => (
            <motion.path
              key={p.key}
              fill={p.fill}
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1"
              strokeLinejoin="round"
              initial={{ d: p.env }}
              animate={{ d: [p.env, p.env, p.plane] }}
              transition={{
                duration: 0.95,
                delay: T_FOLD - 0.05,
                times: [0, 0.01, 1],
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* envelope flap: opens, closes, then folds away into the plane */}
          <motion.path
            fill="#cfe4de"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="1"
            strokeLinejoin="round"
            initial={{ d: FLAP_OPEN }}
            animate={{ d: [FLAP_OPEN, FLAP_CLOSED, FLAP_CLOSED, FLAP_GONE] }}
            transition={{
              duration: T_FOLD + 0.9 - T_FLAP,
              delay: T_FLAP,
              times: [0, 0.4 / (T_FOLD + 0.9 - T_FLAP), (T_FOLD - T_FLAP) / (T_FOLD + 0.9 - T_FLAP), 1],
              ease: 'easeInOut'
            }}
          />
        </svg>
      </motion.div>

      <style jsx>{`
        .sent-anim {
          position: relative;
          width: 160px;
          height: 112px;
          margin: 0 auto 1.6rem;
        }
        .fly-group {
          position: absolute;
          inset: 0;
          transform-origin: 50% 50%;
          filter: drop-shadow(0 8px 14px rgba(23, 35, 59, 0.28));
        }
        .trail {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 400px;
          height: 200px;
          margin-left: -80px;
          pointer-events: none;
          overflow: visible;
        }
      `}</style>
    </div>
  );
}
