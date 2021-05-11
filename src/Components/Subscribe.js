import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from "styled-components";

import SubscribeImg from '../img/Barber-Comunity.png'
import AxleSub  from '../img/Axle-trip.svg'
const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>

const Subscribe = () => (
  <SubscribeContainer>
    <h2>Join our community and get notified when we launch!</h2>
    <MailchimpSubscribe
      url={process.env.REACT_APP_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <div style={{backgroundColor:"red"}}>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    />
  </SubscribeContainer>
)


export default Subscribe

const SubscribeContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-end; 
height:40rem;
background-image: url(${AxleSub});
background-repeat: no-repeat;
background-position:center;
background-size:contain;
margin:5rem;
h2{
  margin-bottom:2rem;
  font-size:2rem;
}
`