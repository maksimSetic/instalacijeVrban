import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { StyledContactForm, StyledSuccess, StyledSuccessMessage } from './EmailBackToBackStyles';
import { FormSection, FormTitle } from '../Form/FormStyles';
import { GrValidate } from 'react-icons/gr'
import { IconContext } from 'react-icons/lib';


export const EmailBackToBack = () => {
  const form = useRef();
  const [visibleForm, setVisibleForm] = useState(true);
  const [visibleSuccess, setVisibleSuccess] = useState(false);

 

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Zahvaljujemo na poruci, čujemo se uskoro!");
    setVisibleForm(false);
    setVisibleSuccess(true);

    emailjs.sendForm('service_7tdeq4u', 'template_jd7ud8w', form.current, 'XbdOozIbbtsNJ7a1R')
      .then((result) => {
          console.log(result.text);
          console.log("msg sent biiitc")
     
      }, (error) => {
          console.log(error.text);
      });
 
  };


  return (
    <FormSection>
    { visibleForm && ( <><StyledContactForm>
        <FormTitle>Kontakt</FormTitle>
        <form ref={form} onSubmit={sendEmail}>
          <label>Ime i prezime</label>
          <input type="text" name="user_name" required={true} />
          <label>Br telefona</label>
          <input type="text" name="user_number" required={true} />
          <label>Email</label>
          <input type="email" name="user_email" required={true} />
          <label>Vaša poruka</label>
          <textarea name="message" required={true} />
          <input type="submit" value="Pošalji" style={{ backgroundColor: "#00917e" }} />
        </form></StyledContactForm></>)} { visibleSuccess && (<StyledSuccess style={{color: "white"}} ><GrValidate style={{height: "100px", width: "100px"}}/><StyledSuccessMessage><h2>Zahvaljujemo na javljanju, uskoro ćemo vas kontaktirati!</h2></StyledSuccessMessage>
      <StyledSuccessMessage><h2>Thank you for contacting, you'll hear from us soon!</h2></StyledSuccessMessage ></StyledSuccess>)}
   </FormSection>
  );
};