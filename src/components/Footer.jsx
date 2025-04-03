import React, {useState, useEffect} from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop =()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  
  return (
    <footer>
      {isVisible && (
        <Link className="moveTop" onClick={scrollToTop}><i class="bi bi-arrow-up"></i></Link>
      )}
      <div className="blurFilter"></div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8 text-center ">
                    <a href="#"><img src={Logo} alt=""/></a>

                    <ul className="nav justify-content-center py-5">
                        <li className="nav-item">
                          <Link className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link">Works</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    <div className="divider"></div>

                    <div className="row pt-5">
                      <div className="col-md-6 align-self-center">
                           <div className="contactDetails">
                            <Link href="callto:+91  77 999 711 12" className="text-text-color">+91  77 999 711 12</Link>
                            <Link href="mailto:info@corewebpro.com" className="text-text-color">info@corewebpro.com</Link>
                           </div>
                      </div>
                      <div className="col-md-6">
                           <div className="socialFooter text-end">
                              <Link href="#" target="_blank"><i class="bi bi-facebook"></i></Link>
                              <Link href="#" target="_blank"><i class="bi bi-linkedin"></i></Link>
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
