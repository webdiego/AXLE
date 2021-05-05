import React from "react";
import ReactPlayer from "react-player/file";
import Video from "../video/AXLE-VIDEO-EXAMPLE-Lower.mp4";
import Cover from "../img//IPHONE2.png"

import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <div className="video" style={{ width: "200px", height: "400px",margin:"2rem" }}>
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
         <CoverPhone  src={Cover} alt=""/> 
      </div>
    </div>
  );
};

export default Home;

const CoverPhone = styled.img`
position:absolute;
top:0;
width:315px;
height:467px;
transform:translateX(-58px)translateY(-2px);
`