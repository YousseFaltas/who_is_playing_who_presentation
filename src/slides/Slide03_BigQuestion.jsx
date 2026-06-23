import { motion } from 'framer-motion';
import SlideWrapper from '../components/SlideWrapper';
import Footer from '../components/Footer';

export default function Slide03_BigQuestion({ direction, num, total }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ left: '-13%', top: '-24%', width: '42%', paddingBottom: '42%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <motion.div className="bg-circle bg-circle--animate-slow" style={{ right: '-10%', bottom: '-14%', width: '32%', paddingBottom: '32%', background: 'var(--amber)', opacity: 0.12 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.12 }} transition={{ duration: 1.2, delay: 0.2 }} />
      <motion.p className="s3-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        THE QUESTION THAT MATTERS TODAY
      </motion.p>
      <motion.h1 className="s3-question" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        Are you using AI?
        <br />
        Or is AI using you?
      </motion.h1>
      <motion.p className="s3-footer-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
        That's the question I want you to ask yourself every single day, after you walk out of here.
      </motion.p>
      <Footer num={num} total={total} dark />
    </SlideWrapper>
  );
}
