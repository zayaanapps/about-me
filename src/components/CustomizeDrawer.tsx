import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { RotateCcw, Trash2, Upload, X } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface CustomizeDrawerProps {
  open: boolean;
  profile: PersonalProfile;
  onClose: () => void;
  onSave: (nextProfile: PersonalProfile) => void;
  onReset: () => void;
}

export function CustomizeDrawer({
  open,
  profile,
  onClose,
  onSave,
  onReset,
}: CustomizeDrawerProps) {
  const [draft, setDraft] = useState<PersonalProfile>(profile);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setDraft(profile);
      setPhotoError(null);
    }
  }, [open, profile]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setPhotoError('Please select a JPG, PNG, or WebP image.');
      return;
    }

    setPhotoError(null);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const size = 380;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const minSide = Math.min(img.width, img.height);
        const sx = (img.width - minSide) / 2;
        const sy = (img.height - minSide) / 2;
        ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

        const compressed = canvas.toDataURL('image/jpeg', 0.86);
        setDraft((prev) => ({ ...prev, avatarDataUrl: compressed }));
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave({
      ...draft,
      name: draft.name.trim() || profile.name,
      tagline: draft.tagline.trim() || profile.tagline,
      introduction: draft.introduction.trim() || profile.introduction,
      location: draft.location.trim() || profile.location,
      email: draft.email.trim() || profile.email,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="customize-title"
        >
          <motion.button
            type="button"
            aria-label="Close edit drawer"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/45 backdrop-blur-[2px] cursor-default"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-[#E2EBE6] bg-[#F7FAF8] dark:border-[#1D2923] dark:bg-[#0A0F0C]"
          >
            <div className="flex items-center justify-between border-b border-[#E2EBE6] px-6 py-4 dark:border-[#1D2923]">
              <div>
                <h2
                  id="customize-title"
                  className="font-display text-base font-semibold text-[#0E1813] dark:text-[#EFF4F1]"
                >
                  Edit Personal Profile
                </h2>
                <p className="mt-0.5 text-xs text-[#52665C] dark:text-[#899E93]">
                  Saved locally in your browser.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close panel"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#DAE4DE] bg-white text-[#0E1813] transition-colors hover:border-emerald-700/40 cursor-pointer dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
              <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
                {/* Photo Upload */}
                <div>
                  <span className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]">
                    Profile Photo
                  </span>
                  <div className="mt-2 flex flex-wrap items-center gap-2.5">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-xs font-medium text-[#0E1813] transition-colors hover:border-emerald-700/45 cursor-pointer dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1]"
                    >
                      <Upload className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" />
                      <span>Upload photo</span>
                    </button>
                    {draft.avatarDataUrl && (
                      <button
                        type="button"
                        onClick={() => setDraft((prev) => ({ ...prev, avatarDataUrl: null }))}
                        className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-[#52665C] transition-colors hover:text-rose-600 cursor-pointer dark:text-[#899E93] dark:hover:text-rose-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Restore default</span>
                      </button>
                    )}
                  </div>
                  {photoError && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400">{photoError}</p>
                  )}
                </div>

                {/* Fields */}
                <div className="grid gap-4">
                  <div>
                    <label
                      htmlFor="edit-name"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Name
                    </label>
                    <input
                      id="edit-name"
                      type="text"
                      value={draft.name}
                      onChange={(e) => setDraft((prev) => ({ ...prev, name: e.target.value }))}
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-tagline"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Personal Tagline
                    </label>
                    <input
                      id="edit-tagline"
                      type="text"
                      value={draft.tagline}
                      onChange={(e) => setDraft((prev) => ({ ...prev, tagline: e.target.value }))}
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-intro"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Introduction
                    </label>
                    <textarea
                      id="edit-intro"
                      rows={3}
                      value={draft.introduction}
                      onChange={(e) =>
                        setDraft((prev) => ({ ...prev, introduction: e.target.value }))
                      }
                      className="mt-1.5 w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2.5 text-sm text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-location"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Location
                    </label>
                    <input
                      id="edit-location"
                      type="text"
                      value={draft.location}
                      onChange={(e) => setDraft((prev) => ({ ...prev, location: e.target.value }))}
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="edit-email"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Email
                    </label>
                    <input
                      id="edit-email"
                      type="email"
                      value={draft.email}
                      onChange={(e) => setDraft((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 font-mono text-xs text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div className="grid gap-3 pt-1">
                    <span className="text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]">
                      Social &amp; Contact Links
                    </span>
                    <input
                      type="url"
                      aria-label="Facebook URL"
                      placeholder="https://facebook.com/..."
                      value={draft.socials.facebook}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, facebook: e.target.value },
                        }))
                      }
                      className="min-h-[42px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-xs text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                    <input
                      type="url"
                      aria-label="Messenger URL"
                      placeholder="https://m.me/..."
                      value={draft.socials.messenger}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, messenger: e.target.value },
                        }))
                      }
                      className="min-h-[42px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-xs text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                    <input
                      type="url"
                      aria-label="WhatsApp URL"
                      placeholder="https://wa.me/..."
                      value={draft.socials.whatsapp}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          socials: { ...prev.socials, whatsapp: e.target.value },
                        }))
                      }
                      className="min-h-[42px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-xs text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-[#E2EBE6] bg-white px-6 py-4 dark:border-[#1D2923] dark:bg-[#101613]">
                <button
                  type="button"
                  onClick={() => {
                    onReset();
                    onClose();
                  }}
                  className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-[#52665C] transition-colors hover:text-[#0E1813] cursor-pointer dark:text-[#899E93] dark:hover:text-[#EFF4F1]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#047857] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#065F46] cursor-pointer dark:bg-emerald-600 dark:hover:bg-emerald-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
