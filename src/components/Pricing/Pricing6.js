import React from 'react';
import { Button, HeadingPricing, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardPlan,
	PricingCardCost,
	PricingCardText,
	PricingCardFeature,
	PricingCardImg,
} from './PricingStyles';
import { pricingData6 } from '../../data/PricingData';
import "./PricingStyles.scss"

function Pricing6() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
		<PricingSection id="pricing">
				<PricingWrapper>
				<HeadingPricing style={{color: "#00917e", display: "flex", justifyContent: "center", marginBottom: "20px"}}>Bakrene cijevi</HeadingPricing>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						
					</TextWrapper>
					<PricingContainer>
						{pricingData6.map((card, index) => (
							 <div id="card-container">
							 <div id="card2">
							   <div class="front face">
								 <PricingCardImg src={card.img}/>
							   </div>
							   <div class="back face"  style={{backgroundColor: "#00917e"}}>
								 <PricingCardPlan>{card.title}</PricingCardPlan>
								 <PricingCardText class="artist">{card.text}</PricingCardText>
								 <PricingCardFeature>{card.features}</PricingCardFeature>
								 <PricingCardCost class="date">{card.price}</PricingCardCost>
								 <Button style={{ marginTop: "30px"}}>Odaberi</Button>
							   </div>
							 </div>
						
						   </div>
								
						
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection> 
		</IconContext.Provider>
	);
}
export default Pricing6;
