import { motion } from 'framer-motion';
import { FaFlag } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const facts = [
  { stat: '$1.8B', desc: "Egypt's digital ad market, and growing fast." },
  { stat: '2030', desc: "Egypt's National AI Strategy runs through 2030 — the government knows this tech is reshaping the economy." },
  { stat: '24–72 hrs', desc: 'Cairo agencies use AI to generate ad campaigns in hours instead of weeks.' },
];

export default function Slide17_EgyptScale({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 3 · AI, ADS & YOUR CHOICES" title="Egypt Is Part of This, at Scale" icon={FaFlag} titleSize={22} />
      <div className="slide-content">
        <motion.p style={{ fontSize: '2.315vh', color: 'var(--text-body)', marginBottom: '2.222vh', lineHeight: 1.5 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          This isn't some far-off Silicon Valley thing. Egypt is right in the middle of it.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.852vh', marginBottom: '2.222vh' }}>
          {facts.map((f, i) => (
            <Card key={i} fill="var(--card-bg2)" delay={0.25 + i * 0.1} style={{ padding: '14px 12px', textAlign: 'center' }}>
              <p style={{ fontSize: '4.074vh', fontWeight: 800, color: 'var(--cyan-dk)', marginBottom: '0.741vh' }}>{f.stat}</p>
              <p style={{ fontSize: '1.944vh', color: 'var(--text-body)', lineHeight: 1.4 }}>{f.desc}</p>
            </Card>
          ))}
        </div>

        <Card fill="var(--card-bg)" shadow={false} style={{ padding: '12px 16px' }} delay={0.55}>
          <p style={{ fontSize: '2.222vh', color: 'var(--text-dark)', lineHeight: 1.5 }}>
            <strong>ASK:</strong> "Next time an ad feels weirdly relevant — like it's reading your mind — what's actually happening?" It's not reading minds. It's pattern-matching your past behavior at scale, tested against thousands of people like you first.
          </p>
        </Card>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
