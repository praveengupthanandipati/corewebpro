import React from "react";
import videoSrc from "../assets/videos/video.mp4";
import HomeAboutColumns from "../components/HomeAboutColumns";
import HomeServices from "../components/HomeServices";
import SectionTitle from "../components/SectionTitle";
import HomeWorksSwiper from "../components/HomeWorksSwiper";

const Home = () => {
  const bannerTitle = "Crafting Digital Experiences That Inspire Growth";
  const aboutTitle =
    " Core Webpro is a team of highly passionate web designers and developers. We do ordinary things extraordinarily well. Our team is driven by the desire to excel - but our determination and commitment to an unrelenting pursuit of your goal enables us to attain the success that we seek.";
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
            <h1 className="text-text-color font-bold">{bannerTitle}</h1>
            <a className="btn-blue text-white bg-sec d-inline-block" to="">
              <span className="text-uppercase"> Read More</span>
            </a>
          </div>
        </section>

        <section className="aboutHome">
          <div className="container">
            <h2 className="text-text-color font-semibold">{aboutTitle}</h2>
            <HomeAboutColumns />
          </div>
        </section>

        <section className="servicesHome position-relative">
            <div className="blurFilter"></div>
            <div className="container">
                <SectionTitle 
                    title="Our Offering Services"
                    description="We build cutting-edge AI solutions that propel your business, surpass your competition, and captivate your users."
                />
                <HomeServices/>
            </div>            
        </section>

        <section className="worksHome position-relative">
            <div className="blurFilter"></div>
            <div className="container">
                <SectionTitle 
                    title="Discover Our Recent Work"
                    description=" Innovative Projects and Success Stories That Showcase Our Expertise"
                />    
                 <div className="text-center">
                    <a className="btn-blue text-white bg-sec d-inline-block mt-3" href="#">
                        <span className="text-uppercase">View All works</span>
                    </a>  
                  </div>                     
                  <HomeWorksSwiper/>                        
            </div>
        </section>

        <section className="whyChooseUs position-relative">
          <div className="blurFilter"></div>
          <div className="container">
            <SectionTitle 
                  title="Why Choose Us"
                  description=" Cutting-edge AI expertise with deep industry focus on sports, media, and entertainment"
              />   
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
