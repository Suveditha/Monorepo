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
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M29.0554 10.862L29.0588 10.861C28.6566 9.92123 28.7534 8.24542 28.3113 7.41637L28.3134 7.4188C27.8559 6.63069 26.4587 5.43552 26.8435 4.78727L26.8496 4.77027H26.8544C27.18 4.11438 30.3385 -0.617018 27.229 0.63784C26.2818 1.02096 25.4555 5.06732 25.2107 4.30212C24.8811 3.26971 25.0614 1.66054 25.0669 1.61855C25.1766 0.845364 25.162 0.08294 24.2597 0C23.5994 0.0461549 23.4003 0.412965 23.2067 1.74625C22.9664 3.4172 23.3758 3.81732 23.4044 4.33474C20.3294 5.65936 16.4775 10.4508 14.5683 10.4907C11.2428 10.4824 7.21977 10.3821 5.47688 10.5441C-2.46786 11.3493 0.0726699 23.8912 1.80942 28.7653C2.07973 29.5811 2.25801 29.6547 3.14292 29.9223C6.27384 29.8702 4.7065 28.9076 3.82126 26.8649C2.35243 23.4762 4.42017 20.1239 7.09364 18.1493C9.46919 20.4258 12.6962 21.3496 15.9069 21.1702C15.7498 23.7007 16.0675 26.418 17.0546 28.7396C17.5888 30.3484 20.7838 30.4904 19.5717 28.7396C18.5381 27.2647 18.4993 22.6367 19.044 21.0092C19.2863 19.8161 24.7304 12.2776 24.4908 12.0221C25.4827 13.0827 27.9268 15.6618 29.4546 14.3084C29.8367 13.97 29.9884 13.5397 30 13.0143C29.9151 12.204 29.3789 11.69 29.0554 10.862Z"
                fill="url(#paint0_linear_374_3875)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_374_3875"
                  x1="5"
                  y1="4.16667"
                  x2="16.752"
                  y2="34.4098"
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
