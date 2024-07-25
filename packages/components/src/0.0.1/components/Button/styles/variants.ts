
import { ButtonProps } from "../types/props";
import { convertColor } from "../../../../utils/color-convert";
import { css, RuleSet } from "styled-components";

type VariantType = {
  [key: string]: RuleSet<ButtonProps>;
};

export const buttonVariant: VariantType = {
  default: css<ButtonProps>`
    background-color: ${(props) => props.theme.button.variants.default["--flash-ui-button-bg-color"]};
    color: ${(props) => props.theme.button.variants.default["--flash-ui-button-text-color"]};
  `,
  solid: css<ButtonProps>`
    background-color: ${(props) => props.theme.button.variants.solid["--flash-ui-button-bg-color"]};
    color: ${(props) => props.theme.button.variants.solid["--flash-ui-button-text-color"]};
  `,
  // secondary: css<ButtonProps>`
  //   background-color: ${(props) =>
  //     props.color || props.theme.tokens.color.main.secondary.hex};
  //   color: ${(props) => props.theme.tokens.color.white[50].hex};
  // `,
  // outline: css<ButtonProps>`
  //   background-color: transparent;
  //   color: ${(props) => props.color || props.theme.tokens.color.main.default.hex};
  //   border: 1px solid ${(props) => props.color || props.theme.tokens.color.main.default.hex};
  // `,
  // light: css<ButtonProps>`
  //   background-color: ${(props) =>
  //     convertColor(props.color).rgbaWithAlpha ||
  //     convertColor(props.theme.tokens.color.main.default.hex).rgbaWithAlpha};
  //   color: ${(props) =>
  //     convertColor(props.color).rgba ||
  //     convertColor(props.theme.tokens.color.main.default.hex).rgba};
  // `,
};
 
export const sizeVariant: VariantType = {
  // xs: css<ButtonProps>`
  //   padding: ${( props ) => props.theme.tokens.spacing.xs.value}  ${( props ) => props.theme.tokens.spacing.lg.value};
  //   height: ${( props ) => props.theme.tokens.spacing.xlg.value};
  //   font-size: ${( props ) => props.theme.tokens.fontSize.sm.value};
  // `,
  // sm: css<ButtonProps>`
  //   padding: 4px 24px ;  //ajusting the tokens size and spacing
  //   height: 32px;
  //   font-size: 0.875rem; // 14
  // `,
  // md: css<ButtonProps>`
  //   padding: ${( props ) => props.theme.tokens.spacing.xs.value} ${( props ) => props.theme.tokens.spacing.xlg.value};
  //    height: ${( props ) => props.theme.tokens.size.sm.value};
  //   font-size: ${( props ) => props.theme.tokens.fontSize.md.value};
  // `,
  // lg: css<ButtonProps>`
  //   padding: ${( props ) => props.theme.tokens.spacing.lg.value} ${( props ) => props.theme.tokens.spacing.xlg.value};
  //   height: ${( props ) => props.theme.tokens.size.lg.value};
  //   font-size: ${( props ) => props.theme.tokens.fontSize.lg.value};
  // `,
  // xlg: css<ButtonProps>`
  //   padding: ${( props ) => props.theme.tokens.spacing.xlg.value} ${( props ) => props.theme.tokens.spacing.xlg.value};
  //   height: ${( props ) => props.theme.tokens.size.xlg.value};
  //   font-size: ${( props ) => props.theme.tokens.fontSize.xlg.value};
  // `,
};