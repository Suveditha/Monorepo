'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

import { Badge } from './components/badge';
import { Card, CardContent } from './components/card';

export default function UseCases(): React.JSX.Element {
  const useCase = [
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Silent Screen Recordings → Narrated Tutorials',
      description:
        'Convert raw screen captures into full tutorial videos with auto-generated script.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Meetings Without Audio → Shareable Recaps',
      description:
        'Turn mute Zoom or Teams recordings into narrated highlight videos for your team.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Product Demos → Professional Walkthroughs',
      description:
        'Showcase your app or product flow with a polished voiceover walkthrough.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Training & SOP Videos → Engaging Lessons',
      description:
        'Create narrated training videos from dry step-by-step processes.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Event Highlights → Social Media Clips',
      description:
        'Add narration to event footage or highlight reels for LinkedIn, Twitter, or Instagram.'
    },
    {
      image: '/assets/sample/homepage/use-case-image.png',
      video: '/assets/sample/homepage/video.mp4',
      heading: 'Investor Pitches → Polished Demo Videos',
      description:
        'Convert founder screen recordings into sleek pitch videos with narration.'
    }
  ];
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-15 animate-fade-in">
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
            that engage your audience
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Use Case 1 */}
          {useCase.map((useCase, i) => {
            const [withAudio, setWithAudio] = React.useState(false);
            const videoRef = React.useRef<HTMLVideoElement | null>(null);

            const handlePlayClick = () => {
              setWithAudio(true);
              if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.controls = true;
                videoRef.current.play();
              }
            };

            return (
              <Card
                key={i}
                className="group bg-videomule-white hover:shadow-[0_5px_20px_0_#66B60C26] transition-all duration-300 border border-videomule-gray/20 hover:border-videomule-green"
              >
                <CardContent className="p-7">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 relative overflow-hidden">
                    {/* Image (visible when not hovered) */}
                    <Image
                      className="w-full h-full object-cover group-hover:hidden"
                      src={useCase.image}
                      alt={useCase.heading}
                      width={324}
                      height={216}
                    />

                    {/* Video (shows on hover) */}
                    <video
                      ref={videoRef}
                      src={useCase.video}
                      className="w-full h-full object-cover hidden group-hover:block"
                      autoPlay
                      loop
                      muted={!withAudio}
                      playsInline
                    />

                    {/* Play Button Overlay (only visible on hover, before click) */}
                    <button
                      onClick={handlePlayClick}
                      className="absolute w-16 h-16 bg-videomule-white rounded-full hidden group-hover:flex items-center justify-center mx-auto cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Play className="w-8 h-8 text-videomule-green" />
                    </button>
                  </div>

                  <h3 className="font-bricolage text-2xl font-bold text-videomule-black mb-3 group-hover:text-videomule-green transition-colors">
                    {useCase.heading}
                  </h3>
                  <p className="text-videomule-gray leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
