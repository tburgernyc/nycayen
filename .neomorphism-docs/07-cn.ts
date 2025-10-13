import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 * 
 * @param inputs - Class values to merge (strings, objects, arrays)
 * @returns Merged className string
 * 
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-neo-steel', { 'text-neo-gold': isActive })
 * // Returns: "px-4 py-2 bg-neo-steel text-neo-gold" (if isActive is true)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
