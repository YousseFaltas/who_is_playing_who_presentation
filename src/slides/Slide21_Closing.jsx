import { motion } from 'framer-motion';
import { FaCommentAlt } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import Card from '../components/Card';
import Footer from '../components/Footer';

const questions = [
  '"What\'s one AI tool you use that you\'ll now use differently after today?"',
  '"Do you think AI companies should be allowed to put ads inside chatbot answers? Why or why not?"',
  '"If you could design one rule that every AI company had to follow, what would it be?"',
];

export default function Slide21_Closing({ direction, num, total }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ left: '-8%', top: '-12%', width: '30%', paddingBottom: '30%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <motion.div className="bg-circle bg-circle--animate-slow" style={{ right: '-6%', bottom: '-8%', width: '22%', paddingBottom: '22%', background: 'var(--amber)', opacity: 0.12 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.12 }} transition={{ duration: 1.2, delay: 0.2 }} />

      <motion.p className="s3-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        THE CLOSING REVEAL
      </motion.p>

      <motion.h1 className="s3-question" style={{ fontSize: '5.185vh', marginBottom: '0.741vh' }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        AI Executes, You Decide.
      </motion.h1>

      <motion.p className="s3-footer-text" style={{ maxWidth: '85%', fontSize: '2.407vh', marginBottom: '2.593vh' }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
      </motion.p>

      <Card fill="var(--navy2)" style={{ margin: '0 32px', padding: '14px 18px', marginBottom: '1.852vh' }} delay={0.6}>
        <p style={{ fontSize: '2.963vh', fontWeight: 800, color: 'var(--cyan)', textAlign: 'center', lineHeight: 1.4 }}>
          So — who's playing who?
          <br />
          <span style={{ fontSize: '2.222vh', color: 'var(--on-dark-body)', fontWeight: 600 }}>
            After today, that should be a question you can always answer for yourself.
          </span>
        </p>
      </Card>

      <div style={{ margin: '0 32px', position: 'relative', zIndex: 2 }}>
        <motion.p style={{ fontSize: '1.944vh', color: 'var(--on-dark-mute)', fontWeight: 700, marginBottom: '0.926vh' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
          Q&A — DISCUSSION STARTERS:
        </motion.p>
        {questions.map((q, i) => (
          <motion.p key={i} style={{ fontSize: '1.944vh', color: 'var(--on-dark-body)', lineHeight: 1.4, marginBottom: '0.556vh' }}
            initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}>
            {q}
          </motion.p>
        ))}
      </div>

      <Footer num={num} total={total} dark />
    </SlideWrapper>
  );
}
