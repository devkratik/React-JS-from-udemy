import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  {
    /* toggle open close function */
  }
  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="container">
      {isOpen ? (
        <span className=" container__close " onClick={toggleIsOpen}>
          &times;
        </span>
      ) : (
        <button className=" btn container__open" onClick={toggleIsOpen}>
          Open
        </button>
      )}
      {isOpen && (
        <>
          {/* Title */}
          <h1 className="container__title">
            Vite + React = {count >= 3 ? "Love" : ""}
          </h1>
          {/* Logo Container */}
          <div className="container__logo">
            <figure className="logo">
              <img
                className={`logo__vite ${count >= 1 ? "active" : ""} `}
                src="/vite.svg"
                alt="logo-vite"
              />
            </figure>
            <p className="logo__connector">+</p>
            <figure className="logo">
              <img
                className={`logo__react ${count >= 2 ? "active" : ""} `}
                src="/react.svg"
                alt="logo-react"
              />
            </figure>
            <p className="logo__connector">=</p>
            <figure className="logo">
              <img
                className={`logo__love ${count >= 3 ? "active" : ""} `}
                src="/love.svg"
                alt="logo-love"
              />
            </figure>
          </div>
          {/* Divider line */}
          <hr />
          {/* Counter */}
          <div className="counter">
            <div className="counter__info">Count is {count}</div>
            <div className="counter__controls">
              <button
                className="btn"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +1
              </button>
              <button
                className="btn"
                onClick={() => setCount((prev) => prev - 1)}
              >
                -1
              </button>
              <button className="btn" onClick={() => setCount(0)}>
                Reset
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
