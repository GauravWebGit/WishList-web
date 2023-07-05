import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="container">
      <div className="row">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
