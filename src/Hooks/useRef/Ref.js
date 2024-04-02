import React, { useRef } from "react";

function Ref() {
  let nameref = useRef();
  let imageref = useRef();
  console.log(nameref.current);
  const VishalTheTroubleMaker = () => {
    nameref.current.style = "border:2px solid red;background:green;color:white";
  };
  const Manichandra = () => {
    imageref.current.style = "border:2px solid green;border-radius:25px";
  };
  return (
    <div>
      <label htmlFor="">Username</label>
      <input
        type="text"
        name=""
        ref={nameref}
        id=""
        className="form-control w-50"
        onClick={VishalTheTroubleMaker}
      />
      <img
        onMouseOver={Manichandra}
        ref={imageref}
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  );
}

export default Ref;
