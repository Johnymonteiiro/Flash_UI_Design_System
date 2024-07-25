
interface ColorConversionResult {
  hex: string;
  rgba: string;
  rgbaWithAlpha: string;
}

function hexToRgba(hex: string, alpha: number = 0.1): ColorConversionResult {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse r, g, b values
  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length <= 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error("Invalid hex color");
  }

  const rgba = `rgba(${r}, ${g}, ${b}, 1)`;
  const rgbaWithAlpha = `rgba(${r}, ${g}, ${b}, ${alpha})`;
  return {
    hex: `#${hex}`,
    rgba,
    rgbaWithAlpha,
  };
}

function isRgba(color: string): boolean {
  const rgbaRegex =
    /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0?\.\d+)\)$/;
  return rgbaRegex.test(color);
}

function adjustRgbaAlpha(rgba: string, alpha: number = 0.1): string {
  const rgbaParts = rgba.match(
    /(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0?\.\d+)/
  );
  if (rgbaParts) {
    const [r, g, b] = rgbaParts.slice(1, 4);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return rgba; // Return the original if parsing fails
}

export function convertColor(color: string | undefined): ColorConversionResult {
  if (color) {
    if (isRgba(color)) {
      const adjustedRgba = adjustRgbaAlpha(color, 0.1);
      return {
        hex: "", // Cannot convert RGBA to HEX without assumptions
        rgba: color,
        rgbaWithAlpha: adjustedRgba,
      };
    } else {
      return hexToRgba(color, 0.1);
    }
  }
  return {
    hex: "",
    rgba: "",
    rgbaWithAlpha: "",
  };
}
