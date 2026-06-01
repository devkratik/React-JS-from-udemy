import { useState } from "react";

function App() {
  const [input, setInput] = useState("0");

  function addOne(input) {
    let currentInput = eval(input);
    setInput(currentInput + 1).toString();
  }
  function subtractOne(input) {
    let currentInput = eval(input);
    setInput(currentInput - 1).toString();
  }

  function handleClick(value) {
    if (value === "C") {
      setInput("0");
      return;
    } else if (value === "=") {
      setInput(eval(input).toString());
      return;
    }
    setInput((prev) => (prev === "0" ? value : prev + value));
  }

  return (
    <>
      <div className="calculator">
        <div className="calculator__display">{input}</div>
        <div className="counter">
          <button onClick={() => addOne(input)} className="counter__increment">
            &#43;1
          </button>
          <button
            onClick={() => subtractOne(input)}
            className="counter__decrement"
          >
            &minus;1
          </button>
        </div>
        <div className="calculator__buttons">
          <button onClick={() => handleClick("1")} className="btn">
            1
          </button>
          <button onClick={() => handleClick("2")} className="btn">
            2
          </button>
          <button onClick={() => handleClick("3")} className="btn">
            3
          </button>
          <button onClick={() => handleClick("+")} className="btn">
            &#43;
          </button>
          <button onClick={() => handleClick("4")} className="btn">
            4
          </button>
          <button onClick={() => handleClick("5")} className="btn">
            5
          </button>
          <button onClick={() => handleClick("6")} className="btn">
            6
          </button>
          <button onClick={() => handleClick("-")} className="btn">
            &minus;
          </button>
          <button onClick={() => handleClick("7")} className="btn">
            7
          </button>
          <button onClick={() => handleClick("8")} className="btn">
            8
          </button>
          <button onClick={() => handleClick("9")} className="btn">
            9
          </button>
          <button onClick={() => handleClick("*")} className="btn">
            &times;
          </button>
          <button onClick={() => handleClick("0")} className="btn">
            0
          </button>
          <button onClick={() => handleClick(",")} className="btn">
            &#44;
          </button>
          <button
            onClick={() => handleClick("=")}
            className="btn calculator__buttons-equals"
          >
            &#61;
          </button>
          <button onClick={() => handleClick("/")} className="btn">
            &divide;
          </button>
          <button
            onClick={() => handleClick("C")}
            className="btn calculator__buttons-clear "
          >
            C
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
