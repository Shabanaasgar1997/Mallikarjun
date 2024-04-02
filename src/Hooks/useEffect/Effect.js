import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

function Effect() {
  const [rohit, setRohit] = useState([]);
  //   const [count, setCount] = useState(1);
  //   useEffect(() => {
  //     console.log("hey hi");
  //   }, [count]);

  async function Virat() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(res);
    const result = await res.json();
    console.log(result);
    setRohit(result);
  }

  useEffect(() => {
    Virat();
  }, []);

  return (
    <>
      <h1>HEYTHIS IS EFFECTS CLASS</h1>

      {rohit.map((item) => {
        return (
          <>
            <h1>{item.id}</h1>
            {/* <Image src={item.image} alt="" />
             */}
            <p>{item.title}</p>
          </>
        );
      })}
      {/* {count}{" "}
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        +
      </button> */}
    </>
  );
}

export default Effect;
