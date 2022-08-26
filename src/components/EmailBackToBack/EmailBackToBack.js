import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { StyledContactForm } from './EmailBackToBackStyles';
import { FormSection, FormTitle } from '../Form/FormStyles';


export const EmailBackToBack = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    alert("Zahvaljujemo na poruci, čujemo se uskoro!");

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
    
    <StyledContactForm>
    <FormTitle>Kontakt</FormTitle>
    <form ref={form} onSubmit={sendEmail}>
      <label>Ime i prezime</label>
      <input type="text" name="user_name" />
      <label>Br telefona</label>
      <input type="text" name="user_number" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Vaša poruka</label>
      <textarea name="message" />
      <input type="submit" value="Pošalji" style={{ backgroundColor: "#00917e"}}/>
    </form> </StyledContactForm></FormSection>
  );
};