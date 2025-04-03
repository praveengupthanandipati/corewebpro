import React from 'react';
import Blogimage01 from "../assets/images/blogs/blog01.jpg";
import Blogimage02 from "../assets/images/blogs/blog02.jpg";
import Blogimage03 from "../assets/images/blogs/blog03.jpg";

const BlogItems = () => {
    const blogItems = [
        {
            image:Blogimage01,
            title:"Drupal SEO Guide: How to Optimise Your Drupal Site for SEO",
            date:"March 11, 2025"
        }, 
        {
            image:Blogimage02,
            title:"Drupal SEO Guide: How to Optimise Your Drupal Site for SEO",
            date:"March 11, 2025"
        }, 
        {
            image:Blogimage03,
            title:"Drupal SEO Guide: How to Optimise Your Drupal Site for SEO",
            date:"March 11, 2025"
        }, 
    ]
  return (
    
    <>
        <div className="row pt-5">
            {blogItems.map((blogItem)=>(
                <div className="col-md-4">
                    <div class="blogItem">
                        <a href='#'>
                            <img src={blogItem.image} alt={blogItem.title}/>
                        </a>
                        <article>
                            <p><small>{blogItem.date}</small></p>
                            <a href='#'><h4>{blogItem.title}</h4></a>
                        </article>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default BlogItems
