"use client";

import { CodePreview } from "@/app/(Dashboard)/components/codePreview/code";
import { ButtonProps } from "@/components/ui/props";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useComponent } from "@/hooks/hooks";
import { setActiveProps } from "@/redux/features/componentsSlice";
import { useAppDispatch } from "@/redux/hook/hook";
import { useNoria } from "@flash-ui/config";
import { Button } from "@flash-ui/components";
import { useState } from "react";
import { colors, variants } from "./collections";
import { ButtonRender } from "./buttonRender";
import { Slide } from "./button_size"
import RangeInputWithTooltip from "./slide";
import RangeInputSizeWithTooltip from "./sizeVa";
import { SliderInput } from "./inputSlider";

const sizeVariants = {
  xs: 100,
  sm: 200,
  md: 300,
  lg: 400,
  xl: 500,
};


export default function ButtonPage() {
  const { toast } = useToast();
  const { themes } = useNoria();
  const dispatch = useAppDispatch();

  const { designSystem, handleComponentChange } = useComponent();

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
      } else {
        alert("Failed to save design system");
        console.error("Failed to save design system:", res.statusText);
      }
    } catch (error) {
      alert("An error occurred while saving the design system");
      console.error("An error occurred while saving the design system:", error);
    }
  };

  const [buttonProps, setButtonProps] = useState(
    themes.components.button.variants
  );

  const handleInputChange = (name: string, value: string) => {
    setButtonProps((prevProps) => ({ ...prevProps, [name]: value }));
    handleComponentChange("Button", { [name]: value });
    dispatch(setActiveProps({ propsName: name }));
  };

    const [boxSize, setBoxSize] = useState<number>(sizeVariants["md"]);

    const handleSizeChange = (newSize: number) => {
      setBoxSize(newSize);
    };

    const [value, setValue] = useState(100);

  return (
    <section className="p-8 w-full">
      <div className="sticky top-0 flex z-20 bg-background justify-between items-center h-20">
        <h1 className="text-3xl">Button</h1>
        <Button onClick={handleSave}>
          Save
        </Button>
      </div>
      <div className="mt-10 w-full">
        <p className="text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quis
          ipsam adipisci velit, deserunt laudantium est rerum maxime ut
          voluptates ea vitae accusantium commodi hic voluptatum officiis
          distinctio corporis quo!
        </p>
        {/* <Slide min={0} max={100} step={1} />
        <RangeInputWithTooltip min={0} max={100} step={10} /> */}
        <RangeInputSizeWithTooltip
          sizes={sizeVariants}
          onSizeChange={handleSizeChange}
        />
        {/* <SliderInput value={value} onChange={e => setValue(Number(e.target.value))} />   */}
        {/* <div className="h-full mt-20 w-full flex">
          <ButtonRender buttonProps={buttonProps} />
          <div className="p-8 flex w-[300px] bg-zinc-900 rounded">
            <div>
              <h3 className="mb-3">Variants:</h3>
              <Select
                onValueChange={(value) => handleInputChange("variant", value)}
                defaultValue={buttonProps.variant}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Variants" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {variants.map((variant, index) => (
                      <SelectItem key={index} value={variant.type}>
                        {variant.type}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <h3 className="my-3">Colors:</h3>
              <div className="grid grid-cols-5 gap-1 items-center">
                {colors.map((color, index) => (
                  <button
                    onClick={() => handleInputChange("color", color.hex)}
                    key={index}
                    className={`h-8 w-8 rounded-sm`}
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <button
          style={{
            backgroundColor: buttonProps.default["--flash-ui-button-bg-color"],
            padding: "0px 16px",
            fontSize: 12,
            fontWeight: 500,
            height: 32,
            lineHeight: 1,
            marginRight: 20,
          }}
        >
          Button xs
        </button>

        <button
          style={{
            backgroundColor: buttonProps.default["--flash-ui-button-bg-color"],
            padding: "0px 18px",
            fontSize: 14,
            lineHeight: 1,
            height: 36,
            fontWeight: 500,
            marginRight: 20,
          }}
        >
          Button sm
        </button>

        <button
          style={{
            backgroundColor: buttonProps.default["--flash-ui-button-bg-color"],
            padding: "0px 20px",
            fontSize: 16,
            lineHeight: 1,
            height: 40,
            fontWeight: 400,
            marginRight: 20,
          }}
        >
          Button md
        </button>
        <button
          style={{
            backgroundColor: buttonProps.default["--flash-ui-button-bg-color"],
            padding: "0px 22px",
            fontSize: 20,
            lineHeight: 1,
            height: 44,
            fontWeight: 400,
            marginRight: 20,
          }}
        >
          Button lg
        </button>

        <button
          style={{
            backgroundColor: buttonProps.solid["--flash-ui-button-bg-color"],
            padding: "0px 24px",
            fontSize: 24,
            lineHeight: 1,
            height: 48,
            fontWeight: 400,
            marginRight: 20,
          }}
        >
          Button xlg
        </button>
      </div>
    </section>
  );
}
