import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState("dark");
  const darkModeActivate = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
    }
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode}  bg-${mode}`}>
        <div className={`container-fluid text-${mode == 'dark'?'white':'black'}` }>
          <a className={`navbar-brand`} href="#">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link active"} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form action=""> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={darkModeActivate}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Dark Mode
              </label>
            </div>
            {/* </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
