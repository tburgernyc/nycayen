/**
 * Neomorphic Shadow Utility Functions
 * 
 * Provides consistent shadow generation for neomorphic UI components.
 * Uses dual-shadow technique (light + dark) for the characteristic soft 3D effect.
 * 
 * @module neo-shadows
 */

/**
 * Predefined neomorphic shadow combinations
 * Each shadow type has light and dark components for the dual-shadow effect
 * Updated for Earth Tone color palette
 */
export const neoShadows = {
  /** Subtle elevation - for minimal depth */
  flat: {
    light: '4px 4px 8px rgba(10, 9, 8, 0.4)',
    dark: '-4px -4px 8px rgba(34, 51, 59, 0.1)',
  },

  /** Standard elevation - for most floating elements */
  elevated: {
    light: '8px 8px 16px rgba(10, 9, 8, 0.6)',
    dark: '-8px -8px 16px rgba(34, 51, 59, 0.15)',
  },

  /** High elevation - for prominent floating elements */
  high: {
    light: '12px 12px 24px rgba(10, 9, 8, 0.7)',
    dark: '-12px -12px 24px rgba(34, 51, 59, 0.2)',
  },

  /** Pressed/inset - for input fields and inactive states */
  pressed: {
    light: 'inset 6px 6px 12px rgba(10, 9, 8, 0.6)',
    dark: 'inset -6px -6px 12px rgba(34, 51, 59, 0.15)',
  },

  /** Deep pressed/inset - for emphasized recessed areas */
  pressedDeep: {
    light: 'inset 8px 8px 16px rgba(10, 9, 8, 0.7)',
    dark: 'inset -8px -8px 16px rgba(34, 51, 59, 0.2)',
  },
} as const;

export type NeoShadowType = keyof typeof neoShadows;

/**
 * Combines light and dark shadows for the dual-shadow neomorphic effect
 * 
 * @param type - The type of shadow to generate
 * @returns CSS box-shadow string with dual shadows
 * 
 * @example
 * ```tsx
 * <div style={{ boxShadow: getShadow('elevated') }}>
 *   Elevated element
 * </div>
 * ```
 */
export function getShadow(type: NeoShadowType): string {
  const shadow = neoShadows[type];
  return `${shadow.light}, ${shadow.dark}`;
}

/**
 * Generates shadow for Framer Motion animations
 * Same as getShadow but with type safety for motion values
 * 
 * @param type - The type of shadow to generate
 * @returns CSS box-shadow string
 * 
 * @example
 * ```tsx
 * <motion.div
 *   animate={{ boxShadow: getAnimatedShadow('elevated') }}
 * >
 *   Animated element
 * </motion.div>
 * ```
 */
export function getAnimatedShadow(type: NeoShadowType): string {
  return getShadow(type);
}

/**
 * Creates a custom shadow with specified offset and opacity
 * 
 * @param offset - Shadow offset in pixels
 * @param opacity - Shadow opacity (0-1)
 * @param inset - Whether the shadow should be inset
 * @returns CSS box-shadow string
 * 
 * @example
 * ```tsx
 * const customShadow = createCustomShadow(10, 0.7, false);
 * ```
 */
export function createCustomShadow(
  offset: number,
  opacity: number,
  inset: boolean = false
): string {
  const insetPrefix = inset ? 'inset ' : '';
  const lightShadow = `${insetPrefix}${offset}px ${offset}px ${offset * 2}px rgba(10, 9, 8, ${opacity})`;
  const darkShadow = `${insetPrefix}-${offset}px -${offset}px ${offset * 2}px rgba(34, 51, 59, ${opacity * 0.25})`;

  return `${lightShadow}, ${darkShadow}`;
}

/**
 * Shadow variants for different interaction states
 * Use with Framer Motion variants
 */
export const shadowVariants = {
  /** Default resting state */
  rest: {
    boxShadow: getShadow('elevated'),
  },
  
  /** Hover state - enhanced shadow */
  hover: {
    boxShadow: '10px 10px 20px rgba(10,9,8,0.65), -10px -10px 20px rgba(34,51,59,0.18)',
  },
  
  /** Active/pressed state - inset shadow */
  tap: {
    boxShadow: getShadow('pressed'),
  },
  
  /** Focus state - with outline */
  focus: {
    boxShadow: '0 0 0 3px rgba(198,172,143,0.3), 8px 8px 16px rgba(10,9,8,0.6), -8px -8px 16px rgba(34,51,59,0.15)',
  },
} as const;

/**
 * Transition configuration for smooth shadow changes
 */
export const shadowTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
} as const;

/**
 * Complete Framer Motion configuration for neomorphic buttons
 * 
 * @example
 * ```tsx
 * <motion.button
 *   variants={buttonShadowAnimation}
 *   initial="rest"
 *   whileHover="hover"
 *   whileTap="tap"
 *   transition={shadowTransition}
 * >
 *   Click me
 * </motion.button>
 * ```
 */
export const buttonShadowAnimation = {
  rest: shadowVariants.rest,
  hover: {
    ...shadowVariants.hover,
    scale: 1.05,
  },
  tap: {
    ...shadowVariants.tap,
    scale: 0.95,
  },
} as const;

/**
 * Complete Framer Motion configuration for neomorphic cards
 */
export const cardShadowAnimation = {
  rest: shadowVariants.rest,
  hover: {
    boxShadow: getShadow('high'),
    scale: 1.02,
  },
} as const;

/**
 * Glow effect shadow (for special emphasis)
 * 
 * @param color - RGB color values (e.g., '197,164,109' for neo-gold)
 * @param intensity - Glow intensity (0-1)
 * @returns CSS box-shadow string with glow effect
 * 
 * @example
 * ```tsx
 * <div style={{ boxShadow: getGlowShadow('198,172,143', 0.4) }}>
 *   Glowing element
 * </div>
 * ```
 */
export function getGlowShadow(color: string = '198,172,143', intensity: number = 0.4): string {
  return `0 0 20px rgba(${color},${intensity}), ${getShadow('elevated')}`;
}

/**
 * Helper to get shadow for input focus state
 * Combines focus ring with elevated shadow
 */
export function getInputFocusShadow(): string {
  return shadowVariants.focus.boxShadow;
}
