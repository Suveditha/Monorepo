'use client';

import * as React from 'react';

import { APP_NAME } from '@workspace/common/app';
import { cn } from '@workspace/ui/lib/utils';

export type LogoElement = React.ComponentRef<'div'>;
export type LogoProps = React.ComponentPropsWithoutRef<'div'> & {
  hideSymbol?: boolean;
  hideWordmark?: boolean;
};
export function Logo({
  hideSymbol,
  hideWordmark,
  className,
  ...other
}: LogoProps): React.JSX.Element {
  return (
    <div
      className={cn('flex items-center space-x-2', className)}
      {...other}
    >
      {!hideSymbol && (
        <div className="flex size-9 items-center justify-center mr-2.5">
          <div className="flex size-9 items-center justify-center text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
            >
              <path
                d="M0.0686042 10.9166L0.308413 11.9425L0.867968 10.5472L1.14775 11.2859L1.7073 9.89056L1.98708 10.6293L2.54663 9.23393L2.82641 9.97264L3.26606 8.94665C3.54584 9.06977 3.74568 9.43913 3.66574 9.76744L3.62577 10.0958C3.5858 10.2599 3.54584 10.4241 3.50587 10.6293V10.6703C3.4659 10.9576 3.4659 11.2449 3.4659 11.5321C3.50587 12.8044 4.06542 13.9535 4.90475 14.7743C5.10459 14.9795 5.3444 15.1436 5.58421 15.3078L6.54345 16.1286L6.18374 19.8222L12.7785 22.5718L12.7385 22.6129L10.9799 22.9001L10.3804 22.3666L8.70173 23.803L10.2605 24.2134L11.0199 24.1313L8.26208 26.6347L7.78246 28.6867L9.70094 30L9.94074 29.4665L9.38119 27.4966L13.9775 23.8851L15.5363 23.7209L15.7361 23.803V24.9932L18.1342 26.1012L18.2142 24.7469L17.2949 23.5568L19.4532 23.3516L20.932 19.1655L21.5315 19.1245C23.5299 19.0424 25.1686 17.606 25.6482 15.7182L26.4476 13.0506L28.2062 11.7373L29.0455 10.2189L31.7634 8.82353L34.761 8.65937L36 7.46922L35.96 6.9357L35.4804 6.27907L35.1207 6.19699L33.2822 5.78659L30.5244 3.77565L29.0855 3.85773L29.0455 3.73461L29.2454 2.91382C29.2454 2.91382 29.0056 0.820793 27.167 0L26.9672 0.861833C26.5675 0.574556 26.0479 0.328317 25.4084 0.205198L25.5283 2.87278L26.6474 4.10397L25.4484 5.82763C23.0503 9.60328 17.7745 8.37209 16.0159 7.7565C14.7369 7.26402 11.0998 5.99179 8.06224 6.44323H8.02227C7.06304 6.48427 6.18374 6.81259 5.46431 7.38714H5.06463L2.78644 7.51026C2.02705 7.59234 1.26765 8.00274 0.748063 8.57729C0.108572 9.23393 -0.131237 10.0958 0.0686042 10.9166ZM15.4963 17.4008L14.0575 20.643L11.6194 18.8783L12.8584 16.0055L13.9376 15.9644L15.4963 17.4008ZM17.6146 21.8331L16.2157 22.0383L17.4947 21.0123L17.6146 21.8331Z"
                fill="url(#paint0_linear_322_411)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_322_411"
                  x1="28"
                  y1="-1.29747e-06"
                  x2="-1.35962"
                  y2="31.5951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0B7F58" />
                  <stop
                    offset="1"
                    stopColor="#76DF00"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}
      {!hideWordmark && <span className="font-bold text-xl">{APP_NAME}</span>}
    </div>
  );
}
