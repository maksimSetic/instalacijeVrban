import styled from "styled-components";
import { motion } from 'framer-motion';

export const BlogContainer = styled.div`
width: 100%;
width: auto;
height: fit-content;
margin-bottom: 0;
background-color: white;




@media screen and (max-width: 768px) {
   height: fit-content;
   
}
`;

export const BlogContent = styled(motion.div)`{
	display: flex;
    color: white;
	flex-direction: row;
justify-content: space-between;

	@media screen and (max-width: 768px) {
	max-width: 100% !important;
	flex-direction: column;
	flex-basis: 100%;
	justify-content: center;
	align-items: center;
 
	}
`;

export const CardContainer = styled.div`
flex-direction: row;
width: 40rem;
height: auto;
background: #fff;
border-radius: 1.5rem;
padding: 1.5rem;
overflow: hidden;
position: relative;

@media screen and (max-width: 768px) {
flex-direction: row;
width: 20rem;
height: auto;
background: #fff;
border-radius: 1.5rem;
padding: 1.5rem;
overflow: hidden;
position: relative;
 
    
	}
`;

export const CardImageHolder = styled.div`
width: 100%;
height: auto;
position: relative;
`;

export const CardImage = styled.img `
width: 100%;
height: auto;
max-height: 15rem;
object-fit: cover;
border-radius: 1.5rem;
`;

export const CardTitle = styled.h3`
color: #22215B;
padding: 1rem 0;
font-size: 1.5rem;

`;

export const CardTime = styled.span`
font-size: 1rem;
color: #22215B;

`;

export const CardOptions = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1rem;
`;

export const CardDescription = styled.div`
padding: 1rem 0;
color: #22215B80;
font-size: 1rem;
`;

export const CardButton = styled.button`
font-size: 1rem;
padding: .5rem 1rem;
border-radius: .5rem;
font-weight: 400;
background: #EEF7FE;
color: #22215B;
cursor: pointer;

`;
