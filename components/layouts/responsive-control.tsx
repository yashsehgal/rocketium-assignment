/**
 * @file components/layouts/responsive-control.tsx
 * @description ResponsiveControl component for controlling layout responsiveness.
 */

import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

/**
 * Props for the ResponsiveControl component.
 * @interface ResponsiveControlProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ResponsiveControlProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Represents a responsive control component for controlling layout responsiveness.
 * @function
 * @name ResponsiveControl
 * @memberof module:components/layouts
 * @type {React.forwardRef<HTMLDivElement, ResponsiveControlProps>}
 * @param {object} props - Props for the ResponsiveControl component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to forward to the responsive control element.
 * @returns {React.ElementRef<HTMLDivElement>} The responsive control element.
 */
export const ResponsiveControl = forwardRef<
  HTMLDivElement,
  ResponsiveControlProps
>(({ className, ...args }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'responsive-control',
        'box-border mx-auto',
        'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',
        className,
      )}
      {...args}
    />
  );
});

ResponsiveControl.displayName = 'ResponsiveControl';
