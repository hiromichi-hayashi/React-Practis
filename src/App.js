import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>CountUp</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>count</button>
    </div>
  );
}
