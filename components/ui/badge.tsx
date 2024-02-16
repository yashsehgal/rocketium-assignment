/**
 * @file components/ui/badge.tsx
 * @description Badge component for labeling and highlighting.
 */

import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

/**
 * Props for the Badge component.
 * @interface BadgeProps
 * @extends React.HTMLAttributes<HTMLSpanElement>
 * @property {string} [theme] - The theme color of the badge ('green', 'orange', 'purple', 'yellow' or custom string).
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  theme?: 'green' | 'orange' | 'purple' | 'yellow' | string;
}

/**
 * Represents a badge component for labeling and highlighting.
 *
 * @function
 * @name Badge
 * @memberof module:components/ui/badge
 * @type {React.forwardRef<HTMLDivElement, BadgeProps>}
 * @param {object} props - Props for the Badge component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.theme] - The theme color of the badge.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to forward to the badge element.
 * @returns {React.ElementRef<HTMLDivElement>} The badge element.
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, theme, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'px-2 py-1 rounded-md text-[10px] font-medium w-fit uppercase hover:brightness-95',
          !theme && 'bg-gray-100 text-gray-500',
          theme === 'green' && 'text-green-600 bg-green-100',
          theme === 'orange' && 'text-orange-500 bg-orange-100',
          theme === 'purple' && 'text-purple-500 bg-purple-100',
          theme === 'yellow' && 'text-yellow-500 bg-yellow-100',
          className,
        )}
        {...args}>
        {args.children}
      </div>
    );
  },
);

Badge.displayName = 'Badge';
