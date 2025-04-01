import React from 'react';
import UxImage from "../assets/images/uiuxhomeimg.png";
import webDevImg from "../assets/images/webdevhomeimg.png";
import mobDevImg from "../assets/images/mobilehomeimg.png";
import seoImg  from "../assets/images/seohomeimg.png";

const HomeServices = () => {

    const services =[
        {
            id:1,
            title:"Crafting Intuitive UI/UX Designs",            
            description:"We create simple, user-friendly designs that make your website or app easy to use and visually appealing, helping your business grow and engage users.",
            image:UxImage,
            labels:[
                "User Research", "Prototyping", "Wireframing", "Visual Design", "Interaction Design", "Responsive Design", "Microinteractions", "Dashboard Design", "Mobile App Design", "User Flow Design"],
            link:"UXServices"
        },
        {
            id:2,
            title:"Modern  Web Development ",            
            description:"We design and develop fast, user-friendly, and responsive websites tailored to your business needs, ensuring seamless performance across all devices.",
            image:webDevImg,
            labels:[
                "Frontend Development", "Backend Development", "Full-Stack Development", "Responsive Design", "E-Commerce Development", "Content Management  (CMS)", "API Integration", "Website Maintenance", "Performance Optimization", "Security Implementation", "Domain & Hosting Services"],
            link:"WebDevelopment"
        },
        {
            id:3,
            title:"Innovative Mobile Design & Development ",            
            description:"We create sleek, high-performance mobile apps with intuitive designs, tailored to your business goals and optimized for seamless user experiences.",
            image:mobDevImg,
            labels:[
                "iOS App Development", "Android App Development", "Cross-Platform Development", "Mobile UI/UX Design", "API Integration", "App Testing & Debugging", "Performance Optimization", "App Maintenance"],
            link:"MobileServices"
        },
        {
            id:4,
            title:"Strategic Digital Marketing Solutions ",            
            description:"We drive growth with data-driven strategies, including SEO, social media, and ads, to boost your online presence and reach your target audience.",
            image:seoImg,
            labels:[
                "Search Engine Optimization (SEO)", "Social Media Marketing", "Pay-Per-Click Advertising (PPC)", "Content Marketing", "Conversion Rate Optimization (CRO)", "Online Reputation Management", "Analytics & Reporting Email Marketing", "Influencer Marketing"],
            link:"SeoServices"
        },
    ];

   

  return (
    <div>
        {services.map((service, index)=>(
             <div className="row serviceRow justify-content-between"  key={service.id}>
               <div className={`col-md-6 align-self-center ${index % 2 !== 0 ? 'order-md-last' : ''}`}>
                    <article className='serviceDesc'>
                        <h4 className='pb-2'>{service.title}</h4>
                        <p>{service.description}</p>
                        <ul>
                            {service.labels.map((label, index)=>(
                                <li key={'label-${service.id}-${id}'}>{label}</li>
                            ))}              
                        </ul>
                        <a className="btn-blue text-white bg-sec d-inline-block mt-3" href={service.link}>
                            <span className="text-uppercase">Read More</span>
                        </a>
                    </article>
                </div>
                <div className='col-md-5'>
                    <img src={service.image} alt={service.title} className='img-fluid' />
                </div>
            </div>
        ))}
   
     
    </div>
  )
}

export default HomeServices
