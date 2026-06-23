import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const examples = [
  {
    topic: 'Studying for an Exam',
    bad: '"AI, answer these 50 past-paper questions for me."',
    good: '"AI, here are my own messy notes from class. Organize them into a clean summary and quiz me with 10 questions."',
    why: 'You did the learning; AI did the boring formatting.',
  },
  {
    topic: 'A School Project',
    bad: '"AI, write my whole essay on the Egyptian revolution."',
    good: '"I know my argument and picked my three points. AI, help me check my grammar and suggest where my paragraph order is confusing."',
    why: 'You made the decisions; AI executed cleanup work.',
  },
  {
    topic: 'Something Suspicious Online',
    bad: 'Believing it because it looks real.',
    good: 'Pause — ask AI what the known patterns of this scam type look like, then check the verified account yourself.',
    why: 'AI helps you think faster — it doesn\'t think for you.',
  },
];

export default function Slide20_GoodVsBad({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 5 · HOW TO USE AI" title="Good vs. Bad AI Use" icon={FaCheckCircle} titleSize={22} />
      <div className="slide-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.296vh', marginTop: '0.741vh' }}>
          {examples.map((ex, i) => (
            <Card key={i} fill="var(--card-bg)" shadow={false} delay={0.15 + i * 0.12} style={{ padding: '10px 14px' }}>
              <p style={{ fontSize: '2.222vh', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.556vh' }}>{ex.topic}</p>
              <div style={{ display: 'flex', gap: '1.111vh', fontSize: '1.944vh', lineHeight: 1.4 }}>
                <div style={{ flex: 1, background: '#FFF0F0', borderRadius: '1.111vh', padding: '6px 8px' }}>
                  <span style={{ color: 'var(--red)', fontWeight: 700 }}><FaTimesCircle style={{ verticalAlign: 'middle', marginRight: '0.556vh' }} />Bad: </span>
                  <span style={{ color: 'var(--text-body)' }}>{ex.bad}</span>
                </div>
                <div style={{ flex: 1, background: '#EAFBE7', borderRadius: '1.111vh', padding: '6px 8px' }}>
                  <span style={{ color: 'var(--green)', fontWeight: 700 }}><FaCheckCircle style={{ verticalAlign: 'middle', marginRight: '0.556vh' }} />Good: </span>
                  <span style={{ color: 'var(--text-body)' }}>{ex.good}</span>
                </div>
              </div>
              <p style={{ fontSize: '1.852vh', color: 'var(--cyan-dk)', fontStyle: 'italic', marginTop: '0.556vh' }}>{ex.why}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
