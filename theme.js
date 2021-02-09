import { Platform } from "react-native";
const palette = {
  grey50: "#F9FAFB",
  grey100: "#F3F4F6",
  grey200: "#E5E7EB",
  grey400: "#9CA3AF",
  grey500: "#6B7280",
  grey600: "#4B5563",
  grey900: "#111827"
};

const colors = {
  mainLight: palette.grey50,
  mainDark: palette.grey600,
  altLight: palette.grey100,
  altDark: palette.grey500,
  disabledBackground: palette.grey100,
  disabled: palette.grey200
};

const spacing = {
  s: 5,
  m: 10,
  l: 20,
  xl: 30
};

const text = {
  headline: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "bold",
    fontSize: 32
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    margin: spacing.s,
    color: colors.mainDark
  },
  subtitle: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    // padding: spacing.m,
    color: colors.mainDark
  },
  normal: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 18,
    padding: spacing.s,
    color: colors.altDark
  },
  note: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 14,
    padding: spacing.s,
    color: colors.altDark
  }
};

const screen = {
  flex: 1,
  width: 400,
  margin: spacing.l
};

export const theme = {
  colors,
  spacing,
  text,
  screen
};
