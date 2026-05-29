function Navbar() {
  return (
    <>
      <div className="navbar">
        <figure className="navbar__figure">
          <img
            className="navbar__figure-img"
            src="/watermelon.svg"
            alt="brand-logo"
          />
        </figure>
        <ul className="navbar__links">
          <li className="navbar__links-item">
            <a className="navbar__links-item-address" href="#explore">
              Explore
            </a>
          </li>
          <li className="navbar__links-item">
            <a className="navbar__links-item-address" href="#cart">
              Add to cart
            </a>
          </li>
          <li className="navbar__links-item">
            <a className="navbar__links-item-address" href="#login">
              Login
            </a>
          </li>
          <li className="navbar__links-item">
            <a className="navbar__links-item-address" href="#signup">
              Sign up
            </a>
          </li>
        </ul>
        <div className="navbar__menu">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}

export default Navbar;
