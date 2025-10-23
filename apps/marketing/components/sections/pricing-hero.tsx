'use client';

import * as React from 'react';

import { PricingTable } from '@workspace/billing/components/pricing-table';
import { APP_NAME } from '@workspace/common/app';

import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

export function PricingHero(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container space-y-12 py-20">
        <SiteHeading
          badge="Pricing"
          title="Pricing Plans"
          description="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />
        <PricingTable />
      </div>
    </GridSection>
  );
}
