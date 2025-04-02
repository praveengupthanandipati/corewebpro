// import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import CoLogo from "../assets/images/works/countryovenlogo.png";
import coBanner from "../assets/images/works/imgworks01.jpg";
import BiosynLogo from "../assets/images/works/logo-biosyn.png";
import BioBanner from "../assets/images/works/imgworks02.jpg";
import SaiLogo from "../assets/images/works/logo-saimutyalabs.png";
import SaiBanner from "../assets/images/works/imgworks03.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';

const HomeWorksSwiper = () => {
    const WorkBanners =[
        {
            id:1,
            logo:CoLogo,
            title:"Country Oven",
            description:"Running from one store to the other to find the perfect cake or box of chocolates or anything for that matter is troublesome. Not being able to find what you were exactly looking for can be frustrating.",
            banner:coBanner,
        },
        {
            id:2,
            logo:BiosynLogo,
            title:"BioS Syn",
            description:"Running from one store to the other to find the perfect cake or box of chocolates or anything for that matter is troublesome. Not being able to find what you were exactly looking for can be frustrating.",
            banner:BioBanner,
        },
        {
            id:3,
            logo:SaiLogo,
            title:"Sai Mutya Labs",
            description:"Running from one store to the other to find the perfect cake or box of chocolates or anything for that matter is troublesome. Not being able to find what you were exactly looking for can be frustrating.",
            banner:SaiBanner,
        }
    ]
  return (
    <>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper WorksSwiper"
      >
        {WorkBanners.map((work) => (
        <SwiperSlide key={work.id}>
            <div className="row">
                <div className="col-md-4 align-self-center">
                    <div className='p-5 rounded-4 bg-white'>
                        <img src={work.logo} alt='{work.title}' className="brandLogo"/>
                        <article className="py-3">
                            <h4 className='font-bold'>{work.title}</h4>
                            <p className='p-0 m-0'>{work.description} </p>
                        </article>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={work.banner} className='img-fluid w-100 rounded-4' alt=''/>
                </div>
            </div>
        </SwiperSlide>
        ))}         
      </Swiper>
    </>
  )
}

export default HomeWorksSwiper
