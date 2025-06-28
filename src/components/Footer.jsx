import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="top-footer">
          <div className="custom-container">
            <div className='row'>
              <div className='col-md-3'>
                <p className='text-start'>At Corewebpro, we bring together a diverse group of strategists, creatives, technology experts, and innovative thinkers. <Link to="/" className="text-decoration-underline text-black font-semibold">Read More</Link></p>
              </div>
              <div className="col-md-3">
                  <ul className="footer-links">
                    <li>
                      <Link to="/" className="text-black font-medium">Home</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">About</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Works</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Blog</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Contact</Link>
                    </li>                   
                  </ul>
              </div>
              <div className="col-md-3">
                  <ul className="footer-links">
                    <li>
                      <Link to="/" className="text-black font-medium">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Mobile Development</Link>
                    </li>
                    <li>
                      <Link to="/" className="text-black font-medium">Digital Marketing</Link>
                    </li>                                   
                  </ul>
              </div>
               <div className="col-md-3">
                  <ul className="footer-links">
                    <li>
                      <div> <i class="ri-facebook-fill h5"></i> <Link to="/" className="text-black font-medium" target='_blank'>Facebook</Link></div>
                    </li>
                    <li>
                      <div><i class="ri-twitter-x-fill h5"></i> <Link to="/" className="text-black font-medium" target='_blank'> Twitter / X</Link></div>
                    </li>
                    <li>
                      <div><i class="ri-linkedin-fill h5"></i>  <Link to="/" className="text-black font-medium" target='_blank'>Linkedin</Link></div>
                    </li>
                    <li>
                      <div><i class="ri-instagram-fill h5"></i> <Link to="/" className="text-black font-medium" target='_blank'> Instagram</Link></div>
                    </li>                                   
                  </ul>
              </div>
            </div>
         </div>
        </section> 

        <section className='bottom-footer'>
           <div className="custom-container">
             <p className='text-center'>Copyright © 2023 Corewebpro. All rights reserved.</p>
           </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
