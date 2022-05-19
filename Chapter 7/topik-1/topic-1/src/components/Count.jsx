import React from "react";
import { Button } from "react-bootstrap";

function Count(props) {
  const { children, count, logo, handleClick } = props;

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <h4>Total Click</h4>
        <h1>{count}</h1>
        {/* Bootstrap */}
        <Button onClick={handleClick}>Click</Button>
        <button
          className="App-button"
          onClick={handleClick}
          // ? Style
          style={{
            backgroundColor: "red",
            marginLeft: "30px",
          }}
        >
          Click
        </button>
      </div>
      <div>{children}</div>
    </>
  );
}

export default Count;
