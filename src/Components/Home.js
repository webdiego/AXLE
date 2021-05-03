import React from "react";
import ReactPlayer from "react-player";
import Video from "../video/AXLE demo.mp4";
import Cover from "../img/IphoneCoverVideo.png"
const Home = () => {
  return (
    <div>
      <div className="video" style={{ width: "200px", height: "400px" }}>
        <ReactPlayer
        style={{ position:"relative" }}
          url={Video}
          volume={0}
          muted={true}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {autoPlay: "true" },
            },
          }}
        />
        <img style={{position:"absolute", top:"0",widht:"100%", height:"100%"}} src={Cover} alt=""/>
      </div>
    </div>
  );
};

export default Home;
