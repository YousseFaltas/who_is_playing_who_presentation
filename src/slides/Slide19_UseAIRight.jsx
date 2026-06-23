import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Slide19_UseAIRight({ direction }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ left: '-10%', top: '-15%', width: '36%', paddingBottom: '36%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <motion.div className="bg-circle bg-circle--animate-slow" style={{ right: '-6%', bottom: '-10%', width: '24%', paddingBottom: '24%', background: 'var(--amber)', opacity: 0.12 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.12 }} transition={{ duration: 1.2, delay: 0.2 }} />

      <motion.p className="s3-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        PART 5 · THE PART THAT MATTERS MOST
      </motion.p>

      <motion.h1 className="s3-question" style={{ fontSize: '5.926vh' }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        How to Actually Use AI
      </motion.h1>

      <motion.p className="s3-footer-text" style={{ maxWidth: '82%', marginBottom: '2.963vh' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
        Refusing to learn AI won't protect you — it'll just leave you behind people who do learn to use it well. The goal is one simple rule:
      </motion.p>

      <Card fill="var(--navy2)" style={{ margin: '0 32px', padding: '16px 22px' }} delay={0.65}>
        <p style={{ fontSize: '3.333vh', fontWeight: 800, color: 'var(--cyan)', textAlign: 'center', lineHeight: 1.4 }}>
          AI should be the executor, never the decision-maker.
          <br />
          <span style={{ fontSize: '2.593vh', color: 'var(--on-dark-body)', fontWeight: 600 }}>
            You decide. AI does the boring, repetitive part. You verify everything it gives you.
          </span>
        </p>
      </Card>

      <Footer num={19} total={21} dark />
    </SlideWrapper>
  );
}
