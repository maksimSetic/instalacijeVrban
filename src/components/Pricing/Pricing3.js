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
	PricingCardExcerpt,
	PricingCardImg,
} from './PricingStyles';
import { pricingData2 } from '../../data/PricingData';
import "./PricingStyles.scss"

function Pricing3() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
		<PricingSection id="pricing">
				<PricingWrapper>
				<HeadingPricing style={{color: "#00917e", display: "flex", justifyContent: "center", marginBottom: "20px"}}>Bojleri/Spremnici</HeadingPricing>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						
					</TextWrapper>
					<PricingContainer>
						{pricingData2.map((card, index) => (
							 <div id="card-container">
							 <div id="card2">
							   <div class="front face">
								 <PricingCardImg src={card.img}/>
								 <PricingCardExcerpt><PricingCardPlan>{card.title}</PricingCardPlan></PricingCardExcerpt>
							   </div>
							   <div class="back face"  style={{backgroundColor: "#00917e"}}>
								 <PricingCardText class="artist">{card.text}</PricingCardText>
								 <PricingCardFeature>{card.features1}</PricingCardFeature>
								 <PricingCardFeature>{card.features2}</PricingCardFeature>
								 <PricingCardFeature>{card.features3}</PricingCardFeature>
								 <PricingCardCost class="date">{card.price}</PricingCardCost>
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
export default Pricing3;
