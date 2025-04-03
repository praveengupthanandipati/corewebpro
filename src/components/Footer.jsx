import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="blurFilter"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8 text-center ">
                    <a href="#"><img src={Logo} alt=""/></a>

                    <ul className="nav justify-content-center py-5">
                        <li className="nav-item">
                          <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className="divider"></div>

                    <div className="row pt-5">
                      <div className="col-md-6">
                           <div className="contactDetails">
                            <a href="callto:+91  77 999 711 12" className="text-text-color">+91  77 999 711 12</a>
                            <a href="mailto:info@corewebpro.com" className="text-text-color">info@corewebpro.com</a>
                           </div>
                      </div>
                      <div className="col-md-6">
                           <div className="socialFooter text-end">
                              <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
                           </div>
                      </div>
                    </div>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
