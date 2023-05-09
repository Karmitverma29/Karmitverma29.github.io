import React, { useState,useContext } from "react";
import { Link } from "react-scroll";
import "./nav.css";
import { ThemeContext } from "../Theme";


function Nav() {
  const [click, setClick] = useState(false);
const{darkMode,toggleDarkMode}=useContext(ThemeContext);
  const handleClick = () => setClick(!click);
const handledark=()=>{
  toggleDarkMode();
}
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link
            to="home"
            className="nav-logo"
            spy={true}
            smooth={true}
            duration={500}
          >
            <span
              style={{
                color: "black",
                fontWeight: "bolder",
                fontFamily: "Comic Sans MS",
              }}
            >
              Karmit Verma
            </span>
            <i className="fas fa-code"></i>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="git"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Git Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-links"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "#ffffff" }}
                href="/fw20_0844-Karmit-Verma-Resume.pdf"
                download
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1vltTnwRyXTRXc4L7nuANgQXYJqkiVHGP/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Resume
              </a>
            </li>
          </ul>
          <button onClick={handledark}>
          {darkMode ? (
              <img
                style={{ height: "30px", width: "30px" }}
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brightness-3274675-2742570.png?f=avif&w=128"
                alt="Dark Mode"
              /> // Dark mode icon
            ) : (
              <img
                style={{ height: "30px", width: "30px" }}
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/brightness-3274588-2742627.png?f=avif&w=128"
                alt="Light Mode"
              /> // Light mode icon
            )}
          </button>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}>
              <img
                style={{ height: "24px", width: "24px" }}
                src="https://cdn-icons-png.flaticon.com/128/8166/8166618.png"
                alt="hamBurger"
              />
            </i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
