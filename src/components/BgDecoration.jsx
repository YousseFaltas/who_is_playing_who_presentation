import { motion } from 'framer-motion';

/**
 * Decorative background circles, matching bgDecoration() from the pptx script.
 * @param {boolean} dark — whether the slide has a dark background
 * @param {Array} extra — additional circle definitions [{x,y,w,color,opacity,delay}]
 */
export default function BgDecoration({ dark = false, extra = [] }) {
  const base = [
    {
      x: '-6%', y: '72%', w: '24%',
      color: dark ? 'var(--cyan)' : 'var(--cyan)',
      opacity: dark ? 0.12 : 0.08,
      delay: 0,
    },
    {
      x: '-2%', y: '84%', w: '12%',
      color: 'var(--amber)',
      opacity: dark ? 0.18 : 0.10,
      delay: 2,
    },
  ];

  const circles = [...base, ...extra];

  return (
    <>
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className={`bg-circle ${i % 2 === 0 ? 'bg-circle--animate' : 'bg-circle--animate-slow'}`}
          style={{
            left: c.x,
            top: c.y,
            width: c.w,
            paddingBottom: c.w, // keeps it a circle
            background: c.color,
            opacity: c.opacity,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: c.opacity }}
          transition={{ duration: 1.2, delay: c.delay * 0.15, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}
