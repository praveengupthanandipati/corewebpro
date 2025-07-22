import React from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeroVideo from "../assets/videos/bgvideo.mp4";
import Homeservices from "../components/Homsservices";
import Whychoosehome from "../components/Whychoosehome";
import BlogSection from "../components/BlogSection";

const Home = () => {
  return (
    <>
      <main>
        <Helmet>
          <title>
            Core Web Pro Studio | Award-Winning Web Design & Development
            Agency in Hyderabad
          </title>
          <meta
            name="description"
            content="Core Web Pro Studio is an award-winning web design agency in Hyderabad, specializing in UI/UX design, web development, SEO, digital marketing, and mobile apps. Elevate your brand with stunning, high-performance websites."
          />
          <meta
            name="keywords"
            content="Web Design, Web Development, UI/UX, SEO, Digital Marketing, Mobile Apps, Hyderabad, Core Web Pro Studio, Branding, Agency"
          />
          <meta name="author" content="Core Web Pro Studio" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Core Web Pro Studio | Award-Winning Web Design & Development Agency in Hyderabad"
          />
          <meta
            property="og:description"
            content="Elevate your brand with stunning, high-performance websites from Core Web Pro Studio, Hyderabad's leading web design and development agency."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://corewebpro.com/" />
          <meta
            property="og:image"
            content="https://corewebpro.com/assets/images/logo.svg"
          />
        </Helmet>
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
                Read More <i class="ri-arrow-right-long-line"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="container my-3 my-md-5 about-section text-center">
          <p>
            Core Web Pro Studio is an award-winning web design agency that
            combines the skills of talented in-house brand experts, web
            designers and developers to deliver results-driven websites that
            elevate your brand and drive conversions.
          </p>
        </section>

        <Homeservices />

        <section className="custom-container homesection whychoosesection pb-5">
          <h3>Why choose us </h3>
          <Whychoosehome />
        </section>

        <section className="custom-container homesection whychoosesection pb-5">
          <h3>News & Updates </h3>
          <BlogSection limit={4} />
        </section>

        <section className="custom-container footer-intro pt-5 position-relative">
          <div className="blurFilter"></div>
          <article className="text-center">
            <h2 className="text-center">
              Web Design & Development Agency in Hyderabad, Let’s work together
            </h2>

            <div className="row pt-4 mt-4">
              <div className="col-md-4">
                <div class="item text-center">
                  <Link to="mailto:info@corewebpro.com">
                    info@corewebpro.com
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div class="item text-center">
                  <Link to="phone:+91  779 997 1112">+91 779 997 1112</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div class="item text-center">
                  <Link to="/">Hyderabad, India</Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
