import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
	PricingCardImg,
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';
import "./PricingStyles.scss"

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<Heading style={{color: "#00917e"}}>Odaberi preferirani proizvod</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						
					</TextWrapper>
					<PricingContainer>
						{pricingData.map((card, index) => (
							 <div id="card-container">
							 <div id="card2">
							   <div class="front face">
								 <PricingCardImg src={card.img}/>
							   </div>
							   <div class="back face">
								 <PricingCardPlan>{card.title}</PricingCardPlan>
								 <PricingCardText class="artist">{card.text}</PricingCardText>
								 <p class="date">2015</p>
								 <Button>Odaberi</Button>
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
export default Pricing;
