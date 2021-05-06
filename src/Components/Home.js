import React from "react";
import ReactPlayer from "react-player/file";
import Video from "../video/AXLE-VIDEO-EXAMPLE-Lower.mp4";
import Cover from "../img//IPHONE2-min.png"
import Bars from '../img/Bars.png'
import Axle from '../img/AXLE LOGO.png'

import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <div className="bars-container">
       <BarsDesktop src={Bars} alt=""/>
      </div>

      <ContainerHome>
       <div>
       <AxleImg src={Axle} alt="" />
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut dicta quo repudiandae libero beatae?</p>
       </div>

      <ContainerVideo>
        <ReactPlayer
         style={{ position:"absolute",width: "200px", height: "400px" }}
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
         <CoverPhone  src={Cover} alt="cover"/> 
      </ContainerVideo> 
      </ContainerHome>
    </div>
  );
};

export default Home;

const BarsDesktop = styled.img`
width:100%;
height:100vh;
position:relative;
`
const ContainerHome = styled.div`
position:absolute;
top:0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`

const AxleImg = styled.img`
width:20rem;
height:8rem;
`
const ContainerVideo =styled.div`
position:relative;
margin:2rem;
`
const CoverPhone = styled.img`
width:369px;
height:542px;
transform:translateX(-54px)translateY(-40px); 
`