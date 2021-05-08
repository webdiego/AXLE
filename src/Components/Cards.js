import React from "react";
import styled from "styled-components";
import Timer from "../img/timer.svg";
import Weight from "../img/law.svg";
const Cards = () => {
  return (
    <Container>
      <WhyAxle>
        <span>WHY</span> AXLE?
      </WhyAxle>

      <ContainerCards>
        <CardsWhy>
          <img src={Timer} alt="" />
          <h2>EVERYONE IS TIME POOR</h2>
          <p>
            The world is becoming busier and busier. People want to save time wherever is possible,
            without compromising flexibility, choice of hairdresser of quality of cut.
          </p>
        </CardsWhy>
        <CardsWhy>
          <img src={Weight} alt="" />
          <h2>HAIRCUTS CAN BE GABLE</h2>
          <p>
            Getting a haircut can be a lottery. At some chain store, you have no idea who's going to
            cut your hair, what their strengths are, and if you'll look good at the end of it.
          </p>
        </CardsWhy>
      </ContainerCards>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  background: linear-gradient(rgb(246, 246, 246, 0.17), rgb(199, 199, 199, 0.2));
  height: 100%;
`;
const WhyAxle = styled.h1`
  text-align: center;
  color: #3d3d3d;
  font-size: 3rem;
  margin: 3rem 0;
  padding: 5rem 0;
  span {
    color: #e95223;
  }
`;
const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom:4rem;
`;
const CardsWhy = styled.div`
  width: 25rem;
  height: 28rem;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  margin: 0 0.5rem 3rem 0.5rem;
  @media (max-width: 400px) {
    width: 18rem;
    height: 24rem;
  }

  img {
    margin: 2rem 0 1rem 0;
    @media (max-width: 400px) {
      height: 5rem;
    }
  }
  h2 {
    color: #e95223;
    margin: 1rem 0;
    @media (max-width: 400px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0 3rem;
    line-height: 2rem;
    margin: 1rem 0;
    @media (max-width: 400px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
