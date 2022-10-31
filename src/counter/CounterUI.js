import React from "react";

function CounterUI(props) {
  //   console.log("props", props);

  return (
    <>
      <h1>Counter: {props.count}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
}

export default CounterUI;
