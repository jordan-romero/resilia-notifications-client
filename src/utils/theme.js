import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFDF9",
    black: "#0e131f",
    primary: "#d9594c",
    secondary: "#FBF2B1",
    secondaryLight: "#fefcec",
    gray: "#36313D",
    grayLight: "#f4f5f6"
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;