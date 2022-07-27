import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <h1>Sole Snatchers</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="cart">
        <img src="/imgs/cart.ico" alt="cart icon" />
      </div>
    </header>
  );
}

export default NavBar;
