import { tokens } from "../defaultTokens";

 const button = {
  name: "button",
  type: "component",
  variants: {
    default: {
      "--flash-ui-button-bg-color": `${tokens.color.main.default.hex}`,
      "--flash-ui-button-text-color": `${tokens.color.white[100].hex}`,
    },
    solid: {
      "--flash-ui-button-bg-color": `${tokens.color.main.primary.hex}`,
      "--flash-ui-button-text-color": `${tokens.color.white[100].hex}`,
    },
  },

  size: {
    xs: {
      "--flash-ui-button-padding-xs": `${tokens.spacing[5].value}`,
      "--flash-ui-button-height-xs": `${tokens.spacing[10].value}`,
    },
    sm: {
      "--flash-ui-button-padding-xs": `${tokens.spacing[5].value}`,
      "--flash-ui-button-height-xs": `${tokens.spacing[11].value}`,
    },
  },
};

export default button
