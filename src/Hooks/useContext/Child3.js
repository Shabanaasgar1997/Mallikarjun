import React, { useContext } from "react";
import { data, data1 } from "./Parent";

function Child3() {
  let name = useContext(data);
  let age = useContext(data1);

  console.log(name);
  return (
    <>
      <h1 className="display-1">
        HEY THIS IS {name} DATA {age}
      </h1>
    </>
  );
}

export default Child3;
