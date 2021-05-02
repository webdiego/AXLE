import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"


const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>

const Mailchimp = () => (
  <MailchimpSubscribe
    url={process.env.REACT_APP_MAILCHIMP_URL}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)


export default Mailchimp
