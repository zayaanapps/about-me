import { motion } from 'motion/react';
import { Compass, Lightbulb, Shield, Target } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface AboutSectionProps {
  profile: PersonalProfile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const values = [
    {
      title: 'Professionalism',
      description: 'Maintaining high standards, accountability, and dependable execution in every responsibility.',
      icon: <Shield className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Core Standard',
    },
    {
      title: 'Responsibility & Honesty',
      description: 'Taking ownership of operational duties and communicating with clarity and integrity.',
      icon: <Target className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Commitment',
    },
    {
      title: 'Curiosity & Innovation',
      description: 'Constantly exploring new technologies, digital tools, and creative ways to improve workflows.',
      icon: <Lightbulb className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Mindset',
    },
    {
      title: 'Practical Simplicity',
      description: 'Turning complex ideas into straightforward, useful solutions that solve real-world needs.',
      icon: <Compass className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Execution',
    },
  ];

  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Shield className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Background &amp; Mindset
          </p>
          <h2
            id="about-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            About Me
          </h2>
        </div>
      </div>

      <div className="mt-6 space-y-4 text-sm font-medium leading-relaxed text-[#384A41] sm:text-base dark:text-[#A4B8AE]">
        <p className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-4 dark:border-[#24382E] dark:bg-[#121B16]">
          I am an operations and security services professional based in{' '}
          <strong className="font-bold text-[#0E1813] dark:text-white">{profile.location}</strong>, experienced in workforce coordination, client relations, and operational administration.
        </p>
        <p className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-4 dark:border-[#24382E] dark:bg-[#121B16]">
          Alongside my professional career, I am a passionate technology enthusiast exploring AI, web applications, and Android development. I enjoy learning by experimenting and turning practical ideas into useful digital solutions.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#384A41] dark:text-[#A4B8AE]">
          My Core Values
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                    {v.icon}
                  </div>
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300">
                    {v.badge}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-[#0E1813] dark:text-white">
                  {v.title}
                </h4>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#4A5D53] dark:text-[#90A49A]">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
