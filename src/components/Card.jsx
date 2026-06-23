import { motion } from 'framer-motion';

/**
 * Reusable rounded card. Maps to card() in the pptx script.
 */
export default function Card({
  children,
  fill,
  shadow = true,
  className = '',
  style = {},
  delay = 0,
}) {
  return (
    <motion.div
      className={`card ${shadow ? '' : 'card--no-shadow'} ${className}`}
      style={{ background: fill || 'var(--card-bg)', ...style }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
