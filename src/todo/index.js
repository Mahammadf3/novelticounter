import React from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import Counter from "./Counter";

// Import the action creators from your store
import { onIncrease, onDecrease } from "../store/index";

const Todo = () => {
  const dispatch = useDispatch();

  const counterData = () => {
   
    dispatch(onIncrease());
  };

  const counterDecrease = () => {
  
    dispatch(onDecrease());
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <Counter counterData={counterData} counterDecrease={counterDecrease} />
    </div>
  );
};

export default Todo;
