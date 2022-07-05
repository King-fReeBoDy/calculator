import React, { useState } from "react";
import ReactDom from "react-dom";

import "./index.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [equal, setEqual] = useState(0);

  function Operator2({ operators2 }) {
    return (
      <button
        className="rounded-full w-12 h-12 text-gray-100 text-2xl bg-slate-400 text-center pb-2 "
        onClick={() => handleOp2(operators2)}
      >
        {operators2}
      </button>
    );
  }

  function Number({ number }) {
    return (
      <button
        className="font-bold rounded-full w-12 h-12 text-gray-200 text-2xl bg-gray-600 text-center"
        onClick={() => handleNumber(number)}
      >
        {number}
      </button>
    );
  }

  function Operator({ operators }) {
    return (
      <button
        className="font-bold rounded-full w-12 h-12 text-gray-100 text-2xl bg-orange-400 text-center pb-2 focus:bg-white focus:text-orange-500 hover:bg-orange-300"
        onClick={() => handleOp(operators)}
      >
        {operators}
      </button>
    );
  }

  function handleNumber(number) {
    if (num2.startsWith(0)) {
      setNum2("");
    } else {
      setNum2((prevState) => (prevState += number));
    }
  }

  function handleOp(operators) {
    setOperator("");
    setOperator(operators);
    if (!num1) {
      setNum1(num2);
      setNum2("");
    } else if (num1 && num2) {
      setNum1(eval(parseFloat(num1) + operator + parseFloat(num2)));
      setNum2("");
      setEqual(eval(parseFloat(num1) + operator + parseFloat(num2)));
    }
  }

  function handleEqualTo() {
    if (num1 && num2 && operator) {
      setEqual(eval(parseFloat(num1) + operator + parseFloat(num2)));
      setNum1(0);
      setNum2("");
      setOperator("");
    } else if (equal) {
      setEqual((prevState) => (prevState += prevState));
      setNum1(0);
      setNum2("");
      setOperator("");
    }
  }

  function handleOp2(operators2) {
    if (operators2 === "ac") {
      setNum1(0);
      setNum2("");
      setOperator("");
      setEqual(0);
    }
  }

  return (
    <>
      <div className="wrapper bg-black font-bold grid w-full h-screen">
        <div className="text-gray-200 text-right pr-4 pt-6">
          {num1}
          {operator}
          {num2}
        </div>
        <div className="text-right text-5xl text-gray-100 py-5 px-3">
          {equal}
        </div>
        <section className="grid grid-cols-4 font-bold text-lg w-full gap-2 p-2 place-items-center">
          <Operator2 operators2={"ac"} />
          <Operator2 operators2={"+/-"} />
          <Operator2 operators2={"%"} />
          <Operator operators={"/"} />
          <Number number={7} />
          <Number number={8} />
          <Number number={9} />
          <Operator operators={"*"} />
          <Number number={4} />
          <Number number={5} />
          <Number number={6} />
          <Operator operators={"-"} />
          <Number number={1} />
          <Number number={2} />
          <Number number={3} />
          <Operator operators={"+"} />
          <div className="col-span-2 w-full bg-gray-600 rounded-full">
            <Number number={0} />
          </div>
          <Number number={"."} />
          <button
            className="font-bold rounded-full w-12 h-12 text-gray-100 text-2xl bg-orange-400 text-center pb-2 focus:bg-white focus:text-orange-500 hover:bg-orange-300"
            onClick={handleEqualTo}
          >
            =
          </button>
        </section>
      </div>
    </>
  );
}
ReactDom.render(<App />, document.getElementById("root"));
