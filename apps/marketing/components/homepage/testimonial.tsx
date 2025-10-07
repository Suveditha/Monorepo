'use client';

import * as React from 'react';
import { ChevronRight, Star } from 'lucide-react';

import { Badge } from './components/badge';

export default function Testimonial(): React.JSX.Element {
  const testimonials = [
    {
      name: 'Sarah C., Content Creator',
      role: 'Recent graduate, Marketing at VideoMule',
      img: '/assets/sample/homepage/Sarah.avif',
      rating: 5,
      quote:
        'VideoMule is the best solution for anyone looking to take control of their video content. Its analysis is detailed, features are comprehensive, and the interface is incredibly user-friendly!'
    },
    {
      name: 'Mike J., Business Owner',
      role: 'Entrepreneur, Marketing at VideoMule',
      img: '/assets/sample/homepage/Mike.avif',
      rating: 5,
      quote:
        'VideoMule has helped me create professional content more efficiently. The AI voice generation and accurate script creation make video production much easier. Highly recommended!'
    },
    {
      name: 'Anna R., Freelancer',
      role: 'Independent Video Editor at VideoMule',
      img: '/assets/sample/homepage/Anna.avif',
      rating: 5,
      quote:
        'Voice quality and ease of access are my top priorities, and VideoMule delivers both. Now I can create professional video content with peace of mind.'
    },
    {
      name: 'David P., YouTuber',
      role: 'Content Creator at DP Studio',
      img: '/assets/sample/homepage/Mike.avif',
      rating: 5,
      quote:
        'I have tried many tools, but VideoMule is simply the best for turning my recordings into professional-quality videos effortlessly.'
    },
    {
      name: 'Lisa M., Educator',
      role: 'Online Course Creator',
      img: '/assets/sample/homepage/Sarah.avif',
      rating: 5,
      quote:
        'As an educator, VideoMule has saved me hours of work each week. The voiceovers sound natural and professional.'
    }
  ];

  const [current, setCurrent] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(3);

  // responsive breakpoints
  React.useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) setSlidesPerView(1);
      else if (window.innerWidth < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const totalSlides = testimonials.length;

  // handle next and prev with wrap logic
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // get visible slides including wrapped items
  const getVisibleSlides = () => {
    const slides: typeof testimonials = [];
    for (let i = 0; i < slidesPerView; i++) {
      slides.push(testimonials[(current + i) % totalSlides]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section className="py-24 bg-videomule-gray/5 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute top-12 left-12 text-videomule-black/10">
        <Star
          size={32}
          className="animate-pulse"
        />
      </div>
      <div className="absolute top-20 right-16 text-videomule-black/10">
        <Star
          size={24}
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="absolute bottom-20 right-16 text-videomule-black/10">
        <Star
          size={24}
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>
      <div className="absolute bottom-12 left-12 text-videomule-black/10">
        <Star
          size={32}
          className="animate-pulse"
        />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            Testimonials
          </Badge>
          <h2 className="max-w-3xl mx-auto font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-6">
            Trusted By 10,000+ World Class Creators
          </h2>
          <p className="text-lg text-videomule-gray max-w-[800px] mx-auto leading-relaxed">
            Hear what our creators have to say about how VideoMule transformed
            their video workflow.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
            {visibleSlides.map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="border border-transparent hover:border-videomule-green bg-videomule-white rounded-3xl p-8 shadow-card hover:shadow-glow transform hover:scale-105 transition-all duration-500 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center mb-8">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-videomule-black text-lg mb-1">
                      — {t.name}
                    </h4>
                    <p className="text-sm text-videomule-gray">{t.role}</p>
                  </div>
                </div>

                <p className="text-videomule-gray leading-relaxed text-center group-hover:text-videomule-black transition-colors duration-300">
                  “{t.quote}”
                </p>

                {/* Stars */}
                <div className="flex items-center justify-center text-orange-400 mt-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                  <span className="ml-2 text-videomule-black font-semibold">
                    {t.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-videomule-black transition-colors group"
            >
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-videomule-black rotate-180" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-videomule-green scale-110'
                      : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-videomule-black flex items-center justify-center hover:bg-videomule-black/80 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-videomule-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
