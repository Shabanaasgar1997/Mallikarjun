import React, { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();
const data1 = createContext();

function Parent() {
  let name = "Rohit Kasula";
  let age = 25;
  return (
    <>
      <h1>HEY THIS IS use context hook</h1>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <Child1 />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default Parent;

export { data, data1 };
