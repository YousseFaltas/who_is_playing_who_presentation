import { motion } from 'framer-motion';
import { MdPsychology } from 'react-icons/md';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Slide07_DoesAIThink({ direction }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ right: '-8%', top: '-20%', width: '36%', paddingBottom: '36%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <BgDecoration dark />
      <Header kicker="PART 1 · DOES AI ACTUALLY THINK?" title="Does AI Actually Think?" icon={MdPsychology} dark />
      <div className="slide-content" style={{ marginTop: '3vh' }}>
        <motion.div style={{
          background: '#212121',
          borderRadius: '2vh',
          padding: '2.5vh 3vh',
          width: '70%',
          boxShadow: '0 1vh 3vh rgba(0,0,0,0.4)',
          border: '1px solid #333',
          fontFamily: 'Inter, sans-serif'
        }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2vh', marginBottom: '2vh' }}>
            <div style={{ width: '4.5vh', height: '4.5vh', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MdPsychology style={{ color: '#000', fontSize: '3vh' }} />
            </div>
            <div style={{ background: '#303030', padding: '1vh 2vh', borderRadius: '4vh', display: 'flex', alignItems: 'center', gap: '1vh', border: '1px solid #444' }}>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ width: '1.5vh', height: '1.5vh', border: '0.25vh solid #aaa', borderTopColor: 'transparent', borderRadius: '50%' }} />
              <span style={{ fontSize: '1.8vh', color: '#ccc', fontWeight: 500 }}>Thinking...</span>
            </div>
          </div>
          <div style={{ paddingLeft: '6.5vh' }}>
            <div style={{ height: '1.5vh', width: '40%', background: '#333', borderRadius: '1vh', marginBottom: '1vh' }}></div>
            <div style={{ height: '1.5vh', width: '60%', background: '#333', borderRadius: '1vh' }}></div>
          </div>
        </motion.div>

        <motion.div className="s7-text" style={{ maxWidth: '100%', marginTop: '4vh' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p style={{ fontSize: '2.5vh', lineHeight: 1.5, textAlign: 'center' }}>
            <strong className="text-white">The truth: that's a performance, not real thinking. </strong>
            <span className="text-on-dark">
              The model generates extra text in the style of step-by-step reasoning because models that write out their steps land on better answers. But it has no awareness it exists. No goals of its own.
            </span>
          </p>
        </motion.div>

      <Card fill="var(--navy2)" shadow={false} className="s7-bottom-card" delay={0.55} style={{ position: 'relative', bottom: 'auto', left: 'auto', right: 'auto', width: '80%', margin: '4vh auto 0' }}>
        <p style={{ fontSize: '2.2vh', textAlign: 'center' }}>Something can be designed to feel trustworthy — without actually earning that trust. Keep that in your pocket.</p>
      </Card>
      <motion.p className="s7-quote" style={{ position: 'relative', bottom: 'auto', left: 'auto', right: 'auto', textAlign: 'center', marginTop: '3vh', fontSize: '2vh' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
        ASK: "Why would a company want their AI to look like it's thinking, even just for show?"
      </motion.p>
      </div>
      <Footer num={7} total={21} dark />
    </SlideWrapper>
  );
}
