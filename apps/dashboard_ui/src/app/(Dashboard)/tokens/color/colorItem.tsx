"use client";

import { ColorToken, ColorType, ColorVariantType, DefaultThemeTypes } from "@/types/types";
import { Dispatch, SetStateAction, useState } from "react";
import { InputColor } from "./inputColor";

type ColorItemType = {
  colorName: string;
  variants: any 
  setColors: Dispatch<
    SetStateAction<DefaultThemeTypes["globalTokens"]["tokens"]["color"]>
  >;
  handleTokenChange: (
    section: keyof DefaultThemeTypes["globalTokens"]["tokens"],
    key: string,
    value: ColorVariantType
  ) => void;
};

export default function ColorItem({
  colorName,
  variants,
  setColors,
  handleTokenChange
}: ColorItemType) {
  const { name, type, ...rest } = variants;
  const [newColor, setNewColor] = useState({ hex: "", rgba: "" });

  const handleColorChange = (
    variantName: string,
    event: {
      hex: string;
      rgb: {
        r: number;
        g: number;
        b: number;
        a: number;
      };
    }
  ) => {
    const new_rgba = `rgba(${event.rgb.r}, ${event.rgb.g}, ${event.rgb.b}, ${event.rgb.a})`;
    const new_hex = event.hex;

    setNewColor({
      hex: new_hex,
      rgba: new_rgba,
    });

    const updatedVariant = {
      ...variants,
      [variantName]: {
        ...variants[variantName],
        hex: new_hex,
        rgba: new_rgba,
      } as ColorToken,
    };

    setColors((prevColors) => ({
      ...prevColors,
      [colorName]: updatedVariant as ColorType,
    }));

    handleTokenChange("color", colorName, updatedVariant);
  };

  return (
    <section className="py-8 w-full">
      {[rest].length > 0 && (
        <div>
          {[rest].map((variant, index) => (
            <div
              key={index}
              className="py-8 px-4 rounded mb-4 grid grid-cols-3 gap-8 justify-items-stretch bg-zinc-900"
            >
              {Object.entries(variant).map(([name, value], variantIndex) => (
                <div key={variantIndex}>
                  <p className="text-sm text-zinc-400">{String(name).toLocaleUpperCase()}</p>
                  <div className="pt-4 flex items-center">
                    <div
                      className="h-20 w-16 rounded-md mr-3"
                      style={{
                        backgroundColor: String(value.rgba),
                      }}
                    />
                    <div className="mt-1 relative">
                      <p className="text-zinc-500">Hex: {String(value.hex)}</p>
                      <p className="text-zinc-500 relative">
                        Rgba: {String(value.rgba)}
                      </p>
                      <InputColor
                        color={newColor.rgba}
                        onChange={(event) => handleColorChange(name, event)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
