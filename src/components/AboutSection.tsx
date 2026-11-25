import { motion } from 'motion/react';
import { BookOpen, Code2, Compass, Lightbulb, Shield, ShieldCheck, Target } from 'lucide-react';
import { IDENTITY_PILLARS, type PersonalProfile } from '../data/profile';

interface AboutSectionProps {
  profile: PersonalProfile;
}

export function AboutSection({ profile }: AboutSectionProps) {
  const values = [
    {
      title: 'Discipline & Responsibility',
      description:
        'Taking ownership of commitments, upholding service standards, and staying dependable when things matter.',
      icon: <Shield className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Core Standard',
    },
    {
      title: 'Clarity & Communication',
      description:
        'Listening carefully, reading nuances accurately, and communicating with honesty and respect.',
      icon: <Target className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Foundation',
    },
    {
      title: 'Curiosity & Vibe Coding',
      description:
        'Collaborating with AI to explore new tools, test ideas hands-on, and turn concepts into working software.',
      icon: <Lightbulb className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Creative Drive',
    },
    {
      title: 'Practical Simplicity',
      description:
        'Building straightforward, useful solutions that solve real-world problems without unnecessary complexity.',
      icon: <Compass className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />,
      badge: 'Execution',
    },
  ];

  const pillarIcons = {
    scholar: <BookOpen className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    professional: <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    creator: <Code2 className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
  };

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
            My Story &amp; Identity
          </p>
          <h2
            id="about-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            About Me
          </h2>
        </div>
      </div>

      {/* First-Person Story */}
      <div className="mt-6 space-y-4 text-sm font-medium leading-relaxed text-[#384A41] sm:text-base dark:text-[#A4B8AE]">
        <p className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-4 sm:p-5 dark:border-[#24382E] dark:bg-[#121B16]">
          I live and work in{' '}
          <strong className="font-bold text-[#0E1813] dark:text-white">{profile.location}</strong>,
          and my path has never followed a single straight line. I completed both my{' '}
          <strong className="font-bold text-[#0E1813] dark:text-white">
            Bachelor&apos;s and Master&apos;s degrees in English
          </strong>{' '}
          at{' '}
          <span className="text-[0.9em] font-semibold text-[#0E1813] dark:text-white">
            Govt. Titumir College, Dhaka
          </span>
          —years that taught me how language shapes thought, how to analyze ideas carefully, and how
          to communicate clearly with people from every walk of life.
        </p>
        <p className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-4 sm:p-5 dark:border-[#24382E] dark:bg-[#121B16]">
          Professionally, I work as a{' '}
          <strong className="font-bold text-[#0E1813] dark:text-white">
            Security Professional
          </strong>{' '}
          at{' '}
          <span className="text-[0.9em] font-semibold text-[#0E1813] dark:text-white">
            G4S Secure Solutions Bangladesh (P) Ltd.
          </span>
          . Working in security operations and client coordination demands calm judgment, real
          accountability, clear documentation, and steady leadership under pressure. Those daily
          habits taught me that good ideas only matter when you can organize people and follow
          through reliably.
        </p>
        <p className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-4 sm:p-5 dark:border-[#24382E] dark:bg-[#121B16]">
          Outside my career, I am deeply drawn to technology, artificial intelligence, and digital
          creation. I call myself a{' '}
          <strong className="font-bold text-[#0E1813] dark:text-white">Vibe Coder</strong>—someone
          who partners with AI to turn practical ideas into websites, Android apps, and everyday
          digital tools. What started with curiosity has become a rewarding creative practice:
          combining language clarity from English, structure from security operations, and hands-on
          knowledge across AI and the{' '}
          <span className="text-[0.9em] font-semibold text-[#0E1813] dark:text-white">
            Google ecosystem
          </span>{' '}
          (Android, Firebase, Gemini, and Google Workspace) to build things that genuinely help
          people.
        </p>
      </div>

      {/* Three Connected Identities */}
      <div className="mt-8 border-t-2 border-[#E4ECE7] pt-6 dark:border-[#24382E]">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#384A41] dark:text-[#A4B8AE]">
          Three Sides of One Journey
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {IDENTITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
            >
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                  {pillarIcons[pillar.id]}
                </div>
                <h4 className="mt-3.5 font-display text-base font-bold text-[#0E1813] dark:text-white">
                  {pillar.title}
                </h4>
                <p className="mt-1 font-mono text-[10px] font-medium leading-snug text-emerald-700 dark:text-emerald-400">
                  {pillar.subtitle}
                </p>
                <p className="mt-3 border-t border-[#E4ECE7] pt-3 text-xs font-medium leading-relaxed text-[#4A5D53] dark:border-[#24382E] dark:text-[#90A49A]">
                  {pillar.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-8 border-t-2 border-[#E4ECE7] pt-6 dark:border-[#24382E]">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#384A41] dark:text-[#A4B8AE]">
          Principles That Guide Me
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E4ECE7] pb-3 dark:border-[#24382E]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                    {v.icon}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                    {v.badge}
                  </span>
                </div>
                <h4 className="mt-3.5 font-display text-base font-bold text-[#0E1813] dark:text-white">
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
