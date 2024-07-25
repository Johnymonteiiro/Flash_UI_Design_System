import React, { ButtonHTMLAttributes } from "react";
import { DefaultThemeTypes } from "@flash-ui/config";

export type ButtonVariant = "default" | "primary" | "secondary" | "outline" ;
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 
  children?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: ButtonVariant
  color?: string;
  size?:ButtonSize;
  fontSize?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xlg';
  loading?: boolean;
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'full';
  border?: number | 'none' | 'xs' | 'sm' | 'md' | 'border';
  fullWidth?:'fullWidth';
  isIcon?:boolean; 
  isDisabled?:boolean;
  leftSection?: React.ReactNode;
  isPressed?:boolean;
  rightSection?: React.ReactNode;
  theme: DefaultThemeTypes["components"]

  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
