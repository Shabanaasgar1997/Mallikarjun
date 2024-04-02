import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function State() {
  const [itemcount, setItemCount] = useState(1);
  const [error, setError] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const Add = () => {
  //     setItemCount(itemcount + 1);
  //   };
  //   const Sub = () => {
  //     if (itemcount > 1) {
  //       setItemCount(itemcount - 1);
  //     } else {
  //       setItemCount("");
  //     }
  //   };
  const EyeChange = () => {
    if (error === false) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const ValidateTheForm = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setError(true);
    } else {
      setError(false);
    }
    console.log(username, password);
  };
  return (
    <>
      <h1>HEY THIS IS HOOKS CONCEPT</h1>
      <button
        className="btn btn-danger"
        onClick={() => {
          itemcount > 1 ? setItemCount(itemcount - 1) : setItemCount("");
        }}
      >
        -
      </button>
      <span>{itemcount}</span>
      <button
        className="btn btn-success"
        onClick={() => setItemCount(itemcount + 1)}
      >
        +
      </button>
      <div className="container">
        <form action="" className="w-25 d-flex mx-auto">
          <input type={error ? "text" : "password"} className="form-control" />
          <span onClick={EyeChange}>{error ? <FaEyeSlash /> : <FaEye />}</span>
        </form>
      </div>

      <Container>
        <form className="w-50 mx-auto" onSubmit={ValidateTheForm}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error ? (
            <p className="text-danger">Please fill the Username</p>
          ) : (
            <p>{username}</p>
          )}
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? (
            <p className="text-danger">Please fill the password</p>
          ) : (
            <p>{password}</p>
          )}
          <button type="submit" className="btn btn-info my-lg-2 d-flex mx-auto">
            Signup
          </button>
        </form>
      </Container>
    </>
  );
}

export default State;
