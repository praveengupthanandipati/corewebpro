import React from "react";
import SubpageHeader from "../components/SubpageHeader";
import AboutImg01 from "../assets/images/aboutimg.png";

const About = () => {
  const columns = [
    {
      title: "Philosphy",
      desc: "Our company philosophy is to create the kind of website that most businesses want: easy to find, stylish and appealing, quick loading, mobile responsive and easy to buy from.",
    },
    {
      title: "Our Commitment",
      desc: "We take pride in our on time delivery and ability to meet quick turn around requests while exceeding customer quality demands. Customer Satisfaction continues to be of utmost importance to CWS, as do Consistent quality, Constant innovation, Technology enhancement, Process improvement and Customer orientation.",
    },
    {
      title: "Our Mission",
      desc: "To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.",
    },
    {
      title: "Our Vision",
      desc: "To become a prime performer, in providing quality Web, Print and Software solutions in the competitive global market place. We aspire to be the world’s best IT Solutions Partner, through technology leadership, innovation and a world class work force.",
    },
  ];
  return (
    <section className="subPage">
      <SubpageHeader
        subTitle="Welcome to Core Web Pro"
        mainTitle="Create. Convert. Scale"
      />
      {/* main section */}
      <section className="subpageMain">
        <div className="container">
          <h2 className="pb-2 pb-lg-5">
             We provide a full spectrum of custom web and mobile application development.           
          </h2>
          <img src={AboutImg01} alt={AboutImg01} className="img-fluid" />
        </div>

        <section className="maincolumns mt-3 mt-md-5">
          <div className="container">
            <h3 className="pb-2 pb-lg-5"> Coreweb pro is a premium design agency that focuses on quality,
            innovation, & speed. We utilized technology to bring results to grow
            our clients businesses. We pride ourselves in great work ethic,
            integrity, and end-results. Throughout the years EasyWeb has been
            able to create stunning, award winning designs in multiple verticals
            while allowing our clients to obtain an overall better web presence.</h3>
            <div class="row">
              {columns.map((item, index) =>(
              <div class="col-md-6 mb-2 mb-md-4">
                <div className="maincolumn-col p-3 p-md-5 rounded-3 h-100">
                  <h3>{item.title}</h3>
                  <p>
                   {item.desc}
                  </p>
                </div>
              </div>      
              ))}      
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;
