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
            AXLE provides a time efficient way to organize a haircut that works in with your
            schedule. Simply open up the app, find the hairdresser that you want near you, and book
            a time within minutes.
          </p>
          <p>
            AXLE connects you directly to the source to coordinate a time and place for your
            haircut. So, unlike a traditional haircut, AXLE eliminates the travel and wait time to
            accommodate to your lifestyle.
          </p>
        </Description>
      </ContainerRed>

      <ContainerWhite>
        <Description>
          <h2>Save money</h2>
          <p>
            Unlike the traditional way to get a haircut, AXLE connects you directly to mobile
            hairdressers, eliminating those retail shop charges. ​ ​ The price is set between you
            and your hairstylist via the app, saving you time and MONEY!
          </p>
        </Description>
        <PhoneImg src={Money} alt="phone-money" />
      </ContainerWhite>

      <ContainerRed>
        <PhoneImg src={Control} alt="phone-control" />
        <Description>
          <h2>Take control​ of your haircut</h2>
          <p>
            When looking for a haircut, you can view the profile of hairdressers near you, assess
            their specialities, availability and price range to find your best match. Or simply
            click on a hairstyle that matches your style. Plus, you can check out reviews from their
            previous customers before committing. ​
          </p>
          <p>Then, once you are satisfied, book a convenient time and place for your haircut.</p>
        </Description>
      </ContainerRed>

      <GoalTitle>OUR GOAL</GoalTitle>

      <ContainerGoal>
        <ImgGoal src={Goal} alt="phone-goal" />
        <Description>
          <p>
            We will be a lifestyle platform, committed to helping clients save time and effort
            through an on-demand service.
          </p>
          <p>
          We want to help make getting a haircut easier, more accessible, and stress-free - for everyone. Whether you’re a hairdresser looking to increase your client base, or a client looking for a convenient way to get a haircut, AXLE  can help you look sharp and feel good.
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
const ContainerGoal= styled(ContainerWhite)`
padding:0;
`
const ImgGoal = styled(PhoneImg)`
height:30rem;
@media (max-width: 500px) {
height:20rem;

}
`
const GoalTitle = styled(Solution)`
margin:0;
`