import React, { useEffect, useState } from "react";
import About from "./About";

const Cycle = () => {
  const [counter, setCount] = useState(0);
  useEffect(() => {
    console.log("part-1");
  });
  useEffect(() => {
    console.log("part-2");
  }, []);
  useEffect(() => {
    console.log("part-3");
  }, [counter]);

  useEffect(() => {
    return function () {
      console.log("part-4");
    };
  }, []);

  return (
    <>
      <About />
      <h1>hello useEffect {counter}</h1>
      <button onClick={() => setCount(counter + 1)}>life Cycle</button>
    </>
  );
};

export default Cycle;
