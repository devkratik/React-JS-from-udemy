import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="counter__value">count is {count}</div>
      <div className="counter__controls">
        <button
          className="btn counter__increase"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>
        <button
          className="btn counter__decrease"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -1
        </button>
        <button className="btn counter__reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
