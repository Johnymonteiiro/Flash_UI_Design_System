import { CodePreview } from "@/app/(Dashboard)/components/codePreview/code";
import { ButtonProps } from "@/components/ui/props";
import { activeProps } from "@/redux/features/componentsSlice";
import { useAppSelector } from "@/redux/hook/hook";
import { Button } from "@noria/react";

interface ButtonRenderProps {
  buttonProps: {
    variant: string;
    color: string;
    padding: string;
    borderRadius: string;
    size: string;
    text: string;
    boxShadow: string;
  };
}

export function ButtonRender({ buttonProps }: ButtonRenderProps) {
  const active_props = useAppSelector(activeProps);
  const newButtonProps: ButtonProps = {
    $variant: buttonProps.variant,
    ...buttonProps,
  };

  const code = `
   import React from "react";
   import { Button } from "@noria/react";

   function Preview() {
     return <Button variant="${buttonProps.variant}" ${active_props[0].active ? `color="${buttonProps.color}"` : ""}>${buttonProps.text}</Button>;
    }
  `;

  return (
    <div className="w-full rounded px-5 mr-8">
      <div className="flex w-full justify-evenly items-center rounded px-5 py-24 bg-zinc-900 ">
        <Button {...newButtonProps}>{buttonProps.text}</Button>
      </div>

      <div className="w-full">
        <CodePreview code={code} language="javascript" />
      </div>
    </div>
  );
}
