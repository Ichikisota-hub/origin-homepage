import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Iさん',
    grade: '大学2年',
    title: '「お金目的」から始まり、今では組織の責任者へ',
    text: '「最初は営業に興味があり、お金が欲しいなという気持ちだけで1年の夏に営業を始めました。今ではORIGINのなかで居場所を見つけ、責任者という立場をいただいています。やりがいとお金、経験が無限大に手に入る場所だと強く感じます。」',
  },
  {
    name: 'Tさん',
    grade: '大学2年',
    title: '無気力な日常から抜け出し、熱狂できる仲間と出会う',
    text: '「今までは、家でゴロゴロしたりひたすら遊んでいる日々でしたが、友人に紹介され、強いやりがいと仲間感を得ることができ、営業が楽しくなりました。最初は成果が出にくい時期もありましたが、充実したサポート体制のおかげで成長できました。」',
  },
];

export default function Stories() {
  return (
    <section className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">
            メンバーの成長ストーリー
          </h2>
          <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.2em] uppercase">Member Stories</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 md:p-12 rounded-3xl md:rounded-[2rem] shadow-sm relative overflow-hidden"
            >
              <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-12 h-12 md:w-16 md:h-16 text-slate-100 -z-0" />
              <div className="relative z-10 pl-2 md:pl-10">
                <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-tight">
                  {story.title}
                </h3>
                <div className="mb-4 md:mb-6 flex items-baseline gap-3">
                  <span className="text-base md:text-lg font-bold text-orange-600">{story.name}</span>
                  <span className="text-xs md:text-sm font-medium text-slate-500">（{story.grade}）</span>
                </div>
                <p className="text-sm md:text-lg text-slate-700 leading-relaxed font-medium">
                  {story.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
