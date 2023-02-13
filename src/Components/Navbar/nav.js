import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  exact to="/" className="nav-logo">
           <span style={{color:"black"}}>Karmit Verma </span>  
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gitStats"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Git Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          
            <li className="nav-item">
  <a
    href="https://drive.google.com/uc?id=1vltTnwRyXTRXc4L7nuANgQXYJqkiVHGP"
    target="_blank"
    className="nav-links"
    onClick={handleClick}
    download

  >
    Resume
  </a>
</li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}><img style={{height:"24px",width:"24px"}} src="https://cdn-icons-png.flaticon.com/128/8166/8166618.png" alt="hamBurger"/></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav