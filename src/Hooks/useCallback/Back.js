import React, { useCallback, useState } from "react";
import Child from "./Child";

function Back() {
  const [count, setCount] = useState(1);

  const vishal = useCallback(() => {}, []);

  return (
    <>
      <Child vish={vishal} />
      <h1>hey this callback concept</h1>
      {count}
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        +
      </button>
    </>
  );
}

export default Back;
