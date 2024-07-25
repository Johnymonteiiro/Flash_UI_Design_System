import { Theme } from '@/types/types';
import tokens from '../tokens/tokens.json';


const theme = {
  tokens: {
    color: tokens.tokens.color,
    spacing: tokens.tokens.spacing,
    fontSize: tokens.tokens.fontSize,
    borderRadius: tokens.tokens.borderRadius,
    shadow: tokens.tokens.shadow,
    size: tokens.tokens.size,
  },
  components: {
    Button: tokens.components.Button
  }
};

export default theme;
export type { Theme };

