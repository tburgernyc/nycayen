"use client";

import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * Input variants using class-variance-authority
 */
const neoInputVariants = cva(
  // Base classes applied to all inputs
  "w-full font-inter transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neo-taupe/50",
  {
    variants: {
      /**
       * Visual variant - inputs typically use pressed (inset) style
       */
      variant: {
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed focus:shadow-neo-focus border border-neo-steel/30 focus:border-neo-gold/50",
        elevated: "bg-neo-steel text-neo-champagne shadow-neo-flat focus:shadow-neo-elevated border border-neo-steel/30 focus:border-neo-gold/50",
      },
      /**
       * Size variants
       */
      size: {
        sm: "px-3 py-2 text-sm rounded-neo-sm",
        md: "px-4 py-3 text-base rounded-neo-md",
        lg: "px-5 py-4 text-lg rounded-neo-lg",
      },
    },
    defaultVariants: {
      variant: "pressed",
      size: "md",
    },
  }
);

/**
 * NeoInput Props Interface
 */
export interface NeoInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof neoInputVariants> {
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Helper text to display below input
   */
  helperText?: string;
  
  /**
   * Icon to display at the start of the input
   */
  leadingIcon?: React.ReactNode;
  
  /**
   * Icon to display at the end of the input
   */
  trailingIcon?: React.ReactNode;
  
  /**
   * Make the label required (adds asterisk)
   * @default false
   */
  required?: boolean;
}

/**
 * NeoInput Component
 * 
 * A neomorphic input field with labels, icons, error states, and password toggle.
 * Uses pressed (inset) shadow style by default for form fields.
 * 
 * @example
 * ```tsx
 * // Basic input
 * <NeoInput
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 * />
 * 
 * // Input with leading icon
 * <NeoInput
 *   label="Search"
 *   leadingIcon={<Search className="h-4 w-4" />}
 *   placeholder="Search services..."
 * />
 * 
 * // Input with error
 * <NeoInput
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters"
 * />
 * 
 * // Input with helper text
 * <NeoInput
 *   label="Username"
 *   helperText="Choose a unique username"
 * />
 * 
 * // Required input
 * <NeoInput
 *   label="Full Name"
 *   required
 * />
 * ```
 */
export const NeoInput = forwardRef<HTMLInputElement, NeoInputProps>(
  (
    {
      className,
      variant,
      size,
      label,
      error,
      helperText,
      leadingIcon,
      trailingIcon,
      required,
      type,
      id,
      ...props
    },
    ref
  ) => {
    // State for password visibility toggle
    const [showPassword, setShowPassword] = useState(false);
    
    // Generate unique ID if not provided
    const inputId = id || `neo-input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Determine if this is a password field
    const isPasswordField = type === 'password';
    
    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    // Determine actual input type
    const inputType = isPasswordField && showPassword ? 'text' : type;
    
    // Password toggle icon
    const passwordToggleIcon = showPassword ? (
      <EyeOff className="h-4 w-4" />
    ) : (
      <Eye className="h-4 w-4" />
    );
    
    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-neo-champagne font-inter"
          >
            {label}
            {required && <span className="text-neo-gold ml-1" aria-label="required">*</span>}
          </label>
        )}
        
        {/* Input container */}
        <div className="relative">
          {/* Leading icon */}
          {leadingIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neo-taupe pointer-events-none">
              {leadingIcon}
            </div>
          )}
          
          {/* Input field */}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={cn(
              neoInputVariants({ variant, size }),
              leadingIcon && "pl-10",
              (trailingIcon || isPasswordField) && "pr-10",
              error && "border-red-500/50 focus:border-red-500",
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            required={required}
            {...props}
          />
          
          {/* Trailing icon or password toggle */}
          {(trailingIcon || isPasswordField) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isPasswordField ? (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-neo-taupe hover:text-neo-gold transition-colors duration-200 focus:outline-none focus:text-neo-gold"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {passwordToggleIcon}
                </button>
              ) : (
                <div className="text-neo-taupe pointer-events-none">
                  {trailingIcon}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Error message */}
        {error && (
          <motion.p
            id={`${inputId}-error`}
            className="text-sm text-red-400 font-inter"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            role="alert"
          >
            {error}
          </motion.p>
        )}
        
        {/* Helper text */}
        {!error && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-sm text-neo-taupe font-inter"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

NeoInput.displayName = 'NeoInput';
