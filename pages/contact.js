import { useState } from "react";
//import { useForm } from "react-hook-form";
import * as emailjs from 'emailjs-com';
import { useRouter } from 'next/router'
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 80%
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

emailjs.init('Ek1K2vEFTE7NdBkuq');

function Contact() {

// initialize Form Fields
 
  const initialState = {
    subject: '',
    from_name: '',
    message: '',
    reply_to: '',
  };
  
  const [toSend, setToSend] = useState({
    initialState
//    subject,
//    from_name,
//    message,
//    reply_to,
  });

  const [state, setState] = useState();
  const [error, setError] = useState('');
  const [successMessage, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log(state);

    emailjs.send("service_kn7mtyi","template_a0vrqja",
    toSend )
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setMessage("Thank you for contacting us.");
      setToSend({subject: '', from_name: '', message: '', reply_to: ''})

      setTimeout(function(){
        router.reload(window.location.pathname);
     }, 3000);
           
    }, function(error) {
      console.log('FAILED...', error);
    });
  
    setMessage('');
//    for (let key in state) {
//      if (state[key] === '') {
//        setError(`You must provide the ${key}`)
//        return
//      }
  }

  const handleInput = e => {  
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit} >
          <label htmlFor="subject">Subject</label>
          <StyledInput 
            type="text"
            required="required"
            name="subject"
            placeholder="Subject"
            value={toSend.subject}
            onChange={handleInput}
          />
          <label htmlFor="from_name">From Name</label>
          <StyledInput
            type="text"
            required="required"
            name="from_name"
            placeholder="From Name"
            value={toSend.from_name}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <StyledTextArea
            type="text"
            required="required"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleInput}
          />
          <label htmlFor="reply_to">Your Email</label>
          <StyledInput
            type="email"
            required="required"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleInput}
          />

          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          
          <StyledButton type="submit">Send Message     
          </StyledButton>
            {successMessage}      
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
 
};

export default Contact