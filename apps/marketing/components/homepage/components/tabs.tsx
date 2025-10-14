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
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const AUTOPLAY_MS = 4000;

  // Clear existing timer
  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  // Autoplay tabs
  React.useEffect(() => {
    clearTimer();
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setTabIndex((i) => (i + 1) % labels.length);
      }, AUTOPLAY_MS);
    }
    return clearTimer;
  }, [tabIndex, isPaused]);

  return (
    <div
      className="w-full mx-auto mt-16 md:mt-24 max-w-6xl rounded-2xl shadow-sm border border-gray-100 bg-white p-4 sm:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        {/* Tab Header */}
        <div className="relative mb-6 sm:mb-8 overflow-hidden">
          {/* Animated background pill */}
          <div
            className="absolute top-0 left-0 h-10 sm:h-11 rounded-xl bg-videomule-green transition-all duration-500 ease-in-out z-0"
            style={{
              width: `calc(25% - 0.5rem)`,
              transform: `translateX(calc(${tabIndex * 100}% + ${tabIndex * 0.5}rem))`
            }}
          ></div>

          <TabList
            className="
              relative z-10 flex flex-wrap md:flex-nowrap justify-between gap-2 sm:gap-3
              border-b border-gray-200 pb-2
            "
          >
            {labels.map((label, i) => (
              <Tab
                key={label}
                className={cn(
                  'flex-1 text-center cursor-pointer px-3 sm:px-5 py-2 sm:py-2.5 text-sm md:text-base font-medium rounded-xl transition-all duration-300 whitespace-nowrap relative z-10',
                  tabIndex === i
                    ? 'text-white'
                    : 'text-gray-700 bg-gray-100 hover:bg-videomule-green-hover hover:text-white'
                )}
              >
                {label}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab Panels */}
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
