import React from "react";
import styled from "styled-components";

export const DropdownContainer = styled.div`
display: flex;
justify-content: center;
height: 40px;
background-color: #00917e;
transition: 0.8s ease;
margin-bottom: 50px;
overflow: hidden;

&:hover{
  height: 850px;
  transition: 0.7s ease;
}

@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: #00917e;
  transition: 0.8s ease;
  margin-bottom: 40px;
  overflow: hidden;
}


`;

export const DropdownIcon = styled.div`
display: flex;
justify-content: center;
align-items: center; 
height: 50px;
width: 50px;

`;