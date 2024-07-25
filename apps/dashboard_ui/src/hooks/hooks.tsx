// @ts-nocheck

"use client";

import { ButtonProps } from "@/components/ui/props";
import { useNoria } from "@flash-ui/config";
import { useState } from "react";
import { Theme } from "@/themes/themes";

export function useComponent() {
  const { themes } = useNoria();

  const [designSystem, setDesignSystem] = useState<Theme["components"]>(themes);

  const handleComponentChange = (
    componentName: keyof Theme["components"],
    newProps: Partial<ButtonProps>
  ) => {
    setDesignSystem((prevDesignSystem) => ({
      ...prevDesignSystem,
      components: {
        ...prevDesignSystem.components,
        [componentName]: {
          ...prevDesignSystem.components[componentName],
          props: {
            ...prevDesignSystem.components[componentName].props,
            ...newProps,
          },
        },
      },
    }));
  };

  return { designSystem , handleComponentChange}
}
