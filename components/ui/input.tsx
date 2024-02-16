/**
 * @file components/ui/input.tsx
 * @description Input component for user input.
 */

import * as React from 'react';

import { cn } from '@/helpers/utils';

/**
 * Props for the Input component.
 * @interface InputProps
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * Represents an input component for user input.
 *
 * @function
 * @name Input
 * @memberof module:components/ui/input
 * @type {React.forwardRef<HTMLInputElement, InputProps>}
 * @param {object} props - Props for the Input component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {string} [props.type] - Type of the input element.
 * @param {React.Ref<HTMLInputElement>} ref - Ref to forward to the input element.
 * @returns {React.ElementRef<HTMLInputElement>} The input element.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'px-4 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl focus:ring-gray-300 focus:shadow-md transition-all',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

/**
 * Wrapper component for form items. Arranges form items in a vertical layout.
 * @function
 * @name FormItemWrapper
 * @memberof module:components/ui/input
 * @type {React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>>}
 * @param {object} props - Props for the FormItemWrapper component.
 * @param {string} [props.className] - Additional class names for styling.
 * @param {React.ReactElement} props.children - Child elements to be wrapped.
 * @returns {React.ReactElement} The wrapped form items in a vertical layout.
 */
const FormItemWrapper: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return <div className="flex flex-col items-start gap-2">{children}</div>;
};

export { Input, FormItemWrapper };
