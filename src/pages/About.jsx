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

  const innovations = [
    {
      icon:"asterisk",
      title: "Accountability",
      desc: "We are committed to accountability and transparency, and we believe in building trust with our clients by sharing the results of our work.",
    },
    {
      icon:"asterisk",
      title: "Transparency",
      desc: "Your data is a valuable asset. We will always make it available and crystal-clear.",
    },
    {
      icon:"asterisk",
      title: "Quality",
      desc: "You need more than superficial results. We will create a direct path from your customers to you.",
    },
    {
      icon:"asterisk",
      title: "Dedication",
      desc: "Your website is a powerful business tool. We will turn it into a long-term sales machine.",
    },
    {
      icon:"asterisk",
      title: "Growth",
      desc: "You want to achieve your goals this year. We will devise a digital program to get you there.",
    },
    {
      icon:"asterisk",
      title: "Commitment",
      desc: "You’re in it for the long haul with your business. We will be, too.",
    },
  ];
  return (
    <main className="subPage" role="main">
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

        <section className="BusinessGoals">
          <div className="container">
              <h3 className="pb-2 pb-lg-5">
                The digital partner you need, the results you deserve. This is our Core innovations:
              </h3>

              <div class="row">
                {innovations.map((innoItem)=>(
                <div class="col-md-4">
                    <div class="innoCol">
                      <i className={`bi bi-${innoItem.icon}`}></i>
                      <article>
                          <h4>{innoItem.title}</h4>
                          <p>{innoItem.desc}</p>
                      </article>
                    </div>
                </div>
                ))}
              </div>
            </div>
        </section>    
      </section>
    </main>
  );
};

export default About;
