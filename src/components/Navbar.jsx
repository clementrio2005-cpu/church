import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import churchLogo from "../assets/churchImg/logoChurch.jpg";

const Navbar = () => {
  return (
    <section className="navbar-section">
      <nav className="navigation">
        <header className="header-nav">
          {/* <h3>Church of St.Joseph The Worker</h3> */}
          <img src={churchLogo} alt="" width={200} height={100}/>
        </header>
        <ul className="ul-nav">
          <Link to="/">
            <li className="li-nav active">home</li>
          </Link>
          <Link to="/about">
            <li className="li-nav">about</li>
          </Link>
          <Link to="/parishpriest">
            <li className="li-nav">parish priest</li>
          </Link>
          <Link to="/contact">
            <li className="li-nav">contact</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
