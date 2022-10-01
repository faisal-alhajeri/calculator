import { useEffect, useState } from "react";
import "./App.css";
import { useCalculator } from "./context/CalculatorContext";

function App() {
  const {
    equation,
    formatEquation,
    compute,
    addSymbol,
    result,
    deleteSymbol,
    pointer,
    next,
    prev
  } = useCalculator();

  return (
    <div id="main-container">
      <div id="calculator">
        <div id="calculator-show">
          <div id="calculator-equation">{formatEquation()}</div>
          <div id="calculator-result">
            {result}
            <br />
            {pointer}
          </div>
        </div>
        <div id="calculator-buttons">
          {/* <input style={{height: '100px'}} onChange={(e) => addSymbol(e.target.value)} /> */}
          <div>
            
              <button onClick={() => prev()} >{`<`}</button>
              <button onClick={() => next()} >{`>`}</button>

          </div>

          <div>
            {Array(10)
              .fill(0)
              .map((value, index) => (
                <button onClick={() => addSymbol(index.toString())}>
                  {index}
                </button>
              ))}
          </div>

          <div>
            {["+", "-", "*", "/"].map((symbol) => (
              <button onClick={() => addSymbol(symbol)}>{symbol}</button>
            ))}
          </div>
          <button onClick={() => deleteSymbol()}>delete</button>
          <button onClick={() => compute()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
