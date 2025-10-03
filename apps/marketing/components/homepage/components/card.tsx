import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

// Card
export type CardElement = React.ComponentRef<'div'>;
export type CardProps = React.ComponentPropsWithoutRef<'div'>;
function Card({ className, ...props }: CardProps): React.JSX.Element {
  return (
    <div
      data-slot="card"
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  );
}

// CardHeader
export type CardHeaderElement = React.ComponentRef<'div'>;
export type CardHeaderProps = React.ComponentPropsWithoutRef<'div'>;
function CardHeader({
  className,
  ...props
}: CardHeaderProps): React.JSX.Element {
  return (
    <div
      data-slot="card-header"
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
}

// CardTitle
export type CardTitleElement = React.ComponentRef<'h3'>;
export type CardTitleProps = React.ComponentPropsWithoutRef<'h3'>;
function CardTitle({ className, ...props }: CardTitleProps): React.JSX.Element {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  );
}

// CardDescription
export type CardDescriptionElement = React.ComponentRef<'p'>;
export type CardDescriptionProps = React.ComponentPropsWithoutRef<'p'>;
function CardDescription({
  className,
  ...props
}: CardDescriptionProps): React.JSX.Element {
  return (
    <p
      data-slot="card-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

// CardContent
export type CardContentElement = React.ComponentRef<'div'>;
export type CardContentProps = React.ComponentPropsWithoutRef<'div'>;
function CardContent({
  className,
  ...props
}: CardContentProps): React.JSX.Element {
  return (
    <div
      data-slot="card-content"
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  );
}

// CardFooter
export type CardFooterElement = React.ComponentRef<'div'>;
export type CardFooterProps = React.ComponentPropsWithoutRef<'div'>;
function CardFooter({
  className,
  ...props
}: CardFooterProps): React.JSX.Element {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};
