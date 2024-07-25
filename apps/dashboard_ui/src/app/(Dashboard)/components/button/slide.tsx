import React, { useState, useRef, useEffect } from "react";
import "./RangeInputWithTooltip.css";

interface RangeInputWithTooltipProps {
  min?: number;
  max?: number;
  step?: number;
}

const RangeInputWithTooltip: React.FC<RangeInputWithTooltipProps> = ({
  min = 0,
  max = 200,
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
      <div className="steps">
        {Array.from(
          { length: (max - min) / step + 1 },
          (_, i) => min + i * step
        ).map((stepValue) => (
          <div
            key={stepValue}
            className="step"
            style={{ left: `${((stepValue - min) / (max - min)) * 100}%` }}
          >
            {stepValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RangeInputWithTooltip;
