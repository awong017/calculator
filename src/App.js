import React, { useState } from "react";
import Styled from "styled-components";

const AppDiv = Styled.div`
  color: white;

  .calculator {
    margin-top: 300px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;

    .display {
      border-bottom: 2px solid white;
      text-align: right;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(4, 25%);
      padding-left: 0;
      list-style: none;
      text-align: center;

      li {
        border: 1px solid white;
        padding: 24px;
        height: 24px;

        &:hover {
          cursor: pointer;
          transition: 0.3s;
          background-color: white;
          color: black;
        }
      }
    }
  }
`;

const App = () => {

  const [operation, setOperation] = useState(
    {
      isAdding: false,
      isSubtracting: false,
      isMultiplying: false,
      isDividing: false,
      isCalculated: false
    }
  )

  const [calculation, setCalculation] = useState(
    {
      input: 0,
      computation: 0
    }
  );

  const toggleOperations = (operation) => {
    if (operation.isAdding === true) {
      setCalculation({input:0,computation:calculation.computation+calculation.input});
    }
    else if (operation.isSubtracting === true) {
      setCalculation({input:0,computation:calculation.computation-calculation.input});
    }
    else if (operation.isMultiplying === true) {
      setCalculation({input:0,computation:calculation.computation*calculation.input});
    }
    else if (operation.isDividing === true) {
      setCalculation({input:0,computation:calculation.computation/calculation.input});
    }
    else {
      setCalculation({input:0,computation:calculation.input});
    }
  }

  const handleInput = (number) => {
    setCalculation(
      {
        input: parseInt(`${(calculation.input === 0 ? "" : calculation.input)}${number}`),
        computation: calculation.computation
      }
    )
    setOperation(
      {
        isAdding: false,
        isSubtracting: true,
        isMultiplying: false,
        isDividing: false,
        isCalculated: true
      }
    )
  };

  const handleAdd = (operation) => {
    toggleOperations(operation);
    setOperation(
      {
        isAdding: true,
        isSubtracting: false,
        isMultiplying: false,
        isDividing: false,
        isCalculated: true
      }
    )
  };

  const handleSubtract = (operation) => {
    toggleOperations(operation);
    setOperation(
      {
        isAdding: false,
        isSubtracting: true,
        isMultiplying: false,
        isDividing: false,
        isCalculated: true
      }
    )
  };

  const handleMultiply = (operation) => {
    toggleOperations(operation);
    setOperation(
      {
        isAdding: false,
        isSubtracting: false,
        isMultiplying: true,
        isDividing: false,
        isCalculated: true
      }
    )
  };

  const handleDivide = (operation) => {
    toggleOperations(operation);
    setOperation(
      {
        isAdding: false,
        isSubtracting: false,
        isMultiplying: false,
        isDividing: true,
        isCalculated: true
      }
    )
  };

  const handleEquals = (operation) => {
    toggleOperations(operation);
    setOperation(
      {
        isAdding: false,
        isSubtracting: false,
        isMultiplying: false,
        isDividing: false,
        isCalculated: true
      }
    )
  };

  const handleClear = () => {
    setCalculation(
      {
        input: 0,
        computation: 0
      }
    )
    setOperation(
      {
        isAdding: false,
        isSubtracting: false,
        isMultiplying: false,
        isDividing: false,
        isCalculated: false
      }
    )
  };

  return (
    <AppDiv>
      <div className="calculator">
        <div className="display">
          {operation.isCalculated ? calculation.computation : calculation.input}
        </div>
        <div className="buttons">
          <ul>
            <li onClick={() => handleInput(7)}>7</li>
            <li onClick={() => handleInput(8)}>8</li>
            <li onClick={() => handleInput(9)}>9</li>
            <li onClick={() => handleDivide(operation)}>/</li>
            <li onClick={() => handleInput(4)}>4</li>
            <li onClick={() => handleInput(5)}>5</li>
            <li onClick={() => handleInput(6)}>6</li>
            <li onClick={() => handleMultiply(operation)}>*</li>
            <li onClick={() => handleInput(1)}>1</li>
            <li onClick={() => handleInput(2)}>2</li>
            <li onClick={() => handleInput(3)}>3</li>
            <li onClick={() => handleSubtract(operation)}>-</li>
            <li onClick={() => handleInput(0)}>0</li>
            <li onClick={() => handleClear()}>Clear</li>
            <li onClick={() => handleEquals(operation)}>=</li>
            <li onClick={() => handleAdd(operation)}>+</li>
          </ul>
        </div>
        <button onClick={() => console.log(calculation)}>Computation</button>
      </div>
    </AppDiv>
  );
};

export default App;