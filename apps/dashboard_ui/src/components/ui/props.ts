

export type ButtonProps = {
  $variant: "default" | "primary" | "secondary" | "outline" | string;
  size?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  boxShadow?: string;
  text?:string;
  onClick?: () => void;
}
