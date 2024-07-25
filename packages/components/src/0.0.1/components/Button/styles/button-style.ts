import { ButtonProps } from "../types/props";
import styled from "styled-components";
import { buttonVariant, sizeVariant } from './variants'

export const WrapperButton: React.FC<ButtonProps> = styled.button<ButtonProps>`

  width: ${(props) => props.fullWidth ? '100%' : 'auto'};
  cursor: pointer;

  ${({ variant }) => buttonVariant[variant ? variant : "default"]};
  ${({ size }) => sizeVariant[size ? size : "md"]};

  transition: all 0.3s ease-in-out;
  &:hover {
    filter: brightness(0.8);
  }
`;
