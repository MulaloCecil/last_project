import React, { useState } from "react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!isDarkMode);
  };
  const handleCartClick = () => {
    alert("Please add some items to your Cart.");
  };

  const handleLoginClick = () => {
    alert("You must Signup before you can Login.");
  };

  const handleSearchClick = () => {
    alert("Opps!! the item you are looking for is not available.");
  };
  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <header>
        {/* Header content */}

        <div className="header-container">
          <h1>BlockStock</h1>
          <div className="header-buttons">
            <button className="cart-button" onClick={handleCartClick}>
              Cart
            </button>
            <button className="login-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="background-image"></div>
        <div className="main-content">
          <h2>Explore ready-made blocks for your projects.</h2>
          <div className="image-container">
            <div className="card">
              <div className="caption">3D models</div>
              <img src={image1} alt="Img 1" />
            </div>
            <div className="card">
              <div className="caption">Schematics</div>
              <img src={image2} alt="Img 2" />
            </div>
            <div className="card">
              <div className="caption">Textures</div>
              <img src={image3} alt="Img 3" />
            </div>
          </div>
        </div>
      </main>
      <div className="search-bar">
        <input type="text" placeholder="Search on BlockStock" />
        <button onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <a href="# ">Contact</a>

          <a href="# ">Imprint</a>

          <a href="# ">FAQ</a>
        </div>

        <div className="footer-right">
          <a href="facebook.com">Facebook</a>

          <a href="twiter.com">Twitter</a>
        </div>
        <button className="dark-mode-button" onClick={handleDarkModeToggle}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </footer>
    </div>
  );
}

export default App;
