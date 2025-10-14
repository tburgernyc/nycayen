"use client";

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * NeoToggle Props Interface
 */
export interface NeoToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the toggle
   */
  label?: string;

  /**
   * Size variant
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Helper text
   */
  helperText?: string;
}

/**
 * NeoToggle Component
 *
 * A neomorphic toggle switch with smooth animations.
 *
 * @example
 * ```tsx
 * <NeoToggle
 *   label="Enable notifications"
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 * />
 * ```
 */
export const NeoToggle = forwardRef<HTMLInputElement, NeoToggleProps>(
  (
    {
      className,
      label,
      size = 'md',
      helperText,
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const toggleId = id || `neo-toggle-${Math.random().toString(36).substr(2, 9)}`;

    // Size configurations
    const sizes = {
      sm: {
        track: 'w-9 h-5',
        handle: 'w-3 h-3',
        translate: 'translate-x-4',
      },
      md: {
        track: 'w-11 h-6',
        handle: 'w-4 h-4',
        translate: 'translate-x-5',
      },
      lg: {
        track: 'w-14 h-7',
        handle: 'w-5 h-5',
        translate: 'translate-x-7',
      },
    };

    const sizeConfig = sizes[size];

    return (
      <div className="flex items-start gap-3">
        {/* Toggle Switch */}
        <div className="flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            checked={checked}
            className="sr-only"
            aria-describedby={helperText ? `${toggleId}-helper` : undefined}
            {...props}
          />
          <label
            htmlFor={toggleId}
            className={cn(
              "relative inline-flex items-center cursor-pointer rounded-full transition-all duration-300",
              "shadow-neo-pressed",
              checked ? "bg-neo-gold" : "bg-neo-dark",
              sizeConfig.track,
              props.disabled && "opacity-50 cursor-not-allowed",
              className
            )}
          >
            <motion.span
              className={cn(
                "inline-block rounded-full bg-neo-champagne shadow-neo-elevated",
                sizeConfig.handle
              )}
              animate={{
                x: checked ? (size === 'sm' ? 16 : size === 'md' ? 20 : 28) : 4,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            />
          </label>
        </div>

        {/* Label and Helper Text */}
        {(label || helperText) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={toggleId}
                className={cn(
                  "text-sm font-medium text-neo-champagne font-inter cursor-pointer",
                  props.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {label}
              </label>
            )}
            {helperText && (
              <p
                id={`${toggleId}-helper`}
                className="text-xs text-neo-taupe font-inter mt-0.5"
              >
                {helperText}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

NeoToggle.displayName = 'NeoToggle';
