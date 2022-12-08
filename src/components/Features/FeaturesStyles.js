import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	margin: auto;
	text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
	@media screen and (max-width: 768px) {
	}
	
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 2rem;
	grid-gap: 0.2rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 0.2rem;
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}

`;

export const FeatureColumn = styled(motion.div)`
	display: flex;
	color: white;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	transition: 1s ease;
	background-color: #00917e;
	cursor: pointer;
	
	&:hover{
		background-color:  #005f52;
		transition: 1s ease;
		color: white;
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
    background-color: white;
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	line-height: 1.73;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1.2rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	color: white;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
