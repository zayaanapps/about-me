import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DEFAULT_PORTRAIT_SRC, DEFAULT_SKETCH_SRC } from '../data/profile';

interface MinimalAvatarProps {
  name: string;
  mode: 'portrait' | 'sketch';
  avatarDataUrl: string | null;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'AK';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function MinimalAvatar({ name, mode, avatarDataUrl }: MinimalAvatarProps) {
  const [failedSrcs, setFailedSrcs] = useState<Record<string, boolean>>({});
  const initials = getInitials(name);

  const activeSrc = avatarDataUrl
    ? avatarDataUrl
    : mode === 'portrait'
      ? DEFAULT_PORTRAIT_SRC
      : DEFAULT_SKETCH_SRC;

  const isCustomSketch = Boolean(avatarDataUrl && mode === 'sketch');
  const imageFailed = Boolean(failedSrcs[activeSrc]);

  return (
    <AnimatePresence mode="wait">
      {!imageFailed ? (
        <motion.img
          key={`${mode}-${avatarDataUrl ? 'custom' : 'default'}`}
          src={activeSrc}
          alt={mode === 'portrait' ? `${name} portrait` : `${name} sketch`}
          referrerPolicy="no-referrer"
          onError={() =>
            setFailedSrcs((prev) => ({
              ...prev,
              [activeSrc]: true,
            }))
          }
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: avatarDataUrl ? 1 : 1.04 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full w-full object-cover object-center ${
            isCustomSketch
              ? 'grayscale contrast-150 brightness-110 dark:brightness-95'
              : mode === 'sketch'
                ? 'dark:brightness-95 dark:contrast-110'
                : ''
          }`}
        />
      ) : (
        <motion.div
          key="fallback-monogram"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#EAF5EF] to-[#D4EBDF] text-emerald-950 dark:from-[#12261D] dark:to-[#0A1711] dark:text-emerald-200"
        >
          <span className="font-display text-3xl font-semibold tracking-tight">{initials}</span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-70">
            {mode}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
