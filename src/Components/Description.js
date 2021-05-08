import React from "react";
import styled from "styled-components";

// IMG
// import Control from "../img/Control-phone.png";
// import Money from "../img/Save-Money-phone.png";
import Time from "../img/Save-Time-Phone.png";
// import Goal from "../img/Goal-phone.png";

const Description = () => {
  return (
    <div>
      <Solution>OUR SOLUTION</Solution>
      <ContainerRed>
       <img src={Time} alt="" />
       <Description>
         <h2>Save Time</h2>
         <p></p>
       </Description>
      </ContainerRed>
    </div>
  );
};

export default Description;

const Solution = styled.h1`
  color: #e95223;
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0;
  padding: 5rem 0;
`;
const ContainerRed=styled.div`
height:60rem;
background-color: #e95223;
`