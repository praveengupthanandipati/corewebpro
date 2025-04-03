import React from 'react';
import SubpageHeader from '../components/SubpageHeader';
import AboutImg01 from "../assets/images/aboutimg.png"

const About = () => {
  return (
    <section className="subPage">
        <SubpageHeader
            subTitle ="Welcome to Core Web Pro"
            mainTitle="Create. Convert. Scale"
        />
        <section className="subpageMain">
           <div className='container'>
                <h2 className='pb-2 pb-lg-5'>Magic happens when the brightest minds come together, regardless of where they’re from. Today, we are a fully distributed team of Proxonauts who love a good challenge and thrive in a culture of complexity and innovation.</h2>

                <img src={AboutImg01} alt={AboutImg01} className='img-fluid' />

           </div>
        </section>
    </section>
  )
}

export default About
