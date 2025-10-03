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
      cardBgColor: 'rgba(219, 234, 254, 1), rgba(239, 246, 255, 1)',
      border: '#DBEAFE',
      heading: 'Experienced Professionals',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: Star,
      iconColor: '#EA580C',
      cardBgColor: 'rgba(255, 237, 213, 1), rgba(254, 215, 170, 1)',
      border: '#FED7AA',
      heading: 'Satisfaction Guarantee',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: DollarSign,
      iconColor: '#7E22CE',
      cardBgColor: 'rgba(242, 239, 255, 1), rgba(224, 216, 255, 1)',
      border: '#E9E4FF',
      heading: 'Affordable Prices',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      icon: Shield,
      iconColor: '#0B7F58',
      cardBgColor: 'rgba(220, 252, 231, 1), rgba(187, 247, 208, 1)',
      border: '#BBF7D0',
      heading: 'Reliable & Trustworthy',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            Use Cases
          </Badge>
          <h2 className="font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-6">
            Why choose us?
          </h2>
          <p className="text-xl text-videomule-gray max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {card.map((card, i) => (
            <Card
              key={i}
              className={cn(
                'p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer border rounded-xl'
              )}
              style={{
                animationDelay: `${0.1 * (i + 1)}s`,
                borderColor: card.border,
                background: `linear-gradient(135deg, ${card.cardBgColor})`
              }}
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
