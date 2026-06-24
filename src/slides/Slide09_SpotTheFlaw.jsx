import { motion } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const flaws = [
  {
    st: '"الـ influencer ده أخد supplement وبقى عنده abs في أسبوعين، يبقى الـ supplement هو اللي عملهاله."',
    fl: 'الغلط هنا: ممكن يكون كمان بيتدرب وملتزم بـ diet — الـ correlation مش معناه causation.',
  },
  {
    st: '"كل اللي في الكلاس عندي بيحبوا الأغنية دي، يبقى أكيد دي أحسن أغنية اتعملت في التاريخ."',
    fl: 'الغلط هنا: الـ popularity مش معناها quality — و"كل الناس" هنا أصلًا sample صغيرة ومتحيزة.',
  },
  {
    st: '"أنا لبست التيشيرت المحظوظ بتاعي يوم الامتحان وجبت درجة كويسة، يبقى التيشيرت هو السبب."',
    fl: 'الغلط هنا: فيه فرق بين coincidence وبين evidence — مجرد إن حاجتين حصلوا ورا بعض مش معناه إن واحدة سببت التانية.',
  },
];

export default function Slide09_SpotTheFlaw({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="Spot the Flaw" icon={FaBalanceScale} />
      <div className="slide-content">
        <div className="s8-flaw-list">
          {flaws.map((f, i) => (
            <Card key={i} fill="var(--card-bg)" shadow={false} className="s8-flaw-card" delay={0.2 + i * 0.12}>
              <p className="s8-statement" style={{ textAlign: "center", direction: "rtl" }} >{f.st}</p>
              <p className="s8-correction" style={{ textAlign: "center", direction: "rtl" }}>
                <span className="text-body">{f.fl}</span>
              </p>
            </Card>
          ))}
        </div>
        <motion.p className="s8-takeaway" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.65 }}>
          Critical thinking is a muscle — and like any muscle, if you stop using it, it gets weak.
        </motion.p>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
