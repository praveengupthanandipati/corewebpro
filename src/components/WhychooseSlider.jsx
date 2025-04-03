import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import sliderLogo01 from '../assets/images/works/slider-logos/whybrand01.png';
import sliderLogo02 from '../assets/images/works/slider-logos/whybrand02.png';
import sliderLogo03 from '../assets/images/works/slider-logos/whybrand03.png';
import sliderLogo04 from '../assets/images/works/slider-logos/whybrand04.png';
import sliderLogo05 from '../assets/images/works/slider-logos/whybrand05.png';
import sliderLogo06 from '../assets/images/works/slider-logos/whybrand06.png';
import sliderLogo07 from '../assets/images/works/slider-logos/whybrand01.png';
import sliderLogo08 from '../assets/images/works/slider-logos/whybrand02.png';
import sliderLogo09 from '../assets/images/works/slider-logos/whybrand03.png';
import sliderLogo10 from '../assets/images/works/slider-logos/whybrand04.png';
import sliderLogo11 from '../assets/images/works/slider-logos/whybrand05.png';
import sliderLogo12 from '../assets/images/works/slider-logos/whybrand06.png';
import sliderLogo13 from '../assets/images/works/slider-logos/whybrand01.png';
import sliderLogo14 from '../assets/images/works/slider-logos/whybrand02.png';
import sliderLogo15 from '../assets/images/works/slider-logos/whybrand03.png';
import sliderLogo16 from '../assets/images/works/slider-logos/whybrand04.png';
import sliderLogo17 from '../assets/images/works/slider-logos/whybrand05.png';
import sliderLogo18 from '../assets/images/works/slider-logos/whybrand06.png';

const WhychooseSlider = () => {
    const sliderLogos=[
        sliderLogo01, sliderLogo02, sliderLogo03, sliderLogo04, sliderLogo05, sliderLogo06,
        sliderLogo07, sliderLogo08, sliderLogo09, sliderLogo10, sliderLogo11, sliderLogo12,
        sliderLogo13, sliderLogo14, sliderLogo15, sliderLogo16, sliderLogo17, sliderLogo18,
    ]
  return (
    <div>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
           autoplay={{
            delay:2500,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
           }}
           loop={true}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 10,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
      >
            {sliderLogos.map((logo, index)=>(
            <SwiperSlide key={index}>
                <img src={logo} alt={`Brand Logo ${index + 1}`} />
            </SwiperSlide>           
            ))}
      </Swiper>
    </div>
  )
}

export default WhychooseSlider
