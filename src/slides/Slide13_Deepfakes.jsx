import { motion } from 'framer-motion';
import { FaUserSecret } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const cases = [
  { amt: '$850,000', desc: 'A woman in France scammed over 18 months by AI-generated images and videos pretending to be Brad Pitt.' },
  { amt: '$1M+', desc: 'People lost over a million dollars to deepfake videos of Elon Musk promoting fake crypto investments.' },
  { amt: 'Millions', desc: 'Taylor Swift\'s voice was AI-cloned to promote cookware she never endorsed, spread through Meta ads.' },
];

export default function Slide13_Deepfakes({ direction, num, total }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ right: '-8%', top: '-15%', width: '30%', paddingBottom: '30%', background: 'var(--red)', opacity: 0.10 }} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <BgDecoration dark />
      <Header kicker="PART 2 · REAL-WORLD DANGER" title="Deepfake Scams Are Real" icon={FaUserSecret} dark titleSize={24} />
      <div className="slide-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.481vh', marginTop: '1.481vh' }}>
          {cases.map((c, i) => (
            <Card key={i} fill="var(--navy2)" shadow={false} delay={0.2 + i * 0.12} style={{ padding: '12px 16px' }}>
              <p style={{ fontSize: '2.315vh', lineHeight: 1.45 }}>
                <strong className="text-amber" style={{ fontSize: '2.778vh' }}>{c.amt} </strong>
                <span className="text-on-dark">{c.desc}</span>
              </p>
            </Card>
          ))}
        </div>
        <motion.div style={{ marginTop: '1.852vh', padding: '10px 16px', background: 'rgba(232,76,91,0.15)', borderRadius: '1.852vh' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <p style={{ fontSize: '2.222vh', color: 'var(--white)', lineHeight: 1.45 }}>
            <strong style={{ color: 'var(--red)' }}>Deepfake content online: </strong>
            ~500K pieces in 2023 → ~8 million by 2025. It's growing 16× in two years.
          </p>
        </motion.div>
      </div>
      <Footer num={num} total={total} dark />
    </SlideWrapper>
  );
}
