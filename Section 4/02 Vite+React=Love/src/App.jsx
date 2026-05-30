import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  /* toggle open close function */
  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  /*handdle mosue hover function*/
  function handleMouseEnter(item) {
    setActiveItem(item);
  }
  /*handdle mosue leave function*/
  function handleMouseLeave(item) {
    setActiveItem(null);
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
                onMouseEnter={() => handleMouseEnter("vite")}
                onMouseLeave={handleMouseLeave}
                className={`logo__vite ${count >= 1 || activeItem === "vite" ? "active" : ""} `}
                src="/vite.svg"
                alt="logo-vite"
              />
            </figure>
            <p className="logo__connector">+</p>
            <figure className="logo">
              <img
                onMouseEnter={() => handleMouseEnter("react")}
                onMouseLeave={handleMouseLeave}
                className={`logo__react ${count >= 2 || activeItem === "react" ? "active" : ""} `}
                src="/react.svg"
                alt="logo-react"
              />
            </figure>
            <p className="logo__connector">=</p>
            <figure className="logo">
              <img
                onMouseEnter={() => handleMouseEnter("love")}
                onMouseLeave={handleMouseLeave}
                className={`logo__love ${count >= 3 || activeItem === "love" ? "active" : ""} `}
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
