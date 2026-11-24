import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, Trash2, X } from 'lucide-react';
import type { GalleryPhoto } from '../data/profile';

interface GallerySectionProps {
  gallery: GalleryPhoto[];
  onAddPhoto: (photo: GalleryPhoto) => void;
  onDeletePhoto: (photoId: string) => void;
}

export function GallerySection({
  gallery,
  onAddPhoto,
  onDeletePhoto,
}: GallerySectionProps) {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('Technology');
  const [url, setUrl] = useState('');

  const handleAdd = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const newPhoto: GalleryPhoto = {
      id: `gal-${Date.now()}`,
      title: title.trim(),
      caption: caption.trim() || 'Everyday moment',
      category: category.trim() || 'Personal',
      url: url.trim(),
    };

    onAddPhoto(newPhoto);
    setTitle('');
    setCaption('');
    setUrl('');
    setModalOpen(false);
  };

  return (
    <motion.section
      id="gallery"
      aria-labelledby="gallery-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-[#E2EBE6] bg-white p-6 transition-colors duration-300 sm:p-10 dark:border-[#1D2923] dark:bg-[#101613]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
            Personal Moments &amp; Gallery
          </p>
          <h2
            id="gallery-heading"
            className="font-display text-2xl font-semibold tracking-tight text-[#0E1813] sm:text-3xl dark:text-[#EFF4F1]"
          >
            Gallery
          </h2>
          <p className="mt-1 text-sm text-[#52665C] dark:text-[#899E93]">
            Moments, projects, workspace views, and everyday snapshots.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#047857] px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-[#065F46] active:scale-[0.98] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          <Plus className="h-3.5 w-3.5" />
          <span>Add Photo</span>
        </button>
      </div>

      {/* Responsive Photo Grid */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-2xl border border-[#E4ECE7] bg-[#F7FAF8] transition-all duration-300 hover:border-emerald-700/40 dark:border-[#1D2923] dark:bg-[#0B100D]"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(photo)}
              aria-label={`View ${photo.title} in lightbox`}
              className="relative aspect-[4/3] w-full overflow-hidden cursor-zoom-in"
            >
              <img
                src={photo.url}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-85 transition-opacity group-hover:opacity-90" />

              <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                <span className="rounded-md bg-white/20 px-2 py-0.5 font-mono text-[10px] font-medium backdrop-blur-xs">
                  {photo.category}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold">{photo.title}</h3>
                <p className="mt-0.5 text-xs text-white/80">{photo.caption}</p>
              </div>
            </button>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={() => onDeletePhoto(photo.id)}
                aria-label="Delete photo"
                title="Delete photo"
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-xs transition-colors hover:bg-rose-600 cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            <motion.button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setActivePhoto(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-default"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-w-4xl overflow-hidden rounded-3xl bg-[#101613] border border-white/10 text-white shadow-2xl"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  aria-label="Close"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs hover:bg-black cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="font-mono text-xs text-emerald-400">{activePhoto.category}</span>
                <h3 className="mt-1 font-display text-xl font-semibold">{activePhoto.title}</h3>
                <p className="mt-1 text-sm text-white/70">{activePhoto.caption}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Photo Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            <motion.button
              type="button"
              aria-label="Close modal"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] cursor-default"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-[#E2EBE6] bg-white p-6 sm:p-8 dark:border-[#1D2923] dark:bg-[#101613]"
            >
              <div className="flex items-center justify-between border-b border-[#E4ECE7] pb-4 dark:border-[#1D2923]">
                <h3
                  id="gallery-modal-title"
                  className="font-display text-lg font-semibold text-[#0E1813] dark:text-[#EFF4F1]"
                >
                  Add Photo to Gallery
                </h3>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#DAE4DE] bg-[#F7FAF8] text-[#0E1813] transition-colors hover:border-emerald-700/40 cursor-pointer dark:border-[#223029] dark:bg-[#0B100D] dark:text-[#EFF4F1]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="gal-title"
                    className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                  >
                    Photo Title
                  </label>
                  <input
                    id="gal-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Workspace Setup"
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="gal-cat"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Category
                    </label>
                    <input
                      id="gal-cat"
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Technology"
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gal-url"
                      className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                    >
                      Image URL (Unsplash or direct link)
                    </label>
                    <input
                      id="gal-url"
                      type="url"
                      required
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gal-caption"
                    className="block text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]"
                  >
                    Short Caption
                  </label>
                  <input
                    id="gal-caption"
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Briefly describe this moment..."
                    className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#DAE4DE] bg-white px-3.5 py-2 text-sm text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#223029] dark:bg-[#101613] dark:text-[#EFF4F1] dark:focus:border-emerald-400"
                  />
                </div>

                <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="min-h-[42px] rounded-xl px-4 py-2 text-xs font-medium text-[#52665C] transition-colors hover:text-[#0E1813] cursor-pointer dark:text-[#899E93] dark:hover:text-[#EFF4F1]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl bg-[#047857] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#065F46] cursor-pointer dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Save Photo</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
