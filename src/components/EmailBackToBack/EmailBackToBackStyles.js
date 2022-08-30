import React from "react";
import styled from "styled-components"



export const StyledContactForm = styled.div`
  form {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 0px 400px 0px 400px;
 


  @media screen and (max-width: 960px) {
       left: 0;
       padding: 0;
	}

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
      
    }
  }
`;

export const StyledSuccess = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%; 
height: 500px;
background-color: rgba(242,242,242,255);
flex-direction: column;
@media screen and (max-width: 960px) {
display: flex;
justify-content: center;
align-items: center;
width: 100%; 
height: 500px;
background-color: rgba(242,242,242,255);
flex-direction: column;
}


`;

export const StyledSuccessMessage = styled.div`
display: block;
margin: 20px;
color: #00917e;

`;