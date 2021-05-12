import React from "react";
import {useState} from 'react'
//Player & Styled components
import ReactPlayer from "react-player/file";
import styled from "styled-components";
// PHOTOS,ICONS AND VIDEO
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import VideoMobile from "../video/AXLE-VIDEO-EXAMPLE-Lower-1.26MB.mp4";
import VideoDesktop from "../video/AXLE-VIDEO-EXAMPLE-Lower-2.82MB.mp4";

import Cover from "../img/IPHONE-cover.png";
import Bars from "../img/Bars.svg";
import BarsMobile from "../img/Bars-mobile.svg";
import Axle from "../img/AXLE LOGO.png";


const Home = () => {
const [play,setPlay]= useState(false)
const InnerWidth = window.innerWidth
  return (
    <Container>
      <Social>
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          style={{ color: "white", marginRight: ".8rem" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="2x"
          style={{ color: "white", marginRight: ".8rem" }}
        />
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: "white" }} />
      </Social>

      <ContainerHome>
        <Intro>
          <AxleImg src={Axle} alt="" />
          <p>
            Connect with a hairdresser in your area who will come to you, set a time a place and the
            price that suit you.
          </p>
        </Intro>

        <ContainerVideo>
          <ReactPlayer
           playsInline={true}
            style={{ position: "absolute", width: "20rem", height: "40rem", padding: "16px" }}
            url={InnerWidth > "400" ? VideoDesktop : VideoMobile}
            muted={true}
            width="100%"
            height="100%"
            playing={play}
            volume={0}
            config={{
              file: {
                attributes: { autoPlay:true, muted:true, controls:true, },
              },
            }}
          />
          <CoverPhone src={Cover} alt="cover" onClick={()=>setPlay(true)} />
        </ContainerVideo>
      </ContainerHome>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-image: url(${Bars});
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    background-image: url(${BarsMobile});
    background-size: contain;
  } ;
`;
const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
  } ;
`;
const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  @media (max-width: 900px) {
    height: 100%;
    justify-content: center;
  } ;
`;
const Intro = styled.div`
  margin: 2rem;
  text-align: center;
   width:50%; ; 
  @media (max-width: 900px) {
    width: 100%;
  }
  p {
    font-weight:700;
    line-height:3rem;
    font-size:1.4rem;
    padding: 2rem;
    color:#3D3D3D;
    @media (max-width: 900px) {
      font-size:1.2rem;
    padding: 0rem;
  }
  }
`;

const AxleImg = styled.img`
  width: 25rem;
  height: 10rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
  width: 20rem;
  height: 8rem;
  }
  @media (max-width: 400px) {
  width: 16rem;
  height: 6rem;
  }
`;
const ContainerVideo = styled.div`
  position: relative;
  margin: 2rem;
`;
const CoverPhone = styled.img`
  position: relative;
  height: 40rem;
  transform: translateY(2px);
`;
