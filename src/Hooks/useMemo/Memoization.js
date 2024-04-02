import React, { useMemo, useState } from "react";

function Memoization() {
  const [count, setCount] = useState(1);

  //   const Multiply = () => {
  //     console.log(count * 10);//1*10
  //   };
  const Multiply = useMemo(() => {
    console.log(count * 10);
  }, []);
  return (
    <>
      {Multiply}
      <h1>hey this is memo concept</h1>
      {count}
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        +
      </button>
      {Multiply}
    </>
  );
}

export default Memoization;

// https://www.atlassian.com/git/tutorials/install-git#windows
