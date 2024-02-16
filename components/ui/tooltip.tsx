/**
 * @file components/ui/tooltip.tsx
 * @description Tooltip component for displaying additional information on hover.
 */

'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/helpers/utils';

/**
 * Provider component for Tooltip. Must wrap the entire Tooltip usage context.
 * @const TooltipProvider
 * @memberof module:components/ui/tooltip
 * @type {import('@radix-ui/react-tooltip').Provider}
 */
const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Root component for Tooltip.
 * @const Tooltip
 * @memberof module:components/ui/tooltip
 * @type {import('@radix-ui/react-tooltip').Root}
 */
const Tooltip = TooltipPrimitive.Root;

/**
 * Trigger component for Tooltip. This is the element that triggers the tooltip to appear on hover.
 * @const TooltipTrigger
 * @memberof module:components/ui/tooltip
 * @type {import('@radix-ui/react-tooltip').Trigger}
 */
const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * Content component for Tooltip. This is the actual tooltip content that appears on hover.
 * @function
 * @name TooltipContent
 * @memberof module:components/ui/tooltip
 * @type {React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>>}
 * @param {object} props - Props for the TooltipContent component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {number} [props.sideOffset=4] - Offset from the side of the trigger element.
 * @param {React.Ref<React.ElementRef<typeof TooltipPrimitive.Content>>} ref - Ref to forward to the TooltipPrimitive.Content component.
 * @returns {React.ElementRef<typeof TooltipPrimitive.Content>} The TooltipContent component.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md bg-white px-3 py-1.5 text-sm text-popover-foreground shadow animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
