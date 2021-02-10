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
  xl: 30,
  xxl: 50
};

const text = {
  headline: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontWeight: "bold",
    fontSize: 32,
    color: colors.mainDark
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
  },
  label: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    fontSize: 18,
    padding: spacing.s,
    color: colors.mainDark
  },
  input: {
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto",
    borderColor: colors.altDark,
    borderBottomWidth: 1,
    borderWidth: 1,
    style: {
      minHeight: spacing.xxl,
      marginBottom: spacing.m,
      marginTop: spacing.m,
      padding: spacing.s
    }
  }
};

const screen = {
  // flex: 1,
  flexDirection: "column",
  width: 400,
  margin: spacing.l
};

export const theme = {
  colors,
  spacing,
  text,
  screen
};
