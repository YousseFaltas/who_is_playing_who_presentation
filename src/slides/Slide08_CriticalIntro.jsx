import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import Footer from '../components/Footer';

export default function Slide08_CriticalIntro({ direction }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ left: '-10%', top: '-15%', width: '38%', paddingBottom: '38%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <motion.div className="bg-circle bg-circle--animate-slow" style={{ right: '-8%', bottom: '-10%', width: '28%', paddingBottom: '28%', background: 'var(--amber)', opacity: 0.12 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.12 }} transition={{ duration: 1.2, delay: 0.2 }} />

      <motion.p className="s3-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        PART 2 · YOUR GREATEST WEAPON
      </motion.p>

      <motion.h1 className="s3-question" style={{ fontSize: '6.296vh' }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Critical Thinking
      </motion.h1>

      <motion.p className="s3-footer-text" style={{ maxWidth: '80%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
        If AI doesn't really think — what does it mean that humans do? The single greatest advantage you have over any AI model is the ability to question, doubt, and evaluate instead of just accepting what you're told.
      </motion.p>

      <Footer num={8} total={21} dark />
    </SlideWrapper>
  );
}
