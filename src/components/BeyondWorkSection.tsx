import { motion } from 'motion/react';
import { BookOpen, Compass, Heart, Home, Lightbulb, Sparkles } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface BeyondWorkProps {
  profile: PersonalProfile;
}

export function BeyondWorkSection({ profile }: BeyondWorkProps) {
  const humanPillars = [
    {
      title: 'Family Man, Husband & Father',
      desc: 'My proudest anchor is my family. Being a husband and a father keeps me grounded in patience, care, and quiet everyday responsibility.',
      icon: <Home className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Lifelong Learner',
      desc: 'Whether reading, observing how things work, or testing a new digital concept, I enjoy staying teachable at every stage of life.',
      icon: <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Quiet Dreamer',
      desc: 'I like imagining better ways to do everyday things—and believing that small, steady steps can turn personal goals into reality.',
      icon: <Sparkles className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Explorer of New Ideas',
      desc: 'Curiosity keeps my days vibrant—discovering emerging technologies, new ways of thinking, and unexpected intersections between fields.',
      icon: <Compass className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Builder at Heart',
      desc: 'There is a quiet joy in taking a blank screen, collaborating with AI, and creating something genuinely useful from scratch.',
      icon: <Lightbulb className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      title: 'Purpose & Balance',
      desc: 'Work matters, technology excites me, and family gives everything meaning. Keeping those three in harmony is my everyday compass.',
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
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Heart className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            The Human Side
          </p>
          <h2
            id="beyond-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Beyond the Professional Identity
          </h2>
        </div>
      </div>

      <p className="mt-5 text-sm font-medium leading-relaxed text-[#384A41] sm:text-base dark:text-[#A4B8AE]">
        Degrees and job titles describe parts of my journey in {profile.location}, but they do not
        define all of who I am. Away from work, I am a family man—a husband and a father—a lifelong
        learner, a dreamer, and someone who simply enjoys discovering new things and building ideas.
      </p>

      {/* Human Identity Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-[#E4ECE7] pt-6 sm:grid-cols-2 lg:grid-cols-3 dark:border-[#24382E]">
        {humanPillars.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#0E1813] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 border-t border-[#E4ECE7] pt-2.5 text-xs font-medium leading-relaxed text-[#4A5D53] sm:text-sm dark:border-[#24382E] dark:text-[#90A49A]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Warm Personal Reflection */}
      <div className="mt-6 border-t-2 border-[#E4ECE7] pt-6 dark:border-[#24382E]">
        <div className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-6 shadow-xs sm:p-7 dark:border-[#24382E] dark:bg-[#121B16]">
          <h3 className="border-b border-[#E4ECE7] pb-2.5 font-display text-base font-bold text-[#0E1813] sm:text-lg dark:border-[#24382E] dark:text-white">
            A Quiet Perspective
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-[#384A41] sm:text-[15px] dark:text-[#A4B8AE]">
            I believe a meaningful life is built in ordinary moments: showing up for family with
            warmth, honoring commitments at work with integrity, and keeping a small corner of
            every day open for curiosity, reflection, and creative building.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
