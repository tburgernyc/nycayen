"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * NeoCTAButton Props Interface
 */
export interface NeoCTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon to display in the button
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon
   * @default 'leading'
   */
  iconPosition?: 'leading' | 'trailing';

  /**
   * Loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Enable pulsing animation
   * @default false
   */
  pulse?: boolean;

  /**
   * Size variant
   * @default 'lg'
   */
  size?: 'md' | 'lg' | 'xl';
}

/**
 * NeoCTAButton Component
 *
 * A prominent Call-to-Action button with strong elevation, gold accent, and optional pulse animation.
 * Designed for primary actions like "Book Now", "Get Started", "Shop Now", etc.
 *
 * @example
 * ```tsx
 * // Basic CTA button
 * <NeoCTAButton>Book Now</NeoCTAButton>
 *
 * // With icon
 * <NeoCTAButton icon={<Calendar className="h-5 w-5" />}>
 *   Schedule Appointment
 * </NeoCTAButton>
 *
 * // With pulse animation
 * <NeoCTAButton pulse>
 *   Limited Time Offer
 * </NeoCTAButton>
 *
 * // Large size
 * <NeoCTAButton size="xl" icon={<ShoppingBag />}>
 *   Shop Collection
 * </NeoCTAButton>
 *
 * // Loading state
 * <NeoCTAButton isLoading>
 *   Processing...
 * </NeoCTAButton>
 * ```
 */
export const NeoCTAButton = forwardRef<HTMLButtonElement, NeoCTAButtonProps>(
  (
    {
      className,
      children,
      icon,
      iconPosition = 'leading',
      isLoading = false,
      pulse = false,
      size = 'lg',
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine if button should be disabled
    const isDisabled = disabled || isLoading;

    // Size-specific classes
    const sizeClasses = {
      md: 'px-8 py-4 text-base rounded-neo-lg',
      lg: 'px-10 py-5 text-lg rounded-neo-xl',
      xl: 'px-12 py-6 text-xl rounded-neo-xl',
    };

    // Loading spinner
    const spinner = (
      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
    );

    // Type-safe props for motion.button
    const motionProps = props as HTMLMotionProps<"button">;

    return (
      <motion.button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-semibold font-inter",
          "bg-neo-gold text-neo-dark",
          "shadow-neo-high hover:shadow-neo-elevated-hover",
          "transition-all duration-300",
          "focus:outline-none focus:ring-4 focus:ring-neo-gold/30",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          // Size
          sizeClasses[size],
          // Pulse animation
          pulse && !isDisabled && "animate-neo-pulse",
          className
        )}
        disabled={isDisabled}
        // Framer Motion animations
        whileHover={!isDisabled ? {
          scale: 1.05,
          boxShadow: "0 0 30px rgba(197, 164, 109, 0.5), 12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)"
        } : undefined}
        whileTap={!isDisabled ? { scale: 0.95 } : undefined}
        transition={{
          duration: 0.2,
          ease: 'easeInOut'
        }}
        {...motionProps}
      >
        {/* Leading icon or spinner */}
        {isLoading && iconPosition === 'leading' && (
          <span className="mr-3">{spinner}</span>
        )}
        {!isLoading && icon && iconPosition === 'leading' && (
          <span className="mr-3" aria-hidden="true">{icon}</span>
        )}

        {/* Button content */}
        {children}

        {/* Trailing icon or spinner */}
        {isLoading && iconPosition === 'trailing' && (
          <span className="ml-3">{spinner}</span>
        )}
        {!isLoading && icon && iconPosition === 'trailing' && (
          <span className="ml-3" aria-hidden="true">{icon}</span>
        )}
      </motion.button>
    );
  }
);

NeoCTAButton.displayName = 'NeoCTAButton';
