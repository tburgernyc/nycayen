"use client";

import { forwardRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Search Input variants
 */
const neoSearchInputVariants = cva(
  "w-full font-inter transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neo-taupe/50",
  {
    variants: {
      variant: {
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed focus:shadow-neo-focus border border-neo-steel/30 focus:border-neo-gold/50",
        elevated: "bg-neo-steel text-neo-champagne shadow-neo-flat focus:shadow-neo-elevated border border-neo-steel/30 focus:border-neo-gold/50",
      },
      size: {
        sm: "pl-9 pr-9 py-2 text-sm rounded-neo-sm",
        md: "pl-10 pr-10 py-3 text-base rounded-neo-md",
        lg: "pl-12 pr-12 py-4 text-lg rounded-neo-lg",
      },
    },
    defaultVariants: {
      variant: "pressed",
      size: "md",
    },
  }
);

/**
 * NeoSearchInput Props Interface
 */
export interface NeoSearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof neoSearchInputVariants> {
  /**
   * Callback when search value changes (debounced)
   */
  onSearch?: (value: string) => void;

  /**
   * Debounce delay in milliseconds
   * @default 300
   */
  debounceDelay?: number;

  /**
   * Show loading indicator
   * @default false
   */
  isLoading?: boolean;

  /**
   * Callback when clear button is clicked
   */
  onClear?: () => void;
}

/**
 * NeoSearchInput Component
 *
 * A specialized search input with debounced search, clear button, and loading states.
 * Uses pressed (inset) shadow style by default.
 *
 * @example
 * ```tsx
 * // Basic search input
 * <NeoSearchInput
 *   placeholder="Search services..."
 *   onSearch={(value) => console.log('Search:', value)}
 * />
 *
 * // With loading state
 * <NeoSearchInput
 *   placeholder="Search..."
 *   isLoading={isSearching}
 *   onSearch={handleSearch}
 * />
 *
 * // Custom debounce delay
 * <NeoSearchInput
 *   placeholder="Search..."
 *   debounceDelay={500}
 *   onSearch={handleSearch}
 * />
 * ```
 */
export const NeoSearchInput = forwardRef<HTMLInputElement, NeoSearchInputProps>(
  (
    {
      className,
      variant,
      size,
      onSearch,
      debounceDelay = 300,
      isLoading = false,
      onClear,
      value: controlledValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

    // Use controlled value if provided, otherwise use internal state
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const hasValue = String(value).length > 0;

    // Debounced search handler
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        // Update internal state if not controlled
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }

        // Call onChange if provided
        if (onChange) {
          onChange(e);
        }

        // Clear existing timer
        if (debounceTimer) {
          clearTimeout(debounceTimer);
        }

        // Set new timer for debounced search
        if (onSearch) {
          const timer = setTimeout(() => {
            onSearch(newValue);
          }, debounceDelay);
          setDebounceTimer(timer);
        }
      },
      [controlledValue, onChange, onSearch, debounceDelay, debounceTimer]
    );

    // Clear handler
    const handleClear = useCallback(() => {
      // Clear internal state if not controlled
      if (controlledValue === undefined) {
        setInternalValue('');
      }

      // Call onClear if provided
      if (onClear) {
        onClear();
      }

      // Call onSearch with empty string if provided
      if (onSearch) {
        onSearch('');
      }
    }, [controlledValue, onClear, onSearch]);

    return (
      <div className="relative w-full">
        {/* Search icon */}
        <div className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 text-neo-taupe pointer-events-none",
          size === 'sm' && "left-2.5",
          size === 'lg' && "left-4"
        )}>
          <Search className={cn(
            "h-4 w-4",
            size === 'sm' && "h-3.5 w-3.5",
            size === 'lg' && "h-5 w-5"
          )} />
        </div>

        {/* Input field */}
        <input
          ref={ref}
          type="search"
          value={value}
          onChange={handleChange}
          className={cn(neoSearchInputVariants({ variant, size, className }))}
          {...props}
        />

        {/* Loading spinner or clear button */}
        <div className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2",
          size === 'sm' && "right-2.5",
          size === 'lg' && "right-4"
        )}>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Loader2 className={cn(
                  "h-4 w-4 animate-spin text-neo-gold",
                  size === 'sm' && "h-3.5 w-3.5",
                  size === 'lg' && "h-5 w-5"
                )} />
              </motion.div>
            ) : hasValue ? (
              <motion.button
                key="clear"
                type="button"
                onClick={handleClear}
                className="text-neo-taupe hover:text-neo-gold transition-colors duration-200 focus:outline-none focus:text-neo-gold"
                aria-label="Clear search"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className={cn(
                  "h-4 w-4",
                  size === 'sm' && "h-3.5 w-3.5",
                  size === 'lg' && "h-5 w-5"
                )} />
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

NeoSearchInput.displayName = 'NeoSearchInput';
