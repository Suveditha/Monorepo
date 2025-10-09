import * as React from 'react';
import { DollarSign, Shield, Star, Users } from 'lucide-react';

import { cn } from '@workspace/ui/lib/utils';

import { Badge } from './components/badge';
import { Card } from './components/card';

export default function WhyChoose(): React.JSX.Element {
  const card = [
    {
      icon: Users,
      iconColor: '#1D4ED8',
      cardBgColor:
        '[background:linear-gradient(135deg,rgba(219,234,254,0.3)_0%,rgba(239,246,255,0.3)_100%)]',
      cardDarkBgColor:
        '[background:linear-gradient(135deg, rgba(30,58,138,0.35) 0%, rgba(37,99,235,0.35) 100%)]',
      border: 'border-[#DBEAFE]',
      darkBorder: 'border-[#1E3A8A]',
      heading: 'Experienced Professionals',
      description:
        'Created by experts in AI and video editing to help you make stunning, professional-quality videos easily.'
    },
    {
      icon: Star,
      iconColor: '#EA580C',
      cardBgColor:
        '[background:linear-gradient(135deg,rgba(255,237,213,0.3)_0%,rgba(254,215,170,0.3)_100%)]',
      cardDarkBgColor:
        '[background:linear-gradient(135deg, rgba(154,52,18,0.4) 0%, rgba(234,88,12,0.4) 100%)]',
      border: 'border-[#FED7AA]',
      darkBorder: 'border-[#7C2D12]',
      heading: 'Satisfaction Guarantee',
      description:
        'We are committed to delivering excellent results so every video you create feels polished, natural, and engaging.'
    },
    {
      icon: DollarSign,
      iconColor: '#7E22CE',
      cardBgColor:
        '[background:linear-gradient(135deg,rgba(242,239,255,0.3)_0%,rgba(224,216,255,0.3)_100%)]',
      cardDarkBgColor:
        '[background:linear-gradient(135deg, rgba(79,70,229,0.35) 0%, rgba(147,51,234,0.35) 100%)]',
      border: 'border-[#E9E4FF]',
      darkBorder: 'border-[#4C1D95]',
      heading: 'Affordable Prices',
      description:
        'Enjoy cost-effective AI video and voiceover creation that delivers studio-level quality without expensive production costs.'
    },
    {
      icon: Shield,
      iconColor: '#0B7F58',
      cardBgColor:
        '[background:linear-gradient(135deg,rgba(220,252,231,0.3)_0%,rgba(187,247,208,0.3)_100%)]',
      cardDarkBgColor:
        '[background: linear-gradient(135deg, rgba(22,101,52,0.4) 0%, rgba(34,197,94,0.4) 100%)]',
      border: 'border-[#BBF7D0]',
      darkBorder: 'border-[#14532D]',
      heading: 'Reliable & Trustworthy',
      description:
        'Count on Videomule secure, AI-driven platform for consistent, high-quality video creation every single time.'
    }
  ];

  return (
    <section
      className="py-28 bg-videomule-white relative"
      id="why-choose-us"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-15 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            Why Choose Us
          </Badge>
          <h2 className="font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-4">
            Why choose us?
          </h2>
          <p className="text-lg text-videomule-gray max-w-800px mx-auto leading-relaxed">
            Videomule combines AI scripting and realistic voiceovers to help you
            turn basic screen recordings into professional videos. Save time,
            reduce costs, and scale your content effortlessly.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6.5">
          {card.map((card, i) => (
            <Card
              key={i}
              className={cn(
                card.cardBgColor,
                `dark:${card.cardDarkBgColor}`,
                card.border,
                `dark:${card.darkBorder}`,
                'p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer border rounded-xl'
              )}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:animate-pulse">
                <card.icon
                  style={{ color: card.iconColor }}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-bricolage text-xl font-bold text-videomule-black mb-4">
                {card.heading}
              </h3>
              <p className="text-videomule-gray text-sm leading-relaxed">
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
