"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * NeoTooltip Props Interface
 */
export interface NeoTooltipProps {
  /**
   * Tooltip content
   */
  content: React.ReactNode;

  /**
   * Element that triggers the tooltip
   */
  children: React.ReactElement;

  /**
   * Tooltip position
   * @default 'top'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Delay before showing tooltip (ms)
   * @default 200
   */
  delay?: number;

  /**
   * Custom className for tooltip
   */
  className?: string;
}

/**
 * NeoTooltip Component
 *
 * A small elevated tooltip card that appears on hover.
 * Automatically positioned relative to trigger element with arrow pointer.
 *
 * @example
 * ```tsx
 * <NeoTooltip content="Click to favorite">
 *   <NeoIconButton icon={<Heart />} />
 * </NeoTooltip>
 *
 * <NeoTooltip content="Premium feature" position="right">
 *   <span className="text-neo-gold">⭐ Premium</span>
 * </NeoTooltip>
 * ```
 */
export const NeoTooltip: React.FC<NeoTooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  // Position-specific classes
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  // Arrow position classes
  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
    left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
    right: 'right-full top-1/2 -translate-y-1/2 -mr-1',
  };

  // Arrow rotation
  const arrowRotation = {
    top: 'rotate-180',
    bottom: '',
    left: 'rotate-90',
    right: '-rotate-90',
  };

  // Animation variants
  const tooltipVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0,
      x: position === 'left' ? 5 : position === 'right' ? -5 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(
              "absolute z-50 pointer-events-none",
              positionClasses[position]
            )}
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <div
              className={cn(
                "bg-neo-steel px-3 py-2 rounded-neo-md shadow-neo-elevated",
                "text-sm text-neo-champagne font-poppins whitespace-nowrap",
                "max-w-xs",
                className
              )}
            >
              {content}
            </div>

            {/* Arrow */}
            <div
              className={cn(
                "absolute w-0 h-0",
                "border-l-[6px] border-l-transparent",
                "border-r-[6px] border-r-transparent",
                "border-t-[6px] border-t-neo-steel",
                arrowClasses[position],
                arrowRotation[position]
              )}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

NeoTooltip.displayName = 'NeoTooltip';
