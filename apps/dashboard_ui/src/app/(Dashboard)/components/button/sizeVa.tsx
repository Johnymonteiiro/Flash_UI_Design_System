import React, { useState, useRef, useEffect, useCallback } from "react";
import "./RangeInputSizeWithTooltip.css";
import { SliderInput } from "./inputSlider";

interface RangeInputWithTooltipProps {
  sizes: { [key: string]: number };
  onSizeChange?: (size: number) => void;
}

const RangeInputSizeWithTooltip: React.FC<RangeInputWithTooltipProps> = ({
  sizes,
  onSizeChange,
}) => {
    const sizeKeys = Object.keys(sizes);
    const initialIndex = sizeKeys.indexOf("md");
    const [value, setValue] = useState<number>(initialIndex);
    const [tooltipPosition, setTooltipPosition] = useState<number>(0);
    const rangeInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (rangeInputRef.current) {
        const rangeWidth = rangeInputRef.current.offsetWidth;
        const newPosition = (value / (sizeKeys.length - 1)) * rangeWidth;
        setTooltipPosition(newPosition);
      }
    }, [value, sizeKeys.length]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setValue(newValue);
      if (onSizeChange) {
        onSizeChange(sizes[sizeKeys[newValue]]);
      }
    };

    return (
      <div className="range-input-container">
        <SliderInput
          min={0}
          max={sizeKeys.length - 1}
          step={1}
          value={value}
          onChange={handleChange}
          ref={rangeInputRef}
          id="range"
        />
        <div className="tooltip" style={{ left: `${tooltipPosition}px` }}>
          {sizeKeys[value]}
        </div>
      </div>
    );
};

export default RangeInputSizeWithTooltip;
