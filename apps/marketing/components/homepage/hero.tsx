import * as React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@workspace/ui/components/buttonHome';

import { Badge } from './components/badge';

//import Link from 'next/link';

export default function Hero(): React.JSX.Element {
  return (
    <section className="pt-32 pb-20 bg-gradient-header relative">
      <div className="max-w-7xl mx-auto px-4 text-center tracking-tight">
        <div className="animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-8 text-videomule-green bg-videomule-green/10 border-videomule-green/20 animate-scale-in"
          >
            New! AI Voiceover Tool
          </Badge>
          <h1 className="font-bricolage text-5xl lg:text-7xl font-bold text-videomule-black mb-6 leading-none animate-fade-in delay-200">
            Add voice to any
            <br />
            Screen Recording<span className="text-videomule-green">.</span>
          </h1>
          <p className="text-xl text-videomule-green-text mb-12 max-w-3xl mx-auto leading-[1.5em] animate-fade-in delay-300">
            Easily convert your screen recordings into engaging videos with AI
            voiceovers. Generate scripts, select realistic voices, and create
            ready-to-share content quickly and effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-500">
            <Button
              size="lg"
              className="text-lg px-8 py-4 hover-scale transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Start for Free
              <span className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-videomule-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="text-videomule-black h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        {/* Browser Mockup with Dashboard */}
        <div className="relative animate-fade-in delay-700 max-w-5xl mx-auto">
          <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200 shadow-elegant hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-videomule-green rounded-full animate-pulse delay-200"></div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-videomule-gray ml-4">
                app.videomule.com
              </div>
            </div>
            <Image
              src="/assets/sample/homepage/hero-dashboard.png"
              width={990}
              height={616}
              alt="VideoMule Dashboard"
              className="w-full rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-2xl"></div>
        </div>
      </div>
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
