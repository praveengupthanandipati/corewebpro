import React from "react";
import homeUXimg from "../assets/images/homeUIUXimg.jpg";
import homeWebDevimg from "../assets/images/homewebdevelopment_img.jpg";
import homeMobileDevimg from "../assets/images/homemobiledevelopment_img.jpg";
import homeDigitalMarketingimg from "../assets/images/homedigitalmarketing_img.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Crafting Intuitive UI/UX Designs",
    labels: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Responsive Design",
      "Microinteractions",
      "Dashboard Design",
      "Mobile App Design",
      "User Flow Design",
    ],
    description:
      "We transform ideas into user-centric designs that delight and engage. Our UI/UX process blends aesthetics with functionality, ensuring seamless navigation, clear layouts, and accessible interfaces. Whether it’s websites or apps, we prioritize intuitive experiences that keep users coming back.",
    img: homeUXimg,
    alt: "UI/UX Design",
  },
  {
    title: "Modern Web Development",
    labels: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "Responsive Design",
      "E-Commerce Development",
      "Content Management  (CMS)",
      "API Integration",
      "Website Maintenance",
      "Performance Optimization",
      "USecurity Implementation",
      "Domain & Hosting Services",
    ],
    description:
      "We build lightning-fast, future-ready websites using cutting-edge technologies like React, Next.js, and Node.js. Our full-stack development approach ensures your site is responsive, scalable, and secure - whether you need a simple business website or complex SaaS platforms. We optimize for SEO, performance, and user experience, implementing clean code architecture that grows with your business. From e-commerce to web applications, we deliver solutions that convert visitors into customers.",
    img: homeWebDevimg,
    alt: "Modern Web Development",
  },
  {
    title: "Innovative Mobile Development",
    labels: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "Mobile UI/UX Design",
      "App Prototyping",
      "API Integration",
      "App Testing & Debugging",
      "Performance Optimization",
      "App Maintenance ",
    ],
    description:
      "Transform your ideas into powerful mobile experiences with our cross-platform app development expertise. Using Flutter and React Native, we create feature-rich applications with native-like performance for both iOS and Android. Our focus extends beyond development - we craft intuitive UIs, implement robust security, and ensure seamless functionality. Whether it's a startup MVP or enterprise solution, we build apps that users love while keeping maintenance costs low through optimized architecture.",
    img: homeMobileDevimg,
    alt: "Innovative Mobile Development",
  },
  {
    title: "Strategic Digital Marketing ",
    labels: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "Mobile UI/UX Design",
      "App Prototyping",
      "API Integration",
      "App Testing & Debugging",
      "Performance Optimization",
      "App Maintenance ",
    ],
    description:
      "Our data-powered digital marketing strategies drive real business growth. We combine SEO optimization, targeted social media campaigns, and high-converting PPC ads to increase your visibility and attract quality leads. From content marketing to email automation, we create customized funnels that nurture prospects into loyal customers. With continuous A/B testing and analytics, we refine campaigns to maximize your ROI and online authority in competitive markets.",
    img: homeDigitalMarketingimg,
    alt: "Innovative Mobile Development",
  },
  // Add more service objects here as needed
];

const Homsservices = () => {
  return (
    <section className="services-section custom-container">
      {services.map((service, idx) => (
        <div className="row service-row" key={idx}>
          <div
            className={`col-md-9 col-sm-8${
              idx % 2 === 1 ? " order-last ps-md-5" : ""
            }`}
          >
            <article>
              <h2 className="font-semibold">{service.title}</h2>
              <div className="service-labels">
                {service.labels.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
              </div>
              <p>{service.description}</p>
              <Link to="" className="orangebtn mt-4">
                Read More <i className="ri-arrow-right-long-line"></i>
              </Link>
            </article>
          </div>
          <div className="col-md-3 col-sm-4">
            <img
              src={service.img}
              alt={service.alt}
              className="img-fluid homeServiceImg"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Homsservices;
