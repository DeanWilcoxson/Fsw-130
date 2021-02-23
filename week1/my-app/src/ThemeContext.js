import React from "react";
export const themes = {
  light: {
    boxShadow: "2px 2px 2px",
    backgroundColor: "#f5f5f5",
    color: "#00008b",
  },
  dark: {
    boxShadow: "#000000 4px 2px 4px",
    backgroundColor: "#00008b",
    color: "#ffffff",
  },
};

export const ThemeContext = React.createContext();
