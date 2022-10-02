import React, { useEffect } from "react";
import { useCalculator } from "../context/CalculatorContext";
import AbstractButton, { CalculatorButton } from "./AbstractButton";

export type OperatorButtonType = CalculatorButton & {
  operator: string;
};

export default function OperatorButton({
  operator,
  onClick,
  ...restProps
}: OperatorButtonType) {
  const { addSymbol } = useCalculator();

  useEffect(() => {
    function handleOperatorPress(e: any) {
        // console.log(e.code);
        
    //   if (
    //     !e.shiftKey &&
    //     (e.code === `Numpad${num}` || e.code === `Digit${num}`)
    //   ) {
    //     addSymbol(num.toString());
    //   }
    }

    document.addEventListener("keydown", handleOperatorPress);
    return () => document.removeEventListener("keydown", handleOperatorPress);
  }, [addSymbol]);

  return (
    <AbstractButton
      onClick={(e) => {
        addSymbol(num.toString());
        onClick ? onClick(e) : "";
      }}
      {...restProps}
    >
      {operator}
    </AbstractButton>
  );
}
