import * as React from 'react';
import { Check, Mic, Monitor, X } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

import { Badge } from './components/badge';

export default function Difference(): React.JSX.Element {
  const video = [
    {
      state: 'Before VideoMule',
      color: 'bg-red-50 text-red-600',
      videoCode: (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 flex items-center border-b">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-gray-600">
                Silent Screen Recording
              </span>
            </div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
            <div className="text-gray-500 text-center">
              <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Silent Video</p>
              <p className="text-sm">No narration • Hard to follow</p>
            </div>
            {/* Muted Icon */}
            <div className="absolute top-4 right-4 bg-red-500 rounded-full p-2">
              <X className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      ),
      checkMark: X,
      points: [
        {
          heading: 'Low Engagement',
          description: 'Viewers lose interest without audio guidance'
        },
        {
          heading: 'Confusing Content',
          description: 'Hard to understand complex processes'
        },
        {
          heading: 'Time Consuming',
          description: 'Expensive voice talent and studio time'
        }
      ]
    },
    {
      state: 'After VideoMule',
      color: 'bg-videomule-green/10 text-videomule-green',
      videoCode: (
        <div className="bg-white rounded-2xl shadow-xl border border-videomule-green/20 overflow-hidden">
          <div className="bg-videomule-green/5 px-4 py-3 flex items-center border-b border-videomule-green/20">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-videomule-green rounded-full"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-videomule-green font-medium">
                Professional AI Voiceover
              </span>
            </div>
          </div>
          <div className="aspect-video bg-gradient-to-br from-videomule-green/10 to-blue-50 flex items-center justify-center relative">
            <div className="text-videomule-black text-center">
              <Mic className="w-16 h-16 mx-auto mb-4 text-videomule-green" />
              <p className="text-lg font-medium">Engaging Video</p>
              <p className="text-sm text-videomule-gray">
                AI narration • Easy to follow
              </p>
            </div>
            {/* Sound Waves Animation */}
            <div className="absolute top-4 right-4 bg-videomule-green rounded-full p-2">
              <div className="flex items-center space-x-1">
                <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-4 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className="w-1 h-3 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div
                  className="w-1 h-5 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: '0.3s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ),
      checkMark: Check,
      points: [
        {
          heading: '3x Higher Engagement',
          description: 'Professional narration keeps viewers watching'
        },
        {
          heading: 'Crystal Clear Explanation',
          description: 'AI script perfectly explains every step'
        },
        {
          heading: 'Ready in Minutes',
          description: 'Fast AI processing, instant results'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-header relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-videomule-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            See the Difference
          </Badge>
          <h2 className="font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-6">
            Before vs After VideoMule
          </h2>
          <p className="text-xl text-videomule-green-text max-w-3xl mx-auto leading-relaxed">
            Transform your silent screen recordings into professional, engaging
            content that captivates your audience
          </p>
        </div>
        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {video.map((video) => (
            //Video state
            <div
              className="space-y-8 p-9 rounded-2xl bg-videomule-white"
              key={video.state}
            >
              <div className="text-center">
                <div
                  className={cn(
                    video.color,
                    'inline-flex items-center rounded-full px-6 py-3'
                  )}
                >
                  <video.checkMark className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{video.state}</span>
                </div>
              </div>
              {video.videoCode}
              <div className="space-y-4">
                {video.points.map((point) => (
                  <div
                    className="flex items-start"
                    key={point.heading}
                  >
                    <div
                      className={cn(
                        video.color,
                        'w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1'
                      )}
                    >
                      <video.checkMark className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-videomule-black mb-1">
                        {point.heading}
                      </h4>
                      <p className="text-videomule-gray text-base">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
