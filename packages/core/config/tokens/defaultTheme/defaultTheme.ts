import { DefaultThemeTypes } from "../types/types";
import { button } from "../defaultsComponentsTokens";
import { tokens } from "../defaultTokens";

export const flashDefaultTheme: DefaultThemeTypes  = {
  globalTokens: {
    name: "tokens",
    version: " 0.0.1",
    tokens,
  },
  components: {
    name: "components",
    version: " 0.0.1",
    button,
  },
};
