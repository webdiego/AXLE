import React from "react";
import styled from "styled-components";

// IMG
import Time from "../img/Save-Time-Phone.svg";
import Money from "../img/Save-Money-phone.svg";
import Control from "../img/Control-phone.svg";
import Goal from "../img/Goal-phone.svg";

import { ContainerRed, ContainerWhite, PhoneImg, Description } from "../Style/Component-style";
const How = () => {
  return (
    <div>
      <Solution>OUR SOLUTION</Solution>
      <ContainerRed>
        <PhoneImg src={Time} alt="phone-time" />
        <Description>
          <h2>Save time and effort, get your haircut to come to you​</h2>
          <p>
            AXLE app provides a time efficient way to organize a haircut that works to your
            schedule. Simply open up the app, find a hairdresser near you and book a haircut within
            seconds.
          </p>
          <p>
            AXLE connects you directly to the source to coordinate a time and place for your
            haircut. Unlike a traditional haircut AXLE eliminates the travel and wait time to help
            accommodate to your lifestyle.
          </p>
        </Description>
      </ContainerRed>

      <ContainerWhite>
        <Description>
          <h2>Save money</h2>
          <p>
            AXLE connects you directly to mobile hairdressers, eliminating those retail shop
            charges. The price is set between you and your hairstylist via the app, saving you time
            and MONEY!
          </p>
        </Description>
        <PhoneImg src={Money} alt="phone-money" />
      </ContainerWhite>

      <ContainerRed>
        <PhoneImg src={Control} alt="phone-control" />
        <Description>
          <h2>Take control​ of your haircut</h2>
          <p>
            By simply clicking on the hairstyle you like you can view to the hairdressers profile,
            assess their specialities, availability and price range to find your best match. You can
            also check out reviews from previous customers before committing. ​
          </p>
          <p>Once you are satisfied, book your haircut and get back to living your life.</p>
        </Description>
      </ContainerRed>

      <GoalTitle>OUR GOAL</GoalTitle>

      <ContainerGoal>
        <ImgGoal src={Goal} alt="phone-goal" />
        <Description>
          <p>
            AXLE will be the lifestyle platform committed to helping people save time and effort
            through an on-demand service.
          </p>
          <p>
            We want to help make getting a haircut easier, more accessible and stress-free for
            everyone. Whether you are a hairdresser looking to increase your client base or someone
            who just needs a haircut, AXLE is here to help!
          </p>
        </Description>
      </ContainerGoal>
    </div>
  );
};

export default How;

const Solution = styled.h1`
  color: #e95223;
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0;
  padding: 5rem 0;
  @media (max-width: 400px) {
    font-size: 2rem;
    padding: 2rem 0;
  }
`;
const ContainerGoal = styled(ContainerWhite)`
  padding: 0;
  margin-bottom: 6rem;
`;
const ImgGoal = styled(PhoneImg)`
  height: 30rem;
  @media (max-width: 500px) {
    height: 20rem;
  }
`;
const GoalTitle = styled(Solution)`
  margin: 0;
  padding: 1rem;
`;
