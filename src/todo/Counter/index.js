import React from "react";
import {  useSelector } from "react-redux";
import "./index.css";

const Counter = (props) => {

    const { counterDecrease,counterData}=props
 
  const data = useSelector((state) => state.counter.count);

  const increaseCount = () => {
    counterData()
  };

  const decreaseCount = () => {
    counterDecrease()
  };

  return (
    <div className="subContainer">
      <p>{data}</p>
      <div>
        <button onClick={increaseCount}>Add</button>
        <button onClick={decreaseCount}>Sub</button>
      </div>
    </div>
  );
};

export default Counter;
