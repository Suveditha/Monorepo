import React from 'react';

import WhyChoose from '~/components/homepage/choose';
import Difference from '~/components/homepage/difference';
import Feature from '~/components/homepage/feature';
import Hero from '~/components/homepage/hero';
import Pricing from '~/components/homepage/pricing';
import StepProcess from '~/components/homepage/step-process';
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
    </>
  );
}
