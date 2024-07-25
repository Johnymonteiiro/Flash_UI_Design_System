"use client";

import React, { useState } from "react";
import { flashDefaultTheme } from "../../tokens/defaultTheme/defaultTheme";
import { DefaultThemeTypes } from "../../tokens/types";
import { initializeNoria, NoriaContext } from "..";
import { mergeTheme } from "./mergeThemes";
import StyledComponentsRegistry from "../lib/registry";


interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<DefaultThemeTypes>;
}

const NoriaProvider = ({ children, theme = {}}: ThemeProviderProps) => {

  //Noria Initialization
  initializeNoria();
  
  const mergedTheme = mergeTheme<DefaultThemeTypes>(
    flashDefaultTheme,
    theme
  );

  const [themes, setThemes] = useState<DefaultThemeTypes>(mergedTheme);

  console.log(themes)

  return (
    <NoriaContext.Provider value={{ themes, setThemes }}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </NoriaContext.Provider>
  );
};

export default  NoriaProvider;
