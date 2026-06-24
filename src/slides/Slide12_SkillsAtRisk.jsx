import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const risks = [
  { icon: '✍️', text: 'إنك تسيب الـ AI يكمّل كل caption أو comment — لحد ما تبطل تطوّر صوتك الخاص وطريقة كتابتك.' },
  { icon: '📖', text: 'إنك تطلب من الـ AI يلخّصلك كتاب مطلوب منك تقراه بدل ما تقراه فعلًا — تدخل الكلاس ومعاك معلومات، بس من غير أي فهم حقيقي.' },
  { icon: '🔢', text: 'إنك تستخدم الـ AI يحلّ كل مسائل الماث step-by-step بدل ما تحاول وتغلط الأول — إجابة صح في الـ homework، وإجابة غلط في الامتحان.' },
  { icon: '👁️', text: 'إنك تصدّق صورة أو فيديو معمول بالـ AI على طول، لمجرد إنه شكله حقيقي.' },
];

export default function Slide12_SkillsAtRisk({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="AI Putting Your Skills at Risk" icon={FaExclamationTriangle} titleSize={22} />
      <div className="slide-content" style={{ direction: "rtl", textAlign: "right" }}>
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
          <p style={{ fontSize: '2.130vh', color: '#8A2A00', lineHeight: 1.45, textAlign: "center", direction: "rtl" }}>
            <strong>الخيط المشترك في كل deepfake scam:</strong> إن مخ الضحية شاف وش مألوف وواثق فيه… فعدّى خطوة إنه يشك أو يسأل. الـ critical thinking اتقفلت في اللحظة اللي كانت محتاجاه أكتر حاجة.
          </p>
        </Card>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
