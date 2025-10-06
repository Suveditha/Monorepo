import React from 'react';

import WhyChoose from '~/components/homepage/choose';
import Cta from '~/components/homepage/cta';
import Difference from '~/components/homepage/difference';
import Faq from '~/components/homepage/faq';
import Feature from '~/components/homepage/feature';
import Hero from '~/components/homepage/hero';
import Pricing from '~/components/homepage/pricing';
import StepProcess from '~/components/homepage/step-process';
import Testimonial from '~/components/homepage/testimonial';
import UseCases from '~/components/homepage/usecases';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <StepProcess />
      <Difference />
      <Feature />
      <Pricing />
      <UseCases />
      <WhyChoose />
      <Testimonial />
      <Faq />
      <Cta />
    </>
  );
}
