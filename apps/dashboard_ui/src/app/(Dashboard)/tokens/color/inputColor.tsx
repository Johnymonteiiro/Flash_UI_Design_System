"use strict";

import { Palette } from "lucide-react";
import React, { Dispatch, useState } from "react";
import { ChromePicker } from "react-color";

interface InputColorProps {
  color:string;
  onChange: (e: any) => void;
}
export function InputColor({
  onChange,
  color,
}: InputColorProps) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  function handleOpen() {
    setDisplayColorPicker(!displayColorPicker);
  }

  function handleClose() {
    setDisplayColorPicker(!displayColorPicker);
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex justify-center items-center rounded-md mt-2 py-1 px-2 bg-zinc-800"
      >
        <Palette size={20} color="#6bed85" className="mr-1" />
        Editar
      </button>
      {displayColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />
          {/* <ChromePicker color={color} onChange={(e: any) => handleChange(e)} /> */}
          <ChromePicker color={color} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
}
