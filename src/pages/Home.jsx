import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../assets/videos/bgvideo.mp4";

const Home = () => {
  return (
    <>
      <main>
        <section className="Hero-Video-Section position-relative">
          <div className="Hero-Video-Container">
            <video
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            >
              <source src={HeroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="Hero-Overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="container">
              <h1 className="font-bold">
                Crafting Digital Experiences That Inspire Growth
              </h1>
              <p className="font-light">
                Elevate your brand with stunning, high-performance websites.
              </p>
              <Link to="" className="orangebtn">
                Let us Talk <i class="ri-arrow-right-long-line"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
