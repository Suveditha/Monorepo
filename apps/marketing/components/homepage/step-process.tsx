import * as React from 'react';
import Image from 'next/image';
import {
  Check,
  Download,
  Edit,
  FileText,
  Mic,
  Play,
  Upload,
  Video
} from 'lucide-react';

import { Button } from '@workspace/ui/components/buttonHome';
import { cn } from '@workspace/ui/lib/utils';

import { Badge } from './components/badge';

export default function StepProcess(): React.JSX.Element {
  const step = [
    {
      number: 1,
      logo: Upload,
      color: 'bg-videomule-green',
      heading: 'Upload Your Video',
      description:
        'Simply drag and drop your screen recording into VideoMule. We support all major video formats and process them instantly in the cloud.',
      point: [
        'Supports MP4, MOV, AVI, WMV formats',
        'Instant cloud processing',
        'Secure file handling'
      ],
      browserheading: 'videomule.com/upload',
      htmlCode: (
        <div className="p-8">
          {/* Upload Area */}
          <div
            className="
    border-2 border-dashed border-videomule-green 
    rounded-xl p-12 text-center 
    bg-videomule-light-green 
    transition-colors cursor-pointer
  "
          >
            <Upload className="w-12 h-12 text-videomule-green mx-auto mb-4" />
            <h4 className="font-semibold text-videomule-black dark:text-white mb-2">
              Drop your video here
            </h4>
            <p className="text-videomule-gray dark:text-gray-400 text-sm mb-4">
              or click to browse files
            </p>
            <Button
              variant="outline"
              size="sm"
            >
              Select File
            </Button>
          </div>

          {/* Recent Uploads */}
          <div className="mt-6">
            <h5 className="font-semibold text-videomule-black dark:text-white mb-3">
              Recent uploads
            </h5>
            <div className="space-y-2">
              {['tutorial-demo.mp4', 'product-walkthrough.mov'].map(
                (name, i) => (
                  <div
                    key={i}
                    className="
            flex items-center p-2 
            bg-gray-50 dark:bg-gray-800 
            rounded-lg transition-colors
          "
                  >
                    <Video className="w-4 h-4 text-videomule-green mr-3" />
                    <span className="text-sm text-videomule-black dark:text-white flex-1">
                      {name}
                    </span>
                    <span className="text-xs text-videomule-gray dark:text-gray-400">
                      2 min ago
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )
    },
    {
      number: 2,
      order: 'lg:order-1',
      logo: FileText,
      color: 'bg-videomule-green',
      heading: 'Get a perfect script',
      description:
        'Our advanced AI analyzes your video content and creates a natural, professional script that matches your recording perfectly.',
      point: [
        'Smart content analysis',
        'Natural language generation',
        'Fully editable output'
      ],
      browserheading: 'videomule.com/script',
      htmlCode: (
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-videomule-black dark:text-white">
              Generated Script
            </h4>
            <div className="flex items-center text-sm text-videomule-green">
              <div className="w-2 h-2 bg-videomule-green rounded-full mr-2 animate-pulse"></div>
              AI Writing...
            </div>
          </div>

          {/* Script Box */}
          <div className="bg-gray-50 dark:bg-videomule-gray/20 rounded-xl p-6 mb-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-videomule-black dark:text-gray-200 mb-3">
                Welcome to this VideoMule tutorial! Today, I'll show you how to
                transform your screen recordings into professional videos with
                AI-powered voiceovers.
              </p>
              <p className="text-videomule-gray dark:text-gray-400 mb-3">
                First, let's explore the dashboard where you can manage all your
                projects. As you can see, the interface is clean and
                intuitive...
                <span className="inline-block w-2 h-4 bg-videomule-green ml-1 animate-pulse"></span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="flex-1 border border-videomule-gray text-videomule-gray dark:border-gray-600 dark:text-gray-300"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Script
            </Button>
            <Button
              variant="outline"
              className="flex-1 rounded-full dark:bg-videomule-green dark:text-white dark:hover:bg-green-500"
            >
              Continue
            </Button>
          </div>
        </div>
      )
    },
    {
      number: 3,
      logo: Mic,
      color: 'bg-videomule-green',
      heading: 'Choose Your Voice',
      description:
        'Select from over 100 professional AI voices in multiple languages and accents. Preview each voice to find the perfect match for your content.',
      point: [
        '100+ professional voices',
        'Multiple languages & accents',
        'Real-time voice preview'
      ],
      browserheading: 'videomule.com/voices',
      htmlCode: (
        <div className="p-8">
          <h4 className="font-semibold text-videomule-black dark:text-white mb-6">
            Voice Library
          </h4>

          <div className="space-y-3 mb-6">
            {[
              {
                name: 'Sarah',
                type: 'Professional',
                accent: 'US English',
                active: true
              },
              {
                name: 'David',
                type: 'Conversational',
                accent: 'UK English',
                active: false
              },
              {
                name: 'Emma',
                type: 'Friendly',
                accent: 'Australian',
                active: false
              }
            ].map((voice, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all 
          ${
            voice.active
              ? 'bg-videomule-light-green border-videomule-green'
              : 'bg-gray-50 border-gray-200 hover:border-videomule-green dark:bg-gray-800 dark:border-gray-700 dark:hover:border-orange-400/40'
          }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-4 
              ${
                voice.active
                  ? 'bg-videomule-green'
                  : 'bg-gray-400 dark:bg-gray-600'
              }`}
                  >
                    {voice.name[0]}
                  </div>

                  <div>
                    <h5 className="font-semibold text-videomule-black dark:text-white">
                      {voice.name}
                    </h5>
                    <p className="text-sm text-videomule-gray dark:text-gray-400">
                      {voice.type} • {voice.accent}
                    </p>
                  </div>
                </div>

                <Play
                  className={`w-5 h-5 ${
                    voice.active
                      ? 'text-videomule-green'
                      : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Audio Waveform */}
          <div className="bg-videomule-light-green rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-videomule-black dark:text-white">
                Preview: Sarah
              </span>
              <span className="text-sm text-videomule-green">0:08 / 0:15</span>
            </div>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-videomule-green rounded-sm"
                  style={{
                    width: '2px',
                    height: `${8 + Math.random() * 16}px`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      number: 4,
      order: 'lg:order-1',
      logo: Download,
      color: 'bg-videomule-green',
      heading: 'Get Edited Video (with voice)',
      description:
        'Your AI voiceover is automatically synced with your video. Preview the final result and export in HD quality ready to share anywhere.',
      point: [
        'Perfect AI synchronization',
        'HD quality export',
        'Multiple format options'
      ],
      browserheading: 'videomule.com/export',
      htmlCode: (
        <div className="p-8">
          <h4 className="font-semibold text-videomule-black mb-6">
            Ready to Export
          </h4>

          {/* Video Preview */}
          <div className="bg-gray-900 dark:bg-videomule-gray/20 rounded-xl p-4 mb-6">
            <div className="aspect-video bg-gray-800 dark:bg-videomule-gray/40 rounded-lg flex items-center justify-center relative">
              <Image
                className="aspect-video absolute rounded-lg object-cover"
                src="/assets/sample/homepage/videoBG.avif"
                alt="Get final Edited video with VoiceOver Synced to Visuals"
                width={504}
                height={236}
              />

              {/* Play button */}
              <Play className="z-[1] w-12 h-12 p-3 bg-white text-videomule-green rounded-4xl" />

              {/* Tag */}
              <div className="z-[1] absolute bottom-2 left-2 bg-videomule-green text-white text-xs px-2 py-1 rounded">
                With AI Voice
              </div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-white dark:text-gray-300 text-sm">
                tutorial-final.mp4
              </span>
              <span className="text-white dark:text-gray-300 text-sm">
                2:45
              </span>
            </div>
          </div>

          {/* Export Options */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-videomule-gray/20 rounded-lg">
              <span className="text-videomule-black font-medium">Quality</span>
              <span className="text-videomule-gray dark:text-gray-300">
                1080p HD
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-videomule-gray/20 rounded-lg">
              <span className="text-videomule-black font-medium">Format</span>
              <span className="text-videomule-gray dark:text-gray-300">
                MP4
              </span>
            </div>
          </div>

          <Button className="w-full bg-videomule-green hover:bg-videomule-green/90 dark:bg-videomule-green/80 dark:hover:bg-videomule-green rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Export Video
          </Button>
        </div>
      )
    }
  ];
  return (
    <section
      className="py-28 bg-background relative"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-15 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20 animate-scale-in"
          >
            Simple 4-Step Process
          </Badge>
          <h2 className="max-w-3xl mx-auto font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-4 animate-fade-in delay-200">
            How VideoMule Works
          </h2>
          <p className="text-lg text-videomule-green-text max-w-3xl mx-auto leading-relaxed tracking-[-0.01em] animate-fade-in delay-300">
            Turn your silent screen recordings into engaging videos with
            professional AI voiceovers in minutes
          </p>
        </div>
        <div className="space-y-20">
          {step.map((step, i) => (
            <div
              key={step.number}
              className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in"
            >
              <div
                className={cn(
                  'animate-fade-in order-1 max-w-[500px]', // always first by default
                  i % 2 === 1 && 'lg:order-2' // swap on desktop if odd
                )}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={cn(
                      step.color,
                      'w-12 h-12 p-3 rounded-xl flex items-center justify-center text-white mr-4'
                    )}
                  >
                    <step.logo className="w-6 h-6" />
                  </div>
                  <h3 className="font-bricolage text-3xl font-bold text-videomule-black">
                    {step.heading}
                  </h3>
                </div>
                <p className="text-videomule-gray text-lg mb-8 tracking-[-0.02em] leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-3">
                  {step.point.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center animate-fade-in"
                      style={{ animationDelay: '0.4s' }}
                    >
                      <Check className="w-5 h-5 text-videomule-green mr-3" />
                      <span className="text-videomule-gray">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={cn(
                  'bg-videomule-white rounded-2xl border border-white/50 shadow-xl overflow-hidden order-2', // always second by default
                  i % 2 === 1 && 'lg:order-1' // swap on desktop if odd
                )}
              >
                <div className="bg-videomule-gray/10 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-videomule-green rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-videomule-white rounded px-3 py-1 text-sm text-videomule-gray inline-block">
                      {step.browserheading}
                    </div>
                  </div>
                </div>
                {step.htmlCode}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
