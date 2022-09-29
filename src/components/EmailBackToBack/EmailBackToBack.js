import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { StyledContactForm, StyledSuccess, StyledSuccessMessage, LocationSection, LocationTitle, LocationContainer } from './EmailBackToBackStyles';
import { FormSection, FormTitle } from '../Form/FormStyles';
import { GrValidate } from 'react-icons/gr'


export const EmailBackToBack = () => {
  const form = useRef();
  const [visibleForm, setVisibleForm] = useState(true);
  const [visibleSuccess, setVisibleSuccess] = useState(false);

 

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Zahvaljujemo na poruci, čujemo se uskoro!");
    setVisibleForm(false);
    setVisibleSuccess(true);

    emailjs.sendForm('service_i3jqn2g', 'template_pccxgyv', form.current, 'gYajpj25UZNT0UxDo')
      .then((result) => {
          console.log(result.text);
          console.log("msg sent biiitc")
     
      }, (error) => {
          console.log(error.text);
      });
 
  };


  return (
    <><FormSection>
      {visibleForm && (<><StyledContactForm>
        <FormTitle>Kontakt</FormTitle>
        <form ref={form} onSubmit={sendEmail}>
          <label>Ime i prezime</label>
          <input type="text" name="user_name" required={true} />
          <label>Br telefona</label>
          <input type="text" name="user_number" required={true} />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Vaša poruka</label>
          <textarea name="message" required={true} />
          <input type="submit" value="Pošalji" style={{ backgroundColor: "#00917e" }} />
        </form></StyledContactForm></>)} {visibleSuccess && (<StyledSuccess style={{ color: "white" }}><GrValidate style={{ height: "100px", width: "100px" }} /><StyledSuccessMessage><h2>Zahvaljujemo na javljanju, uskoro ćemo vas kontaktirati!</h2></StyledSuccessMessage>
          <StyledSuccessMessage><h2>Thank you for contacting, you'll hear from us soon!</h2></StyledSuccessMessage></StyledSuccess>)}
    </FormSection>
    
    <LocationSection> 
    <LocationTitle>Kako do nas?</LocationTitle>
    
    <LocationContainer><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5206567678106!2d16.013184!3d45.760754899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667f576247735f%3A0x5ed16298a3830936!2zSmFrdcWhZXZlxI1rYSB1bC4gMTU!5e0!3m2!1shr!2shr!4v1664466321315!5m2!1shr!2shr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></LocationContainer>
    </LocationSection></>
  );
};