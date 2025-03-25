import React from "react";
import videoSrc from "../assets/videos/video.mp4";
import HomeAboutColumns from "../components/HomeAboutColumns";


const Home = () => {  
  return (
    <>
      <section className="video-background">
        <video autoPlay loop muted playsInLine>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </section>
      <main>
        <section className="homeMain-title">
          <div className="container">
            <h1 className="text-text-color font-bold">
              Crafting Digital Experiences That Inspire Growth
            </h1>
            <a className="btn-blue text-white bg-sec d-inline-block" to="">
              <span className="text-uppercase"> Read More</span>
            </a>
          </div>
        </section>

        <section className="aboutHome">
          <div className="container">
            <h2 className="text-text-color font-light">
              Core Webpro is a team of highly passionate web designers and
              developers. We do ordinary things extraordinarily well. Our team
              is driven by the desire to excel - but our determination and
              commitment to an unrelenting pursuit of your goal enables us to
              attain the success that we seek.
            </h2>
            <HomeAboutColumns />
           
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
