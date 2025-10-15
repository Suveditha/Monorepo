'use client';

import * as React from 'react';
import Image from 'next/image';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { cn } from '@workspace/ui/lib/utils';

export default function HeroTabs(): React.JSX.Element {
  const labels = [
    '1. Upload',
    '2. Script',
    '3. Preview Video',
    '4. Edited Video'
  ];
  const [tabIndex, setTabIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [pill, setPill] = React.useState<{ left: number; width: number }>({
    left: 0,
    width: 0
  });

  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const AUTOPLAY_MS = 4000;

  const handleSelect = (index: number) => {
    setTabIndex(index);
    return false; // prevent scroll-to-top
  };

  // Measure tab position dynamically
  const updatePill = React.useCallback(() => {
    const root = headerRef.current;
    if (!root) return;

    const tabs = root.querySelectorAll<HTMLElement>('[role="tab"]');
    const el = tabs[tabIndex];
    if (!el) return;

    const parentRect = root.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    const left = rect.left - parentRect.left + root.scrollLeft;
    setPill({ left, width: rect.width });
  }, [tabIndex]);

  // Keep pill updated on resize or container scroll
  React.useEffect(() => {
    updatePill();

    const observer = new ResizeObserver(() => updatePill());
    const el = headerRef.current;
    if (el) observer.observe(el);

    const onScroll = () => updatePill();
    el?.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      el?.removeEventListener('scroll', onScroll);
    };
  }, [updatePill]);

  // Autoplay
  React.useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(
      () => setTabIndex((i) => (i + 1) % labels.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(t);
  }, [tabIndex, isPaused, labels.length]);

  return (
    <div
      className="w-full mx-auto mt-16 md:mt-24 max-w-6xl rounded-2xl shadow-sm border border-gray-100 bg-white p-4 sm:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Tabs
        selectedIndex={tabIndex}
        onSelect={handleSelect}
        focusTabOnClick={false}
      >
        {/* Tabs Header */}
        <div className="relative mb-6 sm:mb-8">
          <div
            ref={headerRef}
            className="relative bg-gray-100 rounded-xl overflow-x-auto scrollbar-hide flex flex-wrap md:flex-nowrap justify-start"
          >
            {/* Moving Background Pill */}
            <div
              className="absolute top-0 bottom-0 bg-videomule-green rounded-xl transition-all duration-500 ease-in-out"
              style={{
                width: `${pill.width}px`,
                transform: `translateX(${pill.left}px)`
              }}
            />

            <TabList className="relative z-10 flex w-max min-w-full text-center">
              {labels.map((label, i) => (
                <Tab
                  key={label}
                  className={cn(
                    'flex-1 px-4 py-2 sm:px-5 sm:py-2.5 text-sm md:text-base font-medium cursor-pointer whitespace-nowrap transition-all duration-300',
                    'focus:outline-none select-none relative z-10',
                    tabIndex === i
                      ? 'text-white'
                      : 'text-gray-700 hover:text-white hover:bg-videomule-green-hover'
                  )}
                >
                  {label}
                </Tab>
              ))}
            </TabList>
          </div>
        </div>

        {/* Panels */}
        {[
          '/assets/sample/homepage/upload.png',
          '/assets/sample/homepage/script.png',
          '/assets/sample/homepage/preview-video.png',
          '/assets/sample/homepage/edited-video.png'
        ].map((src, i) => (
          <TabPanel key={i}>
            <div className="flex justify-center">
              <Image
                src={src}
                alt={labels[i]}
                width={800}
                height={600}
                className="w-full h-auto max-w-4xl rounded-xl transition-opacity duration-700 ease-in-out"
                priority={i === 0}
              />
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
