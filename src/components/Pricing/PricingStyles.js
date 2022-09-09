import styled from 'styled-components';

export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: rgba(242,242,242,255);
	height: fit-content;

`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PricingCardImg = styled.img`
width: 300px;
height: 250px;
opacity: 90%;
`;

export const PricingCardExcerpt = styled.div`
height: fit-content;
background-color: white;
box-shadow: -5px 5px 15px rgba(0,0,0, .3);
margin-top: -5px;
`;



export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	background-color: rgba(242,242,242,255);

	@media screen and (max-width: 768px) {
		display: flex;
		margin-right: 100px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
margin-bottom: 30px;
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	background: white;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
display: flex;
align-items: center; 
justify-content: center;
	font-size: 1.5rem;
	color: black;
	
`;

export const PricingCardCost = styled.h4`
margin-top: 30px;
	font-size: 1.3rem;
	color: #fff;
`;

export const PricingCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #fff;
`;

export const PricingCardFeatures = styled.ul`
	color: #fff;
	
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	font-size: 1.3rem;
	color: #fff;

	&:before {
		margin-right: 0.4rem;
	}
`;

export const PricingIconContainer = styled.div`

`;

export const PricingIcon = styled.div`
display: contents;
`;