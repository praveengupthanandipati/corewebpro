import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed-top bg-black">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          aria-label="Offcanvas navbar large"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabindex="-1"
              id="offcanvasNavbar2"
              aria-labelledby="offcanvasNavbar2Label"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle text-white"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      popular Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="">
                          UX/UI Designs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Mobile Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="">
                      Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="">
                      Blog
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav justify-content-end flex-grow-1">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="">
                      Let us Talk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
