import React from "react";
import videoSrc from "../assets/videos/video.mp4";
import HomeAboutColumns from "../components/HomeAboutColumns";
import HomeServices from "../components/HomeServices";
import SectionTitle from "../components/SectionTitle";
import HomeWorksSwiper from "../components/HomeWorksSwiper";
import WhychooseSlider from "../components/WhychooseSlider";
import BlogItems from "../components/BlogItems";
import testimonial01 from "../assets/images/team01.png";
import testimonial02 from "../assets/images/team02.png";
import testimonial03 from "../assets/images/team03.png";
import testimonial04 from "../assets/images/team04.png";

const Home = () => {
  const bannerTitle = "Crafting Digital Experiences That Inspire Growth";
  const aboutTitle =
    " Core Webpro is a team of highly passionate web designers and developers. We do ordinary things extraordinarily well. Our team is driven by the desire to excel - but our determination and commitment to an unrelenting pursuit of your goal enables us to attain the success that we seek.";
  
    const testiMonials = [
      {
        desc:"Working with CoreWebPro was a game-changer for our startup. They took our vision and turned it into a stunning, user-friendly website that perfectly represents our brand. Their attention to detail and commitment to delivering on time exceeded our expectations. Highly recommend their team for anyone looking for top-notch web design and development!",
        image:testimonial01,
        name:"Kiran Kumar",
        designation:"Founder, Company Name"
      },
      {
        desc:"CoreWebPro transformed our online store into a seamless, high-converting platform. Their expertise in UI/UX design and e-commerce solutions is unmatched. They not only made our website visually appealing but also optimized it for performance and user experience. Our sales have significantly increased since the redesign. Thank you, CoreWebPro! CoreWebPro has been our go-to agency for all our web design needs.",
        image:testimonial02,
        name:"Shiva Narayuana",
        designation:"Founder, Company Name"
      },
      {
        desc:"Working with CoreWebPro was a game-changer for our startup. They took our vision and turned it into a stunning, user-friendly website that perfectly represents our brand. Their attention to detail and commitment to delivering on time exceeded our expectations. Highly recommend their team for anyone looking for top-notch web design and development!",
        image:testimonial03,
        name:"Kiran Kumar",
        designation:"Founder, Company Name"
      },
      {
        desc:"Working with CoreWebPro was a game-changer for our startup. They took our vision and turned it into a stunning, user-friendly website that perfectly represents our brand. Their attention to detail and commitment to delivering on time exceeded our expectations. Highly recommend their team for anyone looking for top-notch web design and development!",
        image:testimonial04,
        name:"Kiran Kumar",
        designation:"Founder, Company Name"
      },
    ]
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
          {/* Why choose slider */}
          <WhychooseSlider/>
          {/* Testimonials  */}
          <div className="container">
             <div class="row mt-5">
              {testiMonials.map((testimonial)=>(
                 <div className="col-md-6 mb-4">
                    <div className="testimonial p-5 text-text-color rounded-5 h-100">
                       <article>
                          <p>"{testimonial.desc}"</p>
                       </article>
                       <div class="d-flex">
                          <img src={testimonial.image} alt={testimonial.name} />
                          <div className="ps-3 align-self-center">
                              <h6 className="p-0 m-0">{testimonial.name}</h6>
                              <p className="p-0 m-0"><small>{testimonial.designation}</small></p>
                          </div>
                       </div>
                    </div>
                 </div>
                ))}
             </div>
          </div>
        </section>

        {/* news updates */}
        <section className="newsSection position-relative">
          <div className="blurFilter"></div>
              <div className="container">
                <SectionTitle 
                    title="News & Updates"
                    description=" News, Trends, and Updates from Core Web Pro – Your Creative Digital Partner"
                />   
                <div className="text-center">
                    <a className="btn-blue text-white bg-sec d-inline-block mt-3" href="#">
                        <span className="text-uppercase">View All works</span>
                    </a>  
                  </div>   
                <BlogItems/>
                 
              </div>
        </section>
      </main>
    </>
  );
};

export default Home;
