import React from "react";
import "./index.css";

// Array of product data with details about each product in the store
const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    //Using here extra layer of div is inefficient so we used react fragment below:

    // <div>
    //   <Header />
    //   <Catalog />
    //   <Footer />
    // </div>

    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}

function Header() {
  const hour = 9;
  console.log(hour);
  const openHour = 9;
  const closingHour = 21;
  let isOpen;
  isOpen = hour >= openHour && hour <= closingHour ? true : false;

  return (
    <header className="header">
      <h1>Electronic Store</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>
          We are{" "}
          {isOpen ? "currently open, " : " currently closed, Opening from "}
          Hours: {openHour}:00 -{closingHour}:00
        </p>
      </div>
    </header>
  );
}

// function Header() {
//   return React.createElement(
//     "header",
//     null,
//     React.createElement("h1", null, "Electronic"),
//   );
// }

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((product) => {
          return (
            <Products
              /* 
            Passing multiple props here is inefficient
              key={product.name}
              name={product.name}
              img={product.photoName}
              description={product.description}
              price={product.price}
           */
              key={product.name}
              productObj={product}
            />
          );
        })}

        {/*
        
        Doing manually without any JS method will be less efficient
        
        <Products
          name="Laptop Pro"
          description="High-performance laptop for professionals."
          price={1200}
          img="/laptop.png"
        />
        <Products
          name="Smartphone X"
          img="/smartphone.png"
          price={800}
          description="Latest model with stunning display."
        />*/}
      </ul>
    </main>
  );
}

/*

Here we are not using any destructuring of props and it is inefficient

function Products(props) {

  return (
    <li className="product">
      <img src={props.productObj.photoName} alt={props.productObj.name} />
      <div>
        <h3>{props.productObj.name}</h3>
        <p>{props.productObj.description}</p>
        <span>{props.productObj.price + 10}</span>
      </div>
    </li>
  );
}
*/

function Products({ productObj }) {
  // Declaring variable for destructuring is ineefficient too
  //  const { productObj } = props;

  // we could have also used 'if' to condtitionally render this:
  // if(productObj.soldOut) return null;

  return (
    // Conditional Rendering below:
    // !productObj.soldOut &&
    <li className={`product ${productObj.soldOut ? "sold-out" : ""}`}>
      <img src={productObj.photoName} alt={productObj.name} />
      <div>
        <h3>{productObj.name}</h3>
        <p>{productObj.description}</p>
        {/* <span>{productObj.price + 10}</span> */}
        {<span>{productObj.soldOut ? "Sold out" : productObj.price + 10}</span>}
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
export default App;
