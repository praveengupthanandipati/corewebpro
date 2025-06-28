import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  //scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-white fixed-top shadow-sm ${
          scrolled ? "scrolledHeader" : ""
        }`}
      >
        <div className="container">
          <nav
            className="navbar navbar-expand-lg"
            aria-label="Offcanvas navbar large"
          >
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" className="logo" />
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
                <ul className="navbar-nav justify-content-center align-self-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/">
                          UI/UX Design
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Mobile Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Seo & Digital Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Blog
                    </Link>
                  </li>
                </ul>
                <Link to="" className="bluebtn">
                  Let us Talk <i class="ri-arrow-right-long-line"></i>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
