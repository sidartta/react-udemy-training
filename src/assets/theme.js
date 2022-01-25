// Brand color definition
const brand = {
  hue: 200,
  saturation: 1,
  lightness: 0.5,
};

// Theme
export const theme = {
  light: {
    palette: {
      brand: `hsl(${brand.hue} ${brand.saturation * 100}% ${
        brand.lightness * 100
      }%)`,
      text1: `hsl(${brand.hue} ${brand.saturation * 100}% 10%)`,
      text2: `hsl(${brand.hue} 30% 30%)`,
      surface1: `hsl(${brand.hue} 25% 90%)`,
      surface2: `hsl(${brand.hue} 20% 99%)`,
      surface3: `hsl(${brand.hue} 20% 92%)`,
      surface4: `hsl(${brand.hue} 20% 85%)`,
      surfaceShadow: `${brand.hue} 10% ${(brand.lightness * 100) / 5}%)`,
      shadowStrength: 0.02,
    },
  },
  dark: {
    palette: {},
  },
};

export const MOBILE = '768px';
