//Mailchimp
import MailchimpSubscribe from "react-mailchimp-subscribe";
//StyledComponents
import styled from "styled-components";
//Img
import SubscribeImg from "../img/Barber-Community.png";

const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />;
   
const Subscribe = () => (
  <SubscribeContainer>
    <h2>Pre-register now, join our community and get notified when we launch!</h2>
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <FormSub>
          <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
      {status === "sending" && (
            <PopperSending>
              {" "}
              <h4>sending..</h4>{" "}
            </PopperSending>
          )}
          {status === "error" && (
            <PopperError>
              {" "}
              <h4>{{ __html: message }}</h4>{" "}
            </PopperError>
          )}
          {status === "success" && (
            <Popper>
              {" "}
              <h4>Subscribed !</h4>{" "}
            </Popper>
          )}
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
  height: 20rem;
  background-image: url(${SubscribeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 10rem;
  @media (max-width: 600px) {
    height: 30rem;
    margin-top: 4rem;

    }

  h2 {
    color:#3D3D3D;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
    padding: 2rem;
    line-height: 3rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
`;
const FormSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
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
      font-size: 0.9rem;
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
      margin-top: 1rem;
    }
  }
`;
const Popper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0db10d;
  width: 8rem;
  height: 2rem;
  border-radius: 13px;
  color: white;
  margin-top: 2rem;
`;
const PopperError = styled(Popper)`
  background-color: #d84214;
`;
const PopperSending = styled(Popper)`
  background-color: #bfbfbf;
  color:#3D3D3D;
`;
