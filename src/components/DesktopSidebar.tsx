import { SlidersHorizontal } from 'lucide-react';
import { TABS } from './Navbar';
import { PWAInstallButton } from './PWAInstallButton';

interface DesktopSidebarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenCustomize: () => void;
}

export function DesktopSidebar({
  activeTab,
  onSelectTab,
  onOpenCustomize,
}: DesktopSidebarProps) {
  return (
    <aside
      aria-label="Desktop section navigation"
      className="hidden lg:sticky lg:top-[82px] lg:flex lg:w-60 lg:shrink-0 lg:flex-col lg:self-start xl:w-64"
    >
      <div className="rounded-3xl border-2 border-[#D8E6DE] bg-white p-4 shadow-lg transition-colors duration-300 dark:border-[#24382E] dark:bg-[#0D1411]">
        <div className="border-b border-[#E4ECE7] px-2 pb-2.5 dark:border-[#24382E]">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#647A6F] dark:text-[#7E9288]">
            Sections
          </span>
        </div>

        <nav className="mt-2.5 space-y-1">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#047857] text-white shadow-xs dark:bg-emerald-600'
                    : 'text-[#384A41] hover:bg-emerald-50 hover:text-emerald-800 dark:text-[#A4B8AE] dark:hover:bg-[#18261F] dark:hover:text-emerald-300'
                }`}
              >
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-3 space-y-1 border-t border-[#E4ECE7] pt-3 dark:border-[#24382E]">
          <button
            type="button"
            onClick={onOpenCustomize}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-bold text-[#384A41] transition-colors hover:bg-emerald-50 hover:text-emerald-800 cursor-pointer dark:text-[#A4B8AE] dark:hover:bg-[#18261F] dark:hover:text-emerald-300"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
            <span>Customize Profile</span>
          </button>

          <PWAInstallButton variant="menu" />
        </div>
      </div>
    </aside>
  );
}
