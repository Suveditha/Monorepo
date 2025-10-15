import * as React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';

import { cn } from '@workspace/ui/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-4 whitespace-nowrap text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'px-10 py-3 rounded-full border border-videomule-green bg-videomule-green text-videomule-white shadow-button hover:bg-videomule-green-hover hover:shadow-button-hover transition-all duration-200',
        destructive:
          'rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'px-10 py-3 rounded-full border-2 border-videomule-green bg-transparent text-videomule-green shadow-button hover:bg-videomule-green hover:text-white hover:shadow-button-hover transition-all duration-200',
        secondary:
          'px-10 py-3 rounded-full border border-videomule-green bg-videomule-green text-white shadow-button hover:bg-videomule-green-hover hover:shadow-button-hover transition-all duration-200',
        ghost: 'rounded-full hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        hero: 'rounded-full bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold',
        heroOutline:
          'rounded-full border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold',
        cta: 'rounded-full bg-videomule-orange text-white hover:bg-videomule-orange/90 hover:shadow-elegant transform hover:scale-105 transition-all duration-300 font-bold text-lg'
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-9 rounded-full px-4',
        lg: 'h-14 rounded-full px-10',
        xl: 'h-16 rounded-full px-12 text-lg',
        icon: 'h-12 w-12 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    if (href) {
      // If href is provided, render as Next.js Link
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {props.children}
        </Link>
      );
    }

    const Comp = asChild ? SlotPrimitive.Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
