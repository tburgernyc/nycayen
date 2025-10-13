"use client";

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Icon Button variants using class-variance-authority
 */
const neoIconButtonVariants = cva(
  // Base classes
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      /**
       * Visual variant determines the shadow style
       */
      variant: {
        elevated: "bg-neo-steel text-neo-gold shadow-neo-elevated hover:shadow-neo-elevated-hover active:shadow-neo-pressed",
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed hover:text-neo-gold",
        flat: "bg-neo-steel text-neo-champagne shadow-neo-flat hover:shadow-neo-elevated hover:text-neo-gold",
        gold: "bg-neo-gold text-neo-dark shadow-neo-elevated hover:shadow-neo-elevated-hover active:shadow-neo-pressed",
        ghost: "bg-transparent text-neo-gold hover:bg-neo-steel/30 hover:text-neo-champagne",
      },
      /**
       * Size variants
       */
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
        xl: "p-5",
      },
      /**
       * Shape variants
       */
      shape: {
        square: "",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      // Size-specific border radius for square buttons
      {
        shape: "square",
        size: "sm",
        className: "rounded-neo-sm",
      },
      {
        shape: "square",
        size: "md",
        className: "rounded-neo-md",
      },
      {
        shape: "square",
        size: "lg",
        className: "rounded-neo-lg",
      },
      {
        shape: "square",
        size: "xl",
        className: "rounded-neo-xl",
      },
    ],
    defaultVariants: {
      variant: "elevated",
      size: "md",
      shape: "square",
    },
  }
);

/**
 * NeoIconButton Props Interface
 */
export interface NeoIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neoIconButtonVariants> {
  /**
   * Icon to display
   * Required - typically a Lucide icon component
   */
  icon: React.ReactNode;

  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;
}

/**
 * NeoIconButton Component
 *
 * A neomorphic icon-only button with multiple variants, sizes, and shapes.
 * Perfect for navigation controls, actions, and toolbar buttons.
 *
 * @example
 * ```tsx
 * // Basic elevated icon button
 * <NeoIconButton icon={<Heart className="h-5 w-5" />} aria-label="Favorite" />
 *
 * // Circular button
 * <NeoIconButton
 *   icon={<Home className="h-5 w-5" />}
 *   shape="circle"
 *   aria-label="Home"
 * />
 *
 * // Gold variant
 * <NeoIconButton
 *   icon={<Search className="h-5 w-5" />}
 *   variant="gold"
 *   aria-label="Search"
 * />
 *
 * // Large size
 * <NeoIconButton
 *   icon={<Plus className="h-6 w-6" />}
 *   size="lg"
 *   aria-label="Add item"
 * />
 *
 * // Loading state
 * <NeoIconButton
 *   icon={<Save className="h-5 w-5" />}
 *   isLoading
 *   aria-label="Save"
 * />
 * ```
 */
export const NeoIconButton = forwardRef<HTMLButtonElement, NeoIconButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      icon,
      isLoading = false,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    // Loading spinner
    const spinner = (
      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
    );

    // Ensure aria-label is provided for accessibility
    if (!ariaLabel && !props['aria-labelledby']) {
      console.warn(
        'NeoIconButton: aria-label or aria-labelledby is required for accessibility'
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(neoIconButtonVariants({ variant, size, shape, className }))}
        disabled={isDisabled}
        aria-label={ariaLabel}
        // Framer Motion animation variants
        whileHover={!isDisabled ? { scale: variant === 'elevated' || variant === 'gold' ? 1.05 : 1.02 } : {}}
        whileTap={!isDisabled ? { scale: 0.95 } : {}}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        {...props}
      >
        {isLoading ? spinner : icon}
      </motion.button>
    );
  }
);

NeoIconButton.displayName = 'NeoIconButton';
