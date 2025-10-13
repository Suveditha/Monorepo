'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import { Badge } from './components/badge';
import { Card, CardContent } from './components/card';

type UseCaseType = {
  image: string;
  video: string;
  heading: string;
  description: string;
};

function UseCaseCard({ useCase }: { useCase: UseCaseType }) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // ▶️ Handle play button click
  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = false;
      video.controls = true;
      await video.play();
      setIsPlaying(true);
    } catch (err) {
      console.error('Play failed:', err);
    }
  };

  // ⏸ Handle pause (from controls)
  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.controls = false;
      setIsPlaying(false);
    }
  };

  // 🎬 Handle video end
  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.controls = false;
    video.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <Card className="group bg-videomule-white hover:shadow-[0_5px_20px_0_#66B60C26] transition-all duration-300 border border-videomule-gray/20 hover:border-videomule-green">
      <CardContent className="p-7">
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 relative overflow-hidden">
          {/* 🖼️ Show image when not playing */}
          {!isPlaying && (
            <Image
              className="w-full h-full object-cover"
              src={useCase.image}
              alt={useCase.heading}
              width={324}
              height={216}
            />
          )}

          {/* 🎥 Video */}
          <video
            ref={videoRef}
            src={useCase.video}
            className={`w-full h-full object-cover ${isPlaying ? 'block' : 'hidden'}`}
            playsInline
            preload="metadata"
            onPause={handlePause}
            onEnded={handleEnded}
          />

          {/* ▶️ Custom play button */}
          {!isPlaying && (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity"
            >
              <span className="w-16 h-16 bg-videomule-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-md">
                <Play className="w-8 h-8 text-videomule-green" />
              </span>
            </button>
          )}
        </div>

        {/* 🧠 Text content */}
        <h3 className="font-bricolage text-2xl font-bold text-videomule-black mb-3 group-hover:text-videomule-green transition-colors">
          {useCase.heading}
        </h3>
        <p className="text-videomule-gray leading-relaxed">
          {useCase.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function UseCases(): React.JSX.Element {
  const useCases: UseCaseType[] = [
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Narrated Tutorials Videos',
      description:
        'Convert raw screen captures into full tutorial videos with auto-generated script.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Training & SOP Videos',
      description:
        'Create narrated training videos from dry step-by-step processes.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Product Demo Videos',
      description:
        'Convert founder screen recordings into sleek pitch videos with narration.'
    }
  ];

  return (
    <section
      className="py-28 relative"
      id="use-cases"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            Use Cases
          </Badge>
          <h2 className="font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-4">
            Perfect For Every Creator
          </h2>
          <p className="text-xl text-videomule-gray max-w-3xl mx-auto leading-relaxed">
            Transform any type of content into professional, narrated videos
            that engage your audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, i) => (
            <UseCaseCard
              key={i}
              useCase={uc}
            />
          ))}
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
