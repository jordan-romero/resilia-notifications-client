import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFDF9",
    black: "#0e131f",
    primary: "#d9594c",
    primaryDark: "#972c20",
    secondary: "#FBF2B1",
    secondaryLight: "#fefcec",
    gray: "#36313D",
    grayLight: "#f4f5f6"
  },
  fontSizes: {
    smaller: "1rem",
    small: "1.5rem",
    medium: "2rem",
    large: "3rem"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;