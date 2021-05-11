import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";

import SubscribeImg from "../img/Barber-Comunity.png";
import AxleSub from "../img/Axle-trip.svg";
const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />;

const Subscribe = () => (
  <SubscribeContainer>
    <h2>Join our community and get notified when we launch!</h2>
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <FormSub>
          
          <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && (
            <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </FormSub>
      )}
    />
  </SubscribeContainer>
);

export default Subscribe;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
  background-image: url(${SubscribeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 10rem;
 
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    @media (max-width: 400px) {
      font-size: 1.5rem;
      line-height: 3rem;
    }
  }

`;
const FormSub = styled.div`

  div{

    @media (max-width: 600px) {
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    };
  }
  input {
    background-color: #3d3d3d;
    color: white;
    border: none;
    padding: 1rem 4rem;
    border-radius: 30px;
    text-align: center;
    z-index: 100;
    position: relative;
    font-family: "Quicksand", sans-serif;
    outline: none;
    @media (max-width: 600px) {
      padding: 1rem 4rem;
      font-size:.9rem;
    }
  }
  button {
    background-color: #f57952;
    color: white;
    border: none;
    padding: 1rem 2rem 1rem 4rem;
    transform: translateX(-54px);
    border-radius: 30px;
    z-index: 0;
    font-family: "Quicksand", sans-serif;
    cursor: pointer;
    @media (max-width: 600px) {
      padding: 1rem 3rem;
      transform: translateX(0px);
      margin-top:1rem;

    };
  }
`;
