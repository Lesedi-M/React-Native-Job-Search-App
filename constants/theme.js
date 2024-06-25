const COLORS = {
  primary: "#0070f3", // Blue for primary elements, similar to the Next.js accent color
  secondary: "#FFFFFF", // White for secondary elements and text
  tertiary: "#CCCCCC", // Light gray for less prominent text

  gray: "#333333", // Dark gray for additional text elements
  gray2: "#000000", // Black for backgrounds and secondary elements

  white: "#FFFFFF", // White for the main background and text
  lightWhite: "#CCCCCC", // Light gray for subtle backgrounds and highlights

  accent: "#0070f3", // Blue for accents and important highlights, same as primary
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",  
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1, // Reduced opacity for a more subtle shadow
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2, // Reduced opacity for a more subtle shadow
    shadowRadius: 6,
    elevation: 4,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
