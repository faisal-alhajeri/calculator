import React, { useEffect } from "react";
import { useCalculator } from "../context/CalculatorContext";
import AbstractButton, { CalculatorButton } from "./AbstractButton";

export type NumberButtonType = CalculatorButton & {
  num: string;
};

export default function NumberButton({
  num,
  onClick,
  ...restProps
}: NumberButtonType) {
  const { addSymbol } = useCalculator();


  return (
    <AbstractButton
      onClick={(e) => {
        addSymbol(num.toString());
        onClick ? onClick(e) : "";
      }}
      {...restProps}
    >
      {num}
    </AbstractButton>
  );
}
