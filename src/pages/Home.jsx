import React from "react";
import videoSrc from "../assets/videos/video.mp4";

const Home = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInLine>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Home;
