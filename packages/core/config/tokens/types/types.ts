import { button } from "../defaultsComponentsTokens";
import { tokens } from "../defaultTokens";

export type ColorToken = {
  hex: string;
  rgba: string;
  token: string;
};

export type NewColorVariant = {
  hex: string;
  rgba: string;
};


type ColorVariant = {
  [key: string]: ColorToken;
};

export type ColorType = {
  name: string;
  type: string;
  [key: string]: ColorVariant | ColorToken | string;
};

export type ColorVariantType = {
  [key: string]: ColorVariant | ColorToken;
};

type SpacingType = {
  [key: number]: {
    name: string;
    type: string;
    value: string;
    token: string;
  };
};

type TokenType = {
  [key: string]: {
    name: string;
    type: string;
    value: string;
    token: string;
  };
};


type FontWeightType = {
  [key: string]: {
    name: string;
    type: string;
    value: number;
    token: string;
  };
};


type ComponentType = {
  name: string;
  type: string;
  props: {
    [key: string]: string;
  };
};

type Components = {
  [key: string]: ComponentType;
};

type DefaultThemeTypes = {
  globalTokens: {
    name: string;
    version: string;
    tokens: typeof tokens;
  };
  components: {
    name: string;
    version: string;
    button: typeof button
  };
};

export type { DefaultThemeTypes }
