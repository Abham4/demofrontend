import React, { useEffect, useState } from "react";
import useStore from "../../Hook/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const num = useStore((state) => state.number);
  const increaseNum = useStore((state) => state.increaseNumber);
  const decreaseNum = useStore((state) => state.decreaseNumber);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [name, setName] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setCalculation(() => calculation + 1);
    });
  }, []);

  return (
    <>
      <div className="mt-32 ml-20">
        <button onClick={decreaseNum}>-</button>
        {num}
        <button onClick={increaseNum}>+</button>
      </div>
      <div className="mt-60 ml-20">
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="mt-40 ml-20">{calculation}</div>
    </>
  );
};

export default Home;
