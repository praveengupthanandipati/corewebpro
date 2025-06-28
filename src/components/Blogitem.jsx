import React from "react";
import blogImg from "../assets/images/blogs/blog01.jpg";
import { Link } from "react-router-dom";

const Blogitem = ({ to, imgSrc, imgAlt, date, title }) => {
  return (
    <Link to={to} className="blog-item d-inline-block">
      <figure className="mb-0">
        <img src={imgSrc} alt={imgAlt} className="img-fluid rounded-4" />
      </figure>
      <article className="pt-3">
        <p>
          <small className="small">
            <i>Posted: {date}</i>
          </small>
        </p>
        <h6 className="font-regular pt-2">{title}</h6>
      </article>
    </Link>
  );
};
export default Blogitem;
