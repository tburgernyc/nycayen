"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Button variants using class-variance-authority
 * Defines all visual states and sizes for the neomorphic button
 */
const neoButtonVariants = cva(
  // Base classes applied to all buttons
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  {
    variants: {
      /**
       * Visual variant determines the shadow style
       * - elevated: Raised appearance (most buttons)
       * - pressed: Inset appearance (form buttons, toggles)
       * - flat: Minimal shadow (subtle actions)
       */
      variant: {
        elevated: "bg-neo-steel text-neo-gold shadow-neo-elevated hover:shadow-neo-elevated-hover hover:scale-105 active:shadow-neo-pressed active:scale-95",
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed hover:text-neo-gold",
        flat: "bg-neo-steel text-neo-champagne shadow-neo-flat hover:shadow-neo-elevated hover:text-neo-gold",
        gold: "bg-neo-gold text-neo-dark shadow-neo-elevated hover:shadow-neo-elevated-hover hover:scale-105 active:shadow-neo-pressed active:scale-95",
        ghost: "bg-transparent text-neo-gold hover:bg-neo-steel/30 hover:text-neo-champagne",
      },
      /**
       * Size variants control padding and text size
       */
      size: {
        sm: "px-4 py-2 text-sm rounded-neo-sm",
        md: "px-6 py-3 text-base rounded-neo-md",
        lg: "px-8 py-4 text-lg rounded-neo-lg",
        xl: "px-10 py-5 text-xl rounded-neo-xl",
        icon: "p-3 rounded-neo-md", // Square button for icons
      },
      /**
       * Full width option
       */
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "elevated",
      size: "md",
      fullWidth: false,
    },
  }
);

/**
 * NeoButton Props Interface
 * Extends HTML button attributes for full compatibility
 */
export interface NeoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neoButtonVariants> {
  /**
   * Icon to display in the button
   * Can be any React node (typically a Lucide icon component)
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to text
   * @default 'leading'
   */
  iconPosition?: 'leading' | 'trailing';

  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;

  /**
   * Text to display when loading
   */
  loadingText?: string;
}

/**
 * NeoButton Component
 *
 * A neomorphic button with multiple variants, sizes, and states.
 * Includes smooth animations, loading states, and icon support.
 *
 * @example
 * ```tsx
 * // Basic elevated button
 * <NeoButton>Click Me</NeoButton>
 *
 * // Button with icon
 * <NeoButton icon={<Calendar />} iconPosition="leading">
 *   Book Now
 * </NeoButton>
 *
 * // Loading button
 * <NeoButton isLoading loadingText="Submitting...">
 *   Submit
 * </NeoButton>
 *
 * // Pressed variant (form style)
 * <NeoButton variant="pressed" size="lg">
 *   Search
 * </NeoButton>
 *
 * // Icon-only button
 * <NeoButton size="icon" icon={<Heart />} aria-label="Favorite" />
 * ```
 */
export const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      icon,
      iconPosition = 'leading',
      isLoading = false,
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    // Content to display (children or loading text)
    const content = isLoading && loadingText ? loadingText : children;

    // Loading spinner
    const spinner = (
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
    );

    // Type-safe props for motion.button
    const motionProps = props as HTMLMotionProps<"button">;

    return (
      <motion.button
        ref={ref}
        className={cn(neoButtonVariants({ variant, size, fullWidth, className }))}
        disabled={isDisabled}
        // Framer Motion animation variants
        whileHover={!isDisabled ? { scale: variant === 'elevated' || variant === 'gold' ? 1.05 : 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.95 } : undefined}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        {...motionProps}
      >
        {/* Leading icon or spinner */}
        {isLoading && iconPosition === 'leading' && (
          <span className="mr-2">{spinner}</span>
        )}
        {!isLoading && icon && iconPosition === 'leading' && (
          <span className="mr-2" aria-hidden="true">{icon}</span>
        )}

        {/* Button content */}
        {size !== 'icon' && content}
        {size === 'icon' && !isLoading && icon}
        {size === 'icon' && isLoading && spinner}

        {/* Trailing icon or spinner */}
        {isLoading && iconPosition === 'trailing' && (
          <span className="ml-2">{spinner}</span>
        )}
        {!isLoading && icon && iconPosition === 'trailing' && (
          <span className="ml-2" aria-hidden="true">{icon}</span>
        )}
      </motion.button>
    );
  }
);

NeoButton.displayName = 'NeoButton';
