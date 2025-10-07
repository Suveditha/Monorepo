import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@workspace/ui/components/buttonHome';

export default function Cta(): React.JSX.Element {
  return (
    <section className="pt-32 pb-20 bg-gradient-header relative">
      <Image
        src="/assets/sample/homepage/cta.avif"
        alt="CTA Image"
        width={162}
        height={100}
        className="absolute top-20 left-20 -rotate-15 md:block hidden dark:invert"
      />
      <Image
        src="/assets/sample/homepage/button.avif"
        alt="CTA Image"
        width={70}
        height={80}
        className="absolute bottom-22 right-28 md:block hidden dark:invert"
      />
      <Image
        src="/assets/sample/homepage/CTA-Swril-2.avif"
        alt="CTA Image"
        width={42}
        height={58}
        className="absolute bottom-22 left-24 md:block hidden dark:invert"
      />
      <Image
        src="/assets/sample/homepage/CTA-Swirl-1.avif"
        alt="CTA Image"
        width={48}
        height={48}
        className="absolute top-17 right-20 md:block hidden dark:invert"
      />
      <div className="max-w-7xl mx-auto px-4 text-center tracking-tight">
        <div className="animate-fade-in">
          <h1 className="font-bricolage text-5xl lg:text-7xl font-bold text-videomule-black mb-6 leading-none animate-fade-in delay-200">
            Ready to Create
            <br />
            <span className="bg-gradient-to-r from-videomule-green to-[#0DC46C] bg-clip-text text-transparent">
              Amazing Videos?
            </span>
          </h1>
          <p className="text-xl text-videomule-green-text mb-12 max-w-3xl mx-auto leading-[1.5em] animate-fade-in delay-300">
            Transform your screen recordings into professional videos with
            AI-powered voiceovers in just minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
            <Button
              size="xl"
              className="border-videomule-white group bg-videomule-black text-lg px-10 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Start for Free
              <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-videomule-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="w-2 h-2 text-videomule-black" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
