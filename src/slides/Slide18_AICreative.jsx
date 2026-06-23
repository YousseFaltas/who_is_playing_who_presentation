import { motion } from 'framer-motion';
import { FaMusic, FaFilm, FaBullhorn } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const items = [
  {
    Icon: FaMusic,
    title: 'Music — Suno',
    desc: 'Tools like Suno generate a full song — lyrics, vocals, instruments — from a single text prompt, in under a minute, in basically any language including Arabic. Full Mahraganat-style tracks, no instrument or singing skill required.',
    color: 'var(--cyan-dk)',
  },
  {
    Icon: FaFilm,
    title: 'Deepfakes in Film & TV',
    desc: "The same tech behind scam videos powers legitimate effects — de-aging actors, dubbing voices into other languages, resurrecting performances. The line between 'cool effect' and 'dangerous fake' is razor thin.",
    color: '#8A3FFC',
  },
  {
    Icon: FaBullhorn,
    title: 'Egyptian Marketing Campaigns',
    desc: 'Local agencies use AI video tools cutting production by 50–70%, generating ads in 24–72 hours instead of 2–6 weeks. AI avatars can greet customers by name in personalized videos — a different ad for every viewer.',
    color: 'var(--amber)',
  },
];

export default function Slide18_AICreative({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 4 · AI IN CREATIVE INDUSTRIES" title="Music, Film & Egyptian Marketing" icon={FaMusic} titleSize={22} />
      <div className="slide-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.481vh', marginTop: '1.111vh' }}>
          {items.map((item, i) => (
            <Card key={i} fill="var(--card-bg)" delay={0.2 + i * 0.12} style={{ padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.852vh' }}>
                <div style={{
                  width: '6.296vh', height: '6.296vh', borderRadius: '50%', background: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white', fontSize: '2.778vh'
                }}>
                  <item.Icon />
                </div>
                <div>
                  <p style={{ fontSize: '2.315vh', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '0.370vh' }}>{item.title}</p>
                  <p style={{ fontSize: '2.037vh', color: 'var(--text-body)', lineHeight: 1.45 }}>{item.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer num={18} total={21} />
    </SlideWrapper>
  );
}
