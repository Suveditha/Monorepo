import * as React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordian';

import { Badge } from './components/badge';

export default function Faq(): React.JSX.Element {
  const faq = [
    {
      question: 'How does VideoMule work?',
      answer:
        'VideoMule uses advanced AI to analyze your screen recording, generate a script based on the visual content, and then creates a synchronized voiceover using natural-sounding AI voices. The entire process is automated and takes just minutes.'
    },
    {
      question: 'Can I edit the generated script?',
      answer:
        'Absolutely! While our AI generates intelligent scripts based on your video content, you have full control to edit, modify, or completely rewrite the script to match your exact needs and style.'
    },
    {
      question: 'What video formats do you support?',
      answer:
        'We support all major video formats including MP4, MOV, AVI, WMV, and more. Our system automatically processes your video regardless of format and exports in high-quality MP4 for maximum compatibility.'
    },
    {
      question: 'How natural do the AI voices sound?',
      answer:
        'Our AI voices are powered by state-of-the-art neural networks and sound remarkably natural. We offer over 100 voices in multiple languages and accents, each designed to sound human-like with proper intonation and emotion.'
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! Our free plan allows you to create up to 5 minutes of video content per month with access to 10 AI voices and 720p export quality. No credit card required to get started.'
    }
  ];
  return (
    <section
      id="faq"
      className="py-28 relative"
    >
      <div className="max-w-5xl mx-auto px-4 overflow-visible">
        {/* Header */}
        <div className="text-center mb-15 animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 text-videomule-green bg-videomule-green/10 border-videomule-green/20"
          >
            FAQs
          </Badge>
          <h2 className="max-w-3xl mx-auto font-bricolage text-4xl lg:text-6xl font-bold text-videomule-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-videomule-gray max-w-[800px] mx-auto leading-relaxed">
            Got questions? We've got answers.
          </p>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="space-y-4 max-w-[1000px] mx-auto overflow-visible"
      >
        {faq.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`"item-${i}"`}
            className="bg-videomule-white rounded-xl px-6 border border-transparent shadow-card hover:shadow-glow transition-all duration-300 data-[state=open]:border-videomule-green"
          >
            <AccordionTrigger className="font-bricolage text-lg font-semibold text-videomule-black hover:no-underline hover:text-videomule-green">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-videomule-gray text-sm leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
