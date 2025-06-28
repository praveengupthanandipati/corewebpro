import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import assets
import webdesignIcon from "../assets/images/expert-web-design-team-icon.png";
import DevelopIcon from "../assets/images/develop-solutions-icon.png";
import SeoIcon from "../assets/images/seo-driven-icon.png";
import supportIcon from "../assets/images/support-icon.png";

const Whychoosehome = () => {
  const autoplaySpeed = 8000; // Define autoplay speed

  const slides = [
    {
      bgColor: "bg-secondary-color",
      title: "Expert Web Design Team",
      subtitle: "Crafting visually stunning, user-friendly websites.",
      description:
        "We blend creativity and functionality to deliver designs that captivate and convert your audience effectively.",
      icon: webdesignIcon,
      textColor: "black",
    },
    {
      bgColor: "bg-light-primary-color",
      title: "Robust Develop Solutions",
      subtitle: "Building scalable, high-performance websites.",
      description:
        "Our developers use cutting-edge tech to ensure your site is fast, secure, and future-proof.",
      icon: DevelopIcon,
      textColor: "secondary-color",
    },
    {
      bgColor: "bg-white",
      title: "SEO-Driven Growth Strategy",
      subtitle: "Boost your search rankings",
      description:
        "We optimize your site with proven SEO techniques to help you dominate search engine results.",
      icon: SeoIcon,
      textColor: "text-black",
    },
    {
      bgColor: "bg-dark-primary-color",
      title: "Reliable Ongoing Support",
      subtitle: "Always here when you need us.",
      description:
        "From updates to troubleshooting, we provide timely support to keep your site running smoothly.",
      icon: supportIcon,
      textColor: "text-white",
    },
  ];
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      grabCursor={true}
    //   pagination={{ clickable: false }}
      modules={[Autoplay]}
      autoplay={{ delay: autoplaySpeed, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={`${slide.bgColor}`}>
          <div className="p-8 position-relative">
            <article>
              <h4 className={`${slide.textColor} font-bold`}>{slide.title}</h4>
              <div className="pt-4 d-flex">
                <h5 className={`${slide.textColor} pe-3`}>{slide.subtitle}</h5>
                <p className={`${slide.textColor}`}>{slide.description}</p>
              </div>
            </article>
            <figure className="position-absolute">
              <img
                src={slide.icon}
                alt={slide.title}
                className="iconImg"
              />
            </figure>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Whychoosehome;
