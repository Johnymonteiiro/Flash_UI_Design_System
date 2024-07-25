import React, { useState, useRef, useEffect } from "react";
import "./CustomSlider.css";

interface RangeInputWithTooltipProps {
  min?: number;
  max?: number;
  step?: number;
}

export const Slide: React.FC<RangeInputWithTooltipProps> = ({
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [value, setValue] = useState<number>(min);
  const [tooltipPosition, setTooltipPosition] = useState<number>(0);
  const rangeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (rangeInputRef.current) {
      const rangeWidth = rangeInputRef.current.offsetWidth;
      const newPosition = ((value - min) / (max - min)) * rangeWidth;
      setTooltipPosition(newPosition);
    }
  }, [value, min, max]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="range-input-container">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        ref={rangeInputRef}
      />
      <div className="tooltip" style={{ left: `${tooltipPosition}px` }}>
        {value}
      </div>
    </div>
  );
};

