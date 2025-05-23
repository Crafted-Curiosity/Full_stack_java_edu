import React from "react";
import logo from "../assets/crafted-curiosity.png";
import '../styling/Header.css'


const Header = () => {
  return (
    <section className="header">
            <header className="header-bar">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="CCE logo" />
                        <h1><span className="logo-text">Crafted Curiosity Edu</span></h1>
                    </a>
                </div>

                {/* Hidden checkbox toggle */}
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

                <nav className="header-nav">
                    <ul>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contactus">Contact</a></li>
                        <li><a href="/">CC Network</a></li>
                    </ul>
                </nav>
            </header>
    </section>
  );
};

export default Header;