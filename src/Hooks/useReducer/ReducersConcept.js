import React, { useReducer, useState } from "react";

const intialState = 10000;

function ReducersConcept() {
  const [inputData, setInputData] = useState(1);
  const reducer = (state, action) => {
    switch (action) {
      case "Withdraw":
        return state - inputData;
        break;
      case "Deposit":
        return state + parseInt(inputData);
        break;

      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <>
      <input
        type="text"
        className="form-control w-50 my-lg-2"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button className="btn btn-danger" onClick={() => dispatch("Withdraw")}>
        Withdraw
      </button>
      {count}
      <button className="btn btn-success" onClick={() => dispatch("Deposit")}>
        Deposit
      </button>
    </>
  );
}

export default ReducersConcept;
