import React, { useContext, useEffect, useState } from "react";

export const operators = ["+", "-", "*", "/"];

type calculatorCtxValues = {
  equation: string;
  pointer: number;
  result: string | null;
  reset: () => void;
  formatEquation: () => any;
  compute: () => void;
  addSymbol: (symbol: string) => void;
  deleteSymbol: () => void;
  changePointer: (position: number) => void;
  next: () => void;
  prev: () => void;
};

const ctx = React.createContext({} as calculatorCtxValues);

export function useCalculator() {
  return useContext(ctx);
}

export default function CalculatorProvider({ children }: { children: any }) {
  const [equation, setEquation] = useState<string>("");
  const [result, setResult] = useState<string | null>("");
  const [pointer, setPointer] = useState<number>(0);

  useEffect(() => {
    if (result !== null) setResult(null);
  }, [equation]);

  //   useEffect(() => {
  //     if(pointer === equation.length)
  //         return setPointer(p => p-1)

  //     if (pointer < 0)
  //         return setPointer(0)
  //   }, [pointer]);

  function formatEquation(): any {
    const equationList = equation.split("");
    if (equationList.length === 0)
      return <span className="pointer-span empty-pointer"></span>;

    const newEquationFormatted = equationList.map((symbol, index) => {
      const spanClassList = [];
      if (index === pointer) spanClassList.push("pointer-span");

      if (operators.includes(symbol)) spanClassList.push("operator-span");
      return <span className={spanClassList.join(" ")}>{symbol}</span>;
    });

    if (equationList.length === pointer)
      newEquationFormatted.push(
        <span className="pointer-span empty-pointer"></span>
      );

    return newEquationFormatted;
  }

  function compute() {
    try {
      setResult(eval(equation));
    } catch (e) {
      console.log(e);

      setResult("err");
    }
  }

  function reset() {
    setEquation("");
    setPointer(0);
  }

  function addSymbol(symbol: string) {
    setEquation((oldEquation) => {
      let firstPart = oldEquation.slice(0, pointer);
      let lastPart = oldEquation.slice(pointer, oldEquation.length);

      return firstPart + symbol + lastPart;
    });
    setPointer((oldPointer) => oldPointer + 1);
  }

  function deleteSymbol() {
    if (equation.length === 0) return;

    setEquation((oldEquation) => {
      let firstPart = oldEquation.slice(0, pointer - 1);
      let lastPart = oldEquation.slice(pointer, oldEquation.length);
      return firstPart + lastPart;
    });
    setPointer((oldPointer) => (oldPointer > 0 ? oldPointer - 1 : 0));
  }

  function changePointer(position: number) {
    if (position > equation.length) return setPointer(equation.length);

    if (position < 0) return setPointer(0);

    setPointer(position);
  }

  function next() {
    changePointer(pointer + 1);
  }

  function prev() {
    changePointer(pointer - 1);
  }

  return (
    <ctx.Provider
      value={{
        equation,
        result,
        pointer,
        reset,
        formatEquation,
        compute,
        addSymbol,
        deleteSymbol,
        changePointer,
        next,
        prev,
      }}
    >
      {children}
    </ctx.Provider>
  );
}
