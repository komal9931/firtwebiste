import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cycle from "./Cycle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cycle />
      <h1>Lorem ipsum dolor sit.</h1>
    </>
  );
}

export default App;
