"use client";

import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Select variants
 */
const neoSelectVariants = cva(
  "w-full font-inter transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed focus:shadow-neo-focus border border-neo-steel/30 focus:border-neo-gold/50",
        elevated: "bg-neo-steel text-neo-champagne shadow-neo-flat focus:shadow-neo-elevated border border-neo-steel/30 focus:border-neo-gold/50",
      },
      size: {
        sm: "pl-3 pr-9 py-2 text-sm rounded-neo-sm",
        md: "pl-4 pr-10 py-3 text-base rounded-neo-md",
        lg: "pl-5 pr-12 py-4 text-lg rounded-neo-lg",
      },
    },
    defaultVariants: {
      variant: "pressed",
      size: "md",
    },
  }
);

/**
 * NeoSelect Props Interface
 */
export interface NeoSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof neoSelectVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

/**
 * NeoSelect Component
 *
 * A neomorphic select dropdown with custom styling and chevron indicator.
 *
 * @example
 * ```tsx
 * <NeoSelect label="Service">
 *   <option value="">Select a service</option>
 *   <option value="cut">Haircut</option>
 *   <option value="color">Color</option>
 * </NeoSelect>
 * ```
 */
export const NeoSelect = forwardRef<HTMLSelectElement, NeoSelectProps>(
  (
    {
      className,
      variant,
      size,
      label,
      error,
      helperText,
      required,
      id,
      children,
      ...props
    },
    ref
  ) => {
    const selectId = id || `neo-select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-neo-champagne font-inter"
          >
            {label}
            {required && <span className="text-neo-gold ml-1" aria-label="required">*</span>}
          </label>
        )}

        {/* Select container */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              neoSelectVariants({ variant, size }),
              error && "border-red-500/50 focus:border-red-500",
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error
                ? `${selectId}-error`
                : helperText
                ? `${selectId}-helper`
                : undefined
            }
            required={required}
            {...props}
          >
            {children}
          </select>

          {/* Chevron icon */}
          <div className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 text-neo-taupe pointer-events-none",
            size === 'sm' && "right-2.5",
            size === 'lg' && "right-4"
          )}>
            <ChevronDown className={cn(
              "h-4 w-4",
              size === 'sm' && "h-3.5 w-3.5",
              size === 'lg' && "h-5 w-5"
            )} />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p
            id={`${selectId}-error`}
            className="text-sm text-red-400 font-inter"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text */}
        {!error && helperText && (
          <p
            id={`${selectId}-helper`}
            className="text-sm text-neo-taupe font-inter"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

NeoSelect.displayName = 'NeoSelect';
