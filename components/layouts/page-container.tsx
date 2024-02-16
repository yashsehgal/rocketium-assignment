/**
 * @file components/layouts/page-container.tsx
 * @description PageContainer component for containing page content.
 */

import { cn } from '@/helpers/utils';
import { forwardRef } from 'react';

/**
 * Props for the PageContainer component.
 * @interface PageContainerProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Represents a page container component for containing page content.
 * @function
 * @name PageContainer
 * @memberof module:components/layouts
 * @type {React.forwardRef<HTMLDivElement, PageContainerProps>}
 * @param {object} props - Props for the PageContainer component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.Ref<HTMLDivElement>} ref - Ref to forward to the page container element.
 * @returns {React.ElementRef<HTMLDivElement>} The page container element.
 */
export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, ...args }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('page-container py-6', className)}
        {...args}
      />
    );
  },
);

PageContainer.displayName = 'PageContainer';
