"use client";

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Card variants using class-variance-authority
 */
const neoCardVariants = cva(
  // Base classes applied to all cards
  "rounded-neo-lg transition-all duration-300",
  {
    variants: {
      /**
       * Visual variant determines the shadow style and background
       */
      variant: {
        elevated: "bg-neo-steel shadow-neo-elevated",
        flat: "bg-neo-steel shadow-neo-flat",
        pressed: "bg-neo-dark shadow-neo-pressed",
        dark: "bg-neo-dark shadow-neo-elevated",
      },
      /**
       * Padding variants
       */
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      /**
       * Hover effect - adds lift animation
       */
      hover: {
        true: "cursor-pointer hover:shadow-neo-high hover:scale-102",
        false: "",
      },
      /**
       * Interactive state - adds active press animation
       */
      interactive: {
        true: "cursor-pointer active:shadow-neo-flat active:scale-98",
        false: "",
      },
    },
    defaultVariants: {
      variant: "elevated",
      padding: "md",
      hover: false,
      interactive: false,
    },
  }
);

/**
 * NeoCard Props Interface
 */
export interface NeoCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neoCardVariants> {
  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Optional header content
   * Rendered above the main content with border separator
   */
  header?: React.ReactNode;

  /**
   * Optional footer content
   * Rendered below the main content with border separator
   */
  footer?: React.ReactNode;

  /**
   * Enable entrance animation
   * @default false
   */
  animate?: boolean;
}

/**
 * NeoCard Component
 *
 * A versatile neomorphic card container with multiple variants and optional sections.
 * Supports headers, footers, hover effects, and entrance animations.
 *
 * @example
 * ```tsx
 * // Basic card
 * <NeoCard>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </NeoCard>
 *
 * // Card with header and footer
 * <NeoCard
 *   header={<h2>Service Name</h2>}
 *   footer={<NeoButton>Learn More</NeoButton>}
 * >
 *   Service description goes here
 * </NeoCard>
 *
 * // Interactive card with hover effect
 * <NeoCard
 *   hover
 *   interactive
 *   onClick={() => console.log('Card clicked')}
 * >
 *   Click me!
 * </NeoCard>
 *
 * // Pressed variant (inset)
 * <NeoCard variant="pressed" padding="lg">
 *   Recessed content area
 * </NeoCard>
 *
 * // With entrance animation
 * <NeoCard animate>
 *   Animated card entrance
 * </NeoCard>
 * ```
 */
export const NeoCard = forwardRef<HTMLDivElement, NeoCardProps>(
  (
    {
      className,
      variant,
      padding,
      hover,
      interactive,
      children,
      header,
      footer,
      animate = false,
      ...props
    },
    ref
  ) => {
    // Animation variants for Framer Motion
    const animationVariants = {
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    };

    const CardComponent = animate ? motion.div : 'div';
    const motionProps = animate
      ? {
          initial: 'hidden' as const,
          animate: 'visible' as const,
          variants: animationVariants,
        }
      : {};

    // Type-safe props spreading
    const componentProps = animate
      ? ({ ...motionProps, ...props } as HTMLMotionProps<"div">)
      : props;

    return (
      <CardComponent
        ref={ref}
        className={cn(neoCardVariants({ variant, padding, hover, interactive, className }))}
        {...componentProps}
      >
        {/* Header section */}
        {header && (
          <div className={cn(
            "border-b border-neo-taupe/20",
            padding === 'none' ? 'p-6 pb-4' : 'mb-4 pb-4'
          )}>
            {header}
          </div>
        )}

        {/* Main content */}
        <div>
          {children}
        </div>

        {/* Footer section */}
        {footer && (
          <div className={cn(
            "border-t border-neo-taupe/20",
            padding === 'none' ? 'p-6 pt-4' : 'mt-4 pt-4'
          )}>
            {footer}
          </div>
        )}
      </CardComponent>
    );
  }
);

NeoCard.displayName = 'NeoCard';

/**
 * NeoCardHeader - Separate header component for more control
 */
export const NeoCardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1.5", className)}
    {...props}
  />
));
NeoCardHeader.displayName = 'NeoCardHeader';

/**
 * NeoCardTitle - Title component with proper typography
 */
export const NeoCardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-playfair font-semibold leading-none tracking-tight text-neo-champagne",
      className
    )}
    {...props}
  />
));
NeoCardTitle.displayName = 'NeoCardTitle';

/**
 * NeoCardDescription - Description component with muted styling
 */
export const NeoCardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neo-taupe font-poppins", className)}
    {...props}
  />
));
NeoCardDescription.displayName = 'NeoCardDescription';

/**
 * NeoCardContent - Content wrapper component
 */
export const NeoCardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-neo-champagne font-poppins", className)}
    {...props}
  />
));
NeoCardContent.displayName = 'NeoCardContent';

/**
 * NeoCardFooter - Footer wrapper component
 */
export const NeoCardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", className)}
    {...props}
  />
));
NeoCardFooter.displayName = 'NeoCardFooter';
