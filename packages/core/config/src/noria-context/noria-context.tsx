"use client";

import { flashDefaultTheme } from "../../tokens/defaultTheme/defaultTheme";
import { createContext, useContext } from "react";

interface NoriaContextProps {
  themes: typeof flashDefaultTheme;
  setThemes: React.Dispatch<React.SetStateAction<typeof flashDefaultTheme>>
}

export const NoriaContext = createContext<NoriaContextProps>({} as NoriaContextProps);

export const useNoria = () => {

  //check framework
  // checkInitialization()
  const context = useContext(NoriaContext);
  if (!context) {
    throw new Error("useNoria must be used within a NoriaProvider");
  }
  return context;
};


export default { NoriaContext, useNoria}