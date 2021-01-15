import React from "react";
import Styled from "styled-components";

const App = Styled.div`
  color: white;

  .calculator {
    margin-top: 300px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid white;
    width: 300px;

    .display {
      border-bottom: 2px solid white;
      padding-right: 24px;
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

const app = () => {
  return (
    <App>
      <div className="calculator">
        <div className="display">DISPLAY</div>
        <div className="buttons">
          <ul>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>/</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>*</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>-</li>
            <li>0</li>
            <li>Clear</li>
            <li>=</li>
            <li>+</li>
          </ul>
        </div>
      </div>
    </App>
  );
};

export default app;