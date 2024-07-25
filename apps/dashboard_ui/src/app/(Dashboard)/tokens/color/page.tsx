"use client";

import { useRouter } from "next/navigation";
import { ColorVariantType, DefaultThemeTypes } from "@/types/types";
import { useState } from "react";
import ColorItem from "./colorItem";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useNoria } from "@flash-ui/config";
import { Button } from "@flash-ui/components";

export default function Color() {

  const { themes } = useNoria()

  const [colors, setColors] = useState<DefaultThemeTypes["globalTokens"]["tokens"]["color"]>(
    themes.globalTokens.tokens.color
  );
     const { toast } = useToast();

  const [designSystem, setDesignSystem] = useState<DefaultThemeTypes>(themes);

  const handleTokenChange = (
    section: keyof DefaultThemeTypes["globalTokens"]["tokens"],
    key: string,
    value: ColorVariantType
  ) => {
    setDesignSystem((prevDesignSystem) => ({
      ...prevDesignSystem,
      tokens: {
        ...prevDesignSystem.globalTokens.tokens,
        [section]: {
          ...prevDesignSystem.globalTokens.tokens[section],
          [key]: value,
        },
      },
    }));
  };

    const handleSave = async () => {

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(designSystem),
        });
        if (res.ok) {
                 toast({
                   title: "Success",
                   description: `Date: ${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`,
                   action: (
                     <ToastAction
                       className="bg-blue-500 border-0 hover:bg-blue-600"
                       altText="Goto schedule to undo"
                     >
                       Close
                     </ToastAction>
                   ),
                 });
                 console.log(res.json());

        } else {
          alert("Failed to save design system");
          console.error("Failed to save design system:", res.statusText);
        }
      } catch (error) {
        alert("An error occurred while saving the design system");
        console.error(
          "An error occurred while saving the design system:",
          error
        );
      }
    };


  return (
    <section className="p-8 w-full">
      <div className="sticky top-0 flex z-20 bg-background justify-between items-center h-20">
        <h1 className="text-3xl">Color</h1>

        <Button onClick={handleSave}>Save</Button>
      </div>
      <div className="mt-20 w-full">
        {Object.entries(colors).map(([colorName, variants]) => (
          <div key={colorName}>
            <h2 className="text-lg">{String(colorName).toLocaleUpperCase()}</h2>
            <ColorItem
              setColors={setColors}
              colorName={colorName}
              variants={variants as any}
              handleTokenChange={handleTokenChange}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
