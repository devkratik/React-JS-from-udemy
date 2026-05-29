function Section() {
  return (
    <>
      <div className="hero">
        <div className="hero__info">
          <h1 className="hero__info-title">Nature's Ultimate Hydration</h1>
          <p className="hero__info-subtitle">
            Taste the peak of summer with our hand-picked, farm-fresh
            watermelons delivered straight to your door.
          </p>
          <button className=" btn hero__info-btn">Order Now</button>
        </div>
        <figure className="hero__figure">
          <img className="hero__figure-img" src="/hero.jpg" alt="hero-image" />
        </figure>
      </div>
    </>
  );
}

export default Section;
