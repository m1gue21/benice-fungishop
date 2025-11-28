/**
 * Utility functions for generating legible text styles
 */

export interface TextStyleOptions {
  primaryColor?: string;
  fontWeight?: number;
  strokeWidth?: number;
}

/**
 * Generates inline style for legible text with shadow and stroke
 */
export function getLegibleTextStyle(
  options: TextStyleOptions = {}
): string {
  const {
    primaryColor = '#7a9b5a',
    fontWeight = 500,
    strokeWidth = 0.3
  } = options;

  return `
    text-shadow: 0 3px 8px rgba(255,255,255,1), 
                 0 2px 4px ${primaryColor}60, 
                 0 1px 2px rgba(0,0,0,0.2), 
                 -1px -1px 0 rgba(0,0,0,0.3), 
                 1px -1px 0 rgba(0,0,0,0.3), 
                 -1px 1px 0 rgba(0,0,0,0.3), 
                 1px 1px 0 rgba(0,0,0,0.3);
    font-weight: ${fontWeight};
    -webkit-text-stroke: ${strokeWidth}px rgba(0,0,0,0.4);
  `.trim();
}

/**
 * Generates inline style for legible description text
 */
export function getLegibleDescriptionStyle(): string {
  return `
    text-shadow: 0 3px 6px rgba(255,255,255,1), 
                 0 1px 3px rgba(0,0,0,0.15), 
                 -0.5px -0.5px 0 rgba(0,0,0,0.3), 
                 0.5px -0.5px 0 rgba(0,0,0,0.3), 
                 -0.5px 0.5px 0 rgba(0,0,0,0.3), 
                 0.5px 0.5px 0 rgba(0,0,0,0.3);
    -webkit-text-stroke: 0.2px rgba(0,0,0,0.4);
  `.trim();
}

/**
 * Generates inline style for legible price text
 */
export function getLegiblePriceStyle(primaryColor: string = '#7a9b5a'): string {
  return `
    color: ${primaryColor};
    text-shadow: 0 3px 6px rgba(255,255,255,1), 
                 0 2px 4px ${primaryColor}60, 
                 0 1px 2px rgba(0,0,0,0.2), 
                 -1px -1px 0 rgba(0,0,0,0.4), 
                 1px -1px 0 rgba(0,0,0,0.4), 
                 -1px 1px 0 rgba(0,0,0,0.4), 
                 1px 1px 0 rgba(0,0,0,0.4);
    font-weight: 600;
    -webkit-text-stroke: 0.4px rgba(0,0,0,0.5);
  `.trim();
}

/**
 * Generates inline style for heading text with shadow
 */
export function getHeadingTextStyle(): string {
  return `
    text-shadow: 0 2px 8px rgba(255,255,255,0.8);
  `.trim();
}

/**
 * Generates inline style for paragraph text with shadow
 */
export function getParagraphTextStyle(): string {
  return `
    text-shadow: 0 1px 4px rgba(255,255,255,0.9);
  `.trim();
}

