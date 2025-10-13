import * as React from 'react';
import Image from 'next/image';
import { Download, Edit, Headphones, Mic } from 'lucide-react';

import { Button } from '@workspace/ui/components/buttonHome';
import { cn } from '@workspace/ui/lib/utils';

import { Badge } from './components/badge';

export default function Feature(): React.JSX.Element {
  const feature = [
    {
      logo: Edit,
      image: '/assets/sample/feature-edit-script.jpg',
      color: 'bg-blue-100 text-blue-600',
      heading: 'Edit As You Wish',
      description:
        'Full control over your voiceover scripts. Edit, customize, and perfect every word to match your exact vision and style.',
      pillColor: 'bg-blue-100 text-blue-700',
      pillHover: 'hover:bg-blue-200',
      pill: ['Real-time Editing', 'Custom Scripts', 'Live Preview']
    },
    {
      logo: Download,
      image: '/assets/sample/feature-instant-export.avif',
      color: 'bg-videomule-green/10 text-videomule-green',
      heading: 'Export Instantly',
      description:
        'Get your professional videos ready in seconds. Lightning-fast rendering with multiple format options for immediate use.',
      pillColor: 'bg-videomule-green/10 text-videomule-green',
      pillHover: 'bg-videomule-green/20',
      pill: ['Instant Processing', 'Multiple Formats', 'HD Quality']
    },
    {
      logo: Headphones,
      image: '/assets/sample/feature-voice-library.jpg',
      color: 'bg-purple-100 text-purple-600',
      heading: 'Choose from 100s of Voices',
      description:
        'Select from our vast library of premium AI voices in multiple languages, accents, and styles to find the perfect match for your content.',
      pillColor: 'bg-purple-100 text-purple-700',
      pillHover: 'hover:bg-purple-200',
      pill: ['100+ Voices', 'Multiple Languages', 'Voice Preview']
    },
    {
      logo: Mic,
      image: '/assets/sample/feature-custom-voice.jpg',
      color: 'bg-orange-100 text-orange-600',
      heading: 'Add Your Own Voice',
      description:
        'Upload and use your own voice recordings for a truly personalized touch. Perfect for maintaining brand consistency and personal connection.',
      pillColor: 'bg-orange-100 text-orange-700',
      pillHover: 'hover:bg-orange-200',
      pill: ['Custom Upload', 'Voive Cloning', 'Personal Brand']
    }
  ];
  return (
    <section
      className="py-28 bg-videomule-white relative"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-15">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            Key Features
          </Badge>
          <h2 className="max-w-3xl mx-auto font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-videomule-gray max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your screen recordings into
            professional videos with AI voiceovers
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12.5 mb-15">
          {feature.map((feature) => (
            <div
              className="group cursor-pointer"
              key={feature.heading}
            >
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={feature.image}
                    width={800}
                    height={600}
                    alt={feature.heading}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-5">
                    <div
                      className={cn(
                        feature.color,
                        'w-12 h-12 rounded-2xl flex items-center justify-center mr-4'
                      )}
                    >
                      <feature.logo className="w-6 h-6" />
                    </div>
                    <h3 className="font-bricolage text-3xl font-bold text-videomule-black">
                      {feature.heading}
                    </h3>
                  </div>
                  <p className="text-videomule-gray max-w-[511px] text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.pill.map((pill) => (
                      <span
                        key={pill}
                        className={cn(
                          feature.pillColor,
                          feature.pillHover,
                          'px-3 py-1 rounded-full text-sm font-medium'
                        )}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-10 py-3 hover-scale transition-all duration-300 hover:shadow-lg"
          >
            Try All Features
          </Button>
        </div>
      </div>
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
