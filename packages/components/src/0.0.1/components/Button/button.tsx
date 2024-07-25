"use client";

import React from "react";
import { useNoria } from "@flash-ui/config";
import { ThemeProvider } from "styled-components";
import { WrapperButton } from "./styles/button-style";
import { ButtonProps } from "./types/props";

type NewButtonProps = Omit<ButtonProps, "theme">;


const Button = React.forwardRef<HTMLButtonElement, NewButtonProps>(
  ({ children, ...rest }, ref) => {
    const { themes } = useNoria();

    return (
      <WrapperButton {...ref} {...rest} theme={themes.components}>
        {children}
      </WrapperButton>
    );
  }
);

export default Button;
