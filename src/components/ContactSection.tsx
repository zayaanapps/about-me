import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface ContactSectionProps {
  profile: PersonalProfile;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [composerOpen, setComposerOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const channels = [
    {
      id: 'facebook',
      label: 'Facebook',
      caption: 'Professional network',
      href: profile.socials.facebook || 'https://facebook.com',
      external: true,
      icon: <Globe className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      id: 'messenger',
      label: 'Messenger',
      caption: 'Direct conversation',
      href: profile.socials.messenger || 'https://m.me',
      external: true,
      icon: <Send className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      caption: (() => {
        const wa = profile.socials.whatsapp || 'https://wa.me/8801313209156';
        const match = wa.match(/wa\.me\/(\d+)/);
        return match ? `+${match[1]}` : 'Quick message';
      })(),
      href: profile.socials.whatsapp || 'https://wa.me/8801313209156',
      external: true,
      icon: <MessageCircle className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    },
    {
      id: 'email',
      label: 'Email',
      caption: profile.email,
      href: `mailto:${profile.email}?subject=${encodeURIComponent(`Hello ${profile.name}`)}`,
      external: false,
      icon: <Mail className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    },
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleSendNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject.trim() || `Hello ${profile.name}`
    )}&body=${encodeURIComponent(message.trim())}`;
    window.location.href = mailto;
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex flex-col gap-4 border-b-2 border-[#E4ECE7] pb-5 sm:flex-row sm:items-end sm:justify-between dark:border-[#24382E]">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Let&apos;s Connect
          </p>
          <h2
            id="contact-heading"
            className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#0E1813] sm:text-3xl dark:text-white"
          >
            Contact &amp; Personal Links
          </h2>
          <p className="mt-1 text-sm font-medium text-[#4A5D53] dark:text-[#90A49A]">
            Reach out for security operations inquiries, AI &amp; Vibe Coding discussions, or collaboration in {profile.location}.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setComposerOpen((prev) => !prev)}
          aria-expanded={composerOpen}
          className="inline-flex min-h-[42px] w-fit items-center gap-1.5 rounded-xl bg-[#047857] px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-[#065F46] active:scale-[0.98] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          <Send className="h-3.5 w-3.5" />
          <span>{composerOpen ? 'Close Note' : 'Send a Note'}</span>
        </button>
      </div>

      {/* 2x2 Channels Grid */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {channels.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noopener noreferrer' : undefined}
            className="group flex min-h-[60px] items-center justify-between rounded-2xl border border-emerald-700/18 bg-[#F4FAF7] px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-700/45 hover:bg-[#EAF6F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-emerald-400/16 dark:bg-[#121D17] dark:hover:border-emerald-400/45 dark:hover:bg-[#17261E]"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              {channel.icon}
              <div className="min-w-0">
                <div className="text-sm font-medium text-[#0E1813] dark:text-[#EFF4F1]">
                  {channel.label}
                </div>
                <div className="truncate text-xs text-[#52665C] dark:text-[#899E93]">
                  {channel.caption}
                </div>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#7E9288] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-700 dark:text-[#5C7166] dark:group-hover:text-emerald-400" />
          </a>
        ))}
      </div>

      {/* One-Click Copy Email Bar */}
      <div className="mt-6 border-t-2 border-[#E4ECE7] pt-5 dark:border-[#24382E]">
        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label={`Copy email address ${profile.email}`}
          className="flex min-h-[52px] w-full items-center justify-between rounded-2xl border border-[#E2EBE6] bg-[#F7FAF8] px-5 py-3 text-left transition-colors duration-200 hover:border-emerald-700/40 hover:bg-[#EAF3EE] active:scale-[0.995] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-[#1D2923] dark:bg-[#0B100D] dark:hover:border-emerald-500/40 dark:hover:bg-[#131D18]"
        >
          <span className="flex items-center gap-3 min-w-0">
            {copied ? (
              <Check className="h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4 shrink-0 text-[#52665C] dark:text-[#899E93]" />
            )}
            <span className="truncate font-mono text-sm text-[#0E1813] dark:text-[#EFF4F1]">
              {profile.email}
            </span>
          </span>
          <span
            aria-live="polite"
            className={`ml-3 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              copied
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-[#52665C] dark:text-[#899E93]'
            }`}
          >
            {copied ? 'Copied' : 'Copy email'}
          </span>
        </button>
      </div>

      {/* Collapsible Email Note Drafter */}
      <AnimatePresence initial={false}>
        {composerOpen && (
          <motion.form
            onSubmit={handleSendNote}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 rounded-2xl border border-[#E2EBE6] bg-[#F7FAF8] p-6 transition-colors duration-300 dark:border-[#1D2923] dark:bg-[#0B100D]"
          >
            <div className="grid gap-4">
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Operations inquiry or tech collaboration"
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note and open it in your email app..."
                  className="mt-1.5 w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2.5 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setComposerOpen(false)}
                className="min-h-[42px] rounded-xl px-4 py-2 text-xs font-medium text-[#52665C] transition-colors hover:text-[#0E1813] cursor-pointer dark:text-[#899E93] dark:hover:text-[#EFF4F1]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#047857] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#065F46] cursor-pointer dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Open Email App</span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
