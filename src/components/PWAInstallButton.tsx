import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Smartphone, X } from 'lucide-react';
import { useOnlineStatus, usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'menu';
  onAfterClick?: () => void;
}

export function PWAInstallButton({ variant = 'header', onAfterClick }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
      onAfterClick?.();
      return;
    }
    setShowGuide(true);
  };

  if (variant === 'header' && !isInstallable && !isIOS) {
    return null;
  }

  return (
    <>
      {variant === 'header' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          aria-label="Install App"
          title="Install App"
          className="hidden h-9 items-center gap-1.5 rounded-xl border-2 border-[#D8E6DE] bg-white px-2.5 text-xs font-bold text-[#047857] shadow-xs transition-colors hover:border-emerald-700/50 cursor-pointer sm:inline-flex dark:border-[#24382E] dark:bg-[#121B16] dark:text-emerald-400"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Install</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleInstallClick}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-bold text-emerald-800 transition-colors hover:bg-emerald-50 cursor-pointer dark:text-emerald-300 dark:hover:bg-[#18261F]"
        >
          <span className="inline-flex items-center gap-2">
            <Download className="h-3.5 w-3.5" />
            <span>{isInstallable ? 'Install App' : 'Add to Home Screen'}</span>
          </span>
        </button>
      )}

      {showGuide &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pwa-guide-title"
          >
            <div className="w-full max-w-sm rounded-2xl border-2 border-[#D8E6DE] bg-white p-5 shadow-2xl dark:border-[#24382E] dark:bg-[#0D1411]">
              <div className="flex items-center justify-between border-b border-[#E4ECE7] pb-3 dark:border-[#24382E]">
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  <h3
                    id="pwa-guide-title"
                    className="font-display text-base font-bold text-[#0E1813] dark:text-white"
                  >
                    {isIOS ? 'Install on iPhone / iPad' : 'Install as Android App'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowGuide(false);
                    onAfterClick?.();
                  }}
                  aria-label="Close install instructions"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#D8E6DE] text-[#384A41] hover:border-emerald-700/50 cursor-pointer dark:border-[#24382E] dark:text-[#A4B8AE]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {isIOS ? (
                <ol className="mt-3 space-y-2 text-xs font-medium leading-relaxed text-[#384A41] dark:text-[#B4C7BD]">
                  <li>
                    1. Tap the <strong className="text-[#0E1813] dark:text-white">Share</strong>{' '}
                    button in Safari&apos;s toolbar.
                  </li>
                  <li>
                    2. Scroll down and tap{' '}
                    <strong className="text-[#0E1813] dark:text-white">Add to Home Screen</strong>.
                  </li>
                  <li>
                    3. Tap <strong className="text-[#0E1813] dark:text-white">Add</strong> to launch
                    it like a standalone app.
                  </li>
                </ol>
              ) : (
                <ol className="mt-3 space-y-2 text-xs font-medium leading-relaxed text-[#384A41] dark:text-[#B4C7BD]">
                  <li>
                    1. Open Chrome&apos;s{' '}
                    <strong className="text-[#0E1813] dark:text-white">⋮</strong> menu in the
                    top-right corner.
                  </li>
                  <li>
                    2. Tap{' '}
                    <strong className="text-[#0E1813] dark:text-white">Add to home screen</strong>{' '}
                    or <strong className="text-[#0E1813] dark:text-white">Install app</strong>.
                  </li>
                  <li>
                    3. Confirm <strong className="text-[#0E1813] dark:text-white">Install</strong>{' '}
                    to get the home screen icon and app shortcuts.
                  </li>
                </ol>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowGuide(false);
                  onAfterClick?.();
                }}
                className="mt-4 w-full rounded-xl bg-[#047857] py-2 text-xs font-bold text-white transition-colors hover:bg-[#065F46] cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-[calc(3.75rem+env(safe-area-inset-bottom))] left-4 z-40 flex items-center gap-2 rounded-xl border border-amber-400/50 bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
      <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
      <span>Offline Mode — Cached view active</span>
    </div>
  );
}
