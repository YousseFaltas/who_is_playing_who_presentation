import { motion } from 'framer-motion';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Card from '../components/Card';

export default function Slide01_Title({ direction, num, total }) {
  const extraCircles = [
    { x: '66%', y: '-18%', w: '46%', color: 'var(--cyan)', opacity: 0.10, delay: 0 },
    { x: '79%', y: '68%', w: '14%', color: 'var(--cyan)', opacity: 0.18, delay: 1 },
  ];

  return (
    <SlideWrapper dark direction={direction}>
      <BgDecoration dark extra={extraCircles} />
      <motion.div
        className="bg-circle bg-circle--animate-slow"
        style={{ left: '-12%', top: '66%', width: '34%', paddingBottom: '34%', background: 'var(--amber)', opacity: 0.12 }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.12 }}
        transition={{ duration: 1.4, delay: 0.3 }}
      />
      <motion.p className="s1-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        An AI Lecture  ·  For High-School Students
      </motion.p>
      <motion.h1 className="s1-title" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.35 }}>
        Who's Playing Who?
      </motion.h1>
      <motion.p className="s1-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}>
        Everything about AI and who's really in control
      </motion.p>
      <Card fill="var(--navy2)" className="s1-bottom-card" delay={0.65}>
        <p style={{ fontWeight: 'bold', marginBottom: '1vh' }}>Are you using AI… or is AI using you?</p>
        <p style={{ fontSize: '2.5vh', opacity: 0.8, lineHeight: 1.4 }}>
          That's the question I want you to ask yourself every single day,<br />
          after you walk out of here.
        </p>
      </Card>
    </SlideWrapper>
  );
}
