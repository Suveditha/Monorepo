import * as React from 'react';
import Image from 'next/image';

import { Button } from '@workspace/ui/components/buttonHome';
import { cn } from '@workspace/ui/lib/utils';

export default function Pricing(): React.JSX.Element {
  const pricing = [
    {
      plan: 'Free',
      price: '$0',
      pricePill: '',
      priceColor: '',
      details: [
        '1 Video upload per org - max 3 mins video file',
        'Unlimited Users',
        'Storage: 100 MB',
        'Renders with watermark'
      ],
      buttonText: 'Get Started Free'
    },
    {
      plan: 'Plus',
      price: '$19',
      pricePill: 'Save 20% annually',
      priceColor: 'border bg-orange-50 text-orange-600 border-orange-200',
      details: [
        '50 mins of video upload / mo',
        'Unlimited Users',
        'Storage: 5 GB of storage for assests',
        'No watermark'
      ],
      buttonText: 'Start Plus Trial'
    },
    {
      plan: 'Pro',
      price: '$49',
      pricePill: 'Best for teams',
      priceColor: 'border bg-blue-50 text-blue-600 border-blue-200',
      details: [
        '100 mins of video upload / mo',
        'Unlimited Users',
        'Storage: 10 GB of storage for assests',
        'No watermark'
      ],
      buttonText: 'Start Pro Trail'
    }
  ];
  return (
    <section
      className="py-24 bg-videomule-light-green relative"
      id="pricing"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-videomule-black mb-6">
            Pricing Plans
          </h2>
          <p className="text-xl text-videomule-green-text max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((price, i) => {
            const isPlus = price.plan === 'Plus';
            return (
              <div
                key={i}
                className={cn(
                  'bg-videomule-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 relative',
                  isPlus
                    ? 'border-2 border-videomule-green'
                    : 'border border-gray-200'
                )}
              >
                {isPlus && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="w-auto bg-videomule-green text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-bricolage text-2xl font-bold text-videomule-black mb-4">
                    {price.plan}
                  </h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-videomule-black">
                      {price.price}
                    </span>
                    <span className="text-videomule-gray text-lg">/month</span>
                  </div>
                  <div
                    className={cn(
                      price.priceColor,
                      ' hidden px-3 py-1 rounded-full text-sm font-medium'
                    )}
                  >
                    {price.pricePill}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-sm text-videomule-gray">
                  {price.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center"
                    >
                      <Image
                        src="/assets/sample/homepage/check-mark.svg"
                        width={20}
                        height={20}
                        alt="Check Mark"
                        className="mr-2.5"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isPlus ? 'default' : 'outline'}
                  className="w-full"
                >
                  {price.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
