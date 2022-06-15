/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "./../../../app/assets/css/header.css";
import { SabkaBazarContext } from "../../../store/context";

const Header = () => {
  const { cart } = React.useContext(SabkaBazarContext);
  console.log(cart);
  return (
    <header className="app-header">
      <div className="container">
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/static/images/logo_2x.png`}
            media="(min-width: 720px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
            alt="sabka bazar logo"
          />
        </picture>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
          </ul>
        </nav>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/login">SignIn</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </nav>
          <button className="cart-view">
            <Link to="/cart">
              <div>
                <span className="sr-only">View Shopping Cart</span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <span>
                {`${cart.length || 0} ${cart.length > 1 ? `items` : `item`}`}
              </span>
            </Link>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
