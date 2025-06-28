import React from "react";
import Blogitem from "./Blogitem";
import Blog01 from "../assets/images/blogs/blog01.jpg";
import Blog02 from "../assets/images/blogs/blog02.jpg";
import Blog03 from "../assets/images/blogs/blog03.jpg";
import Blog04 from "../assets/images/blogs/blog04.jpg";
import Blog05 from "../assets/images/blogs/blog05.jpg";
import Blog06 from "../assets/images/blogs/blog06.jpg";

const BlogSection = ({ limit }) => {
  const BlogPosts = [
    {
      id: 1,
      to: "TheFutureofAI",
      img: Blog01,
      postedDate: "Oct 14, 2022",
      title: "The Future of AI: How ChatGPT is Changing Businesses",
    },
    {
      id: 2,
      to: "BlockchainBeyondBitcoin",
      img: Blog02,
      postedDate: "Oct 14, 2022",
      title: "Blockchain Beyond Bitcoin: Smart Contracts and Web3 Revolution",
    },
    {
      id: 3,
      to: "5gvswifi",
      img: Blog03,
      postedDate: "Oct 14, 2022",
      title: "5G vs. Wi-Fi 6: Which Delivers Faster Connectivity?",
    },
    {
      id: 4,
      to: "Cybersecurity",
      img: Blog04,
      postedDate: "Oct 14, 2022",
      title: "Cybersecurity in 2024: Top Threats and Protection Strategies",
    },
    {
      id: 5,
      to: "Cybersecurity1",
      img: Blog05,
      postedDate: "Oct 14, 2022",
      title: "Cybersecurity in 2024: Top Threats and Protection Strategies New",
    },
    {
      id: 6,
      to: "Cybersecurity2",
      img: Blog06,
      postedDate: "Oct 14, 2022",
      title:
        "Cybersecurity in 2024: Top Threats and Protection Strategies New One",
    },
  ];
  const displayedPosts = limit ? BlogPosts.slice(0, limit) : BlogPosts;
  return(
  <div className="blog-section row">
    {displayedPosts.map((post) => (
      <div className="col-md-3" key={post.id}>
        <Blogitem
          to={post.to}
          imgSrc={post.img}
          imgAlt={post.title}
          date={post.postedDate}
          title={post.title}
        />
      </div>
    ))}
  </div>
  );
};

export default BlogSection;
