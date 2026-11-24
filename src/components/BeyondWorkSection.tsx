import { motion } from 'motion/react';
import { Compass, Cpu, Heart, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface BeyondWorkProps {
  profile: PersonalProfile;
}

export function BeyondWorkSection({ profile }: BeyondWorkProps) {
  const highlights = [
    {
      title: 'Professional Experience',
      desc: 'Operations management and dependable service coordination.',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Operational Responsibility',
      desc: 'Maintaining high standards, client relations, and quality benchmarks.',
      icon: <Compass className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Technology Enthusiasm',
      desc: 'Exploring AI, web tools, and software development possibilities.',
      icon: <Cpu className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Continuous Learning',
      desc: 'Curiosity-driven experimentation and hands-on technical discovery.',
      icon: <Lightbulb className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Personal Projects',
      desc: 'Building useful utilities like Siaam Store and mobile app companions.',
      icon: <Zap className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Practical Innovation',
      desc: 'Transforming everyday challenges into simple, elegant digital solutions.',
      icon: <Heart className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
  ];

  return (
    <motion.section
      id="beyond"
      aria-labelledby="beyond-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          Beyond Work &amp; Highlights
        </p>
        <h2
          id="beyond-heading"
          className="font-display text-2xl font-extrabold tracking-tight text-[#0E1813] sm:text-3xl dark:text-white"
        >
          Life, Purpose &amp; Highlights
        </h2>
        <p className="mt-1 text-sm font-medium text-[#4A5D53] dark:text-[#90A49A]">
          Values and personal commitments that shape my everyday perspective in {profile.location}.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-6 shadow-xs transition-colors duration-300 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/80">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#0E1813] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#4A5D53] dark:text-[#90A49A]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Interests & Family Paragraph */}
      <div className="mt-8 rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-6 shadow-xs sm:p-8 dark:border-[#24382E] dark:bg-[#121B16]">
        <h3 className="font-display text-lg font-bold text-[#0E1813] dark:text-white">
          Personal Interests &amp; Focus
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#384A41] sm:text-[15px] dark:text-[#A4B8AE]">
          Outside of my professional responsibilities in operations and security management, I dedicate meaningful time to family, exploring new ideas, digital creativity, and building personal projects. I believe that a balanced life rooted in responsibility, continuous learning, and shared happiness creates a truly productive and fulfilling future.
        </p>
      </div>
    </motion.section>
  );
}
