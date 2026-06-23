import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const risks = [
  { icon: '✍️', text: 'Letting AI finish every caption or comment — so you stop developing your own voice and writing style.' },
  { icon: '📖', text: 'Asking AI to summarize a book you were assigned instead of reading it — you walk into class with information, but zero understanding.' },
  { icon: '🔢', text: 'Using AI to solve every math problem step-by-step instead of struggling first — right answer on homework, wrong answer on the exam.' },
  { icon: '👁️', text: 'Believing an AI-generated image or video instantly, because it looks real.' },
];

export default function Slide12_SkillsAtRisk({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="AI Putting Your Skills at Risk" icon={FaExclamationTriangle} titleSize={22} />
      <div className="slide-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.296vh', marginTop: '1.111vh' }}>
          {risks.map((r, i) => (
            <Card key={i} fill="var(--card-bg)" shadow={false} className="s8-flaw-card" delay={0.15 + i * 0.1}>
              <p style={{ fontSize: '2.222vh', color: 'var(--text-dark)', lineHeight: 1.45, display: 'flex', alignItems: 'flex-start', gap: '1.481vh' }}>
                <span style={{ fontSize: '2.963vh', flexShrink: 0 }}>{r.icon}</span>
                <span>{r.text}</span>
              </p>
            </Card>
          ))}
        </div>
        <Card fill="#FFF0F0" shadow={false} style={{ marginTop: '1.481vh', padding: '10px 16px' }} delay={0.6}>
          <p style={{ fontSize: '2.130vh', color: '#8A2A00', lineHeight: 1.45 }}>
            <strong>The common thread in every deepfake scam:</strong> the victim's brain saw a familiar, trusted face and skipped the step of questioning it. Critical thinking switched off at the exact moment it mattered most.
          </p>
        </Card>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
