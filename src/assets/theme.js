// Constants
export const darkPrimaryColor = '#0097A7';
export const lightPrimaryColor = '#B2EBF2';
export const primaryColor = '#00BCD4';
export const textIconsColor = '#FFFFFF';
export const accentColor = '#448AFF';
export const primaryTextColor = '#212121';
export const secondaryTextColor = '#757575';
export const dividerColor = '#BDBDBD';

export const MOBILE = '768px';

// Theme
export const theme = {
  dark: {
    colors: {
      body: darkPrimaryColor,
      footer: primaryColor,
      header: darkPrimaryColor,
      headerTitle: lightPrimaryColor,
      buttonBorder: dividerColor,
      buttonText: textIconsColor,
      buttonBg: lightPrimaryColor,
      buttonTextHover: textIconsColor,
      buttonBgHover: lightPrimaryColor,
      footerBg: lightPrimaryColor,
      headerBg: lightPrimaryColor,
    },
  },
  light: {
    colors: {
      body: lightPrimaryColor,
      footer: primaryColor,
      header: lightPrimaryColor,
      headerTitle: primaryTextColor,
      buttonBorder: dividerColor,
      buttonText: primaryTextColor,
      buttonBg: darkPrimaryColor,
      buttonTextHover: lightPrimaryColor,
      buttonBgHover: accentColor,
      footerBg: darkPrimaryColor,
      headerBg: darkPrimaryColor,
    },
  },
};
