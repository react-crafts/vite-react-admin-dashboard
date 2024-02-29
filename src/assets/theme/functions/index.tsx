
type RGBColor = { red: number; green: number; blue: number; alpha?: number };



export function pxToRem(pxValue: number, baseFontSize = 16): string {
  if (typeof pxValue !== 'number') {
    throw new Error('pxValue must be a number');
  }

  return `${pxValue / baseFontSize}rem`;
}

export function rgbToHex(color: RGBColor): string {
  if (
    typeof color.red !== 'number' ||
    typeof color.green !== 'number' ||
    typeof color.blue !== 'number' ||
    (color.alpha !== undefined && typeof color.alpha !== 'number')
  ) {
    throw new Error('Color components must be numbers');
  }

  const rgbValues = [color.red, color.green, color.blue].map((value) =>
    value.toString(16).padStart(2, '0')
  );

  if (color.alpha !== undefined) {
    const alpha = Math.round(color.alpha * 255).toString(16).padStart(2, '0');
    return `#${rgbValues.join('')}${alpha}`;
  }

  return `#${rgbValues.join('')}`;
}