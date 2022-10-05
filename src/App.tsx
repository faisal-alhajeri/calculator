import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NumberButton from "./buttons/NumberButton";
import { operators, useCalculator } from "./context/CalculatorContext";

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
    prev,
    reset
  } = useCalculator();

  useEffect(() => {
    function handlePress(e: any) {
      const numbersAndOperators = ['1','2','3','4','5','6','7','8','9','0','(',')','-','+','*','/']
      if(numbersAndOperators.includes(e.key)){
        addSymbol(e.key)
      } else if(e.key === 'Enter' || e.key === '='){
        compute()
      } else if(e.key === 'Backspace'){
        deleteSymbol()
      } else if(e.key === 'ArrowRight'){
        next()
      } else if(e.key === 'ArrowLeft'){
        
        prev()
      }

      
    }

    document.addEventListener("keydown", handlePress);
    return () => document.removeEventListener("keydown", handlePress);
  }, [addSymbol]);

  return (
    <div id="main-container">
      {/* <h1>My Calculator</h1> */}

      <div id="calculator">
        <div id="calculator-show">
          <div id="calculator-equation">{formatEquation()}</div>
          <div id="calculator-result">
            {result}
            <br />
            {/* {pointer} */}
          </div>
        </div>
        <div id="calculator-buttons-container">
          {/* <input style={{height: '100px'}} onChange={(e) => addSymbol(e.target.value)} /> */}
          <div style={{ textAlign: "center", padding: "10px" }}>
            <button
              className="calc-button w-25"
              onClick={() => prev()}
            >{`<`}</button>
            <button
              className="calc-button  w-25"
              onClick={() => next()}
            >{`>`}</button>
          </div>
          <Container>
            <Row>
              <Col xs={8}>
                <div className="d-flex flex-column ">
                  <div className="">
                  <NumberButton  num="1" />
                  <NumberButton  num="2" />
                  <NumberButton  num="3" />
                  </div>
                  <div className="">
                  <NumberButton  num="4" />
                  <NumberButton  num="5" />
                  <NumberButton  num="6" />
                  </div>
                  <div className="">
                  <NumberButton  num="7" />
                  <NumberButton  num="8" />
                  <NumberButton  num="9" />
                  </div>
                  <div className="">
                  <NumberButton  num="0" />
                  <NumberButton  num="(" />
                  <NumberButton  num=")" />

                  </div>



                </div>


              </Col>
              <Col xs={4}>
                {operators.map((symbol) => (
                  <NumberButton num={symbol} />
                ))}
              </Col>
            </Row>

            
          <button className="calc-button" onClick={() => deleteSymbol()}>
            del
          </button>
          <button className="calc-button" onClick={() => compute()}>
            =
          </button>
          <button className="calc-button" onClick={() => reset()}>
            AC
          </button>
          </Container>



        </div>
      </div>
      <div>
        Created By{" "}
        <a href="https://github.com/faisal-alhajeri" target="_blanck" className="link"> 
          {" "}
          Faisal Alhajeri
        </a>
      </div>
    </div>
  );
}

export default App;
