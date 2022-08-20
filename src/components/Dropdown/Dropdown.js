import React, {useEffect} from "react";
import "./DropdownStyles.js"
import { DropdownContainer, DropdownIcon } from "./DropdownStyles.js";
import { Button, Heading, TextWrapper } from '../../globalStyles';
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
} from '../Pricing/PricingStyles';
import { pricingData } from '../../data/PricingData';
import "../Pricing/PricingStyles.scss"
import { FaArrowCircleDown } from "react-icons/fa"


const Dropdown = () => {

    return ( <DropdownContainer> <DropdownIcon><FaArrowCircleDown style={{ color: "white"}} /></DropdownIcon>	<PricingContainer>
        {pricingData.map((card, index) => (
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
    </PricingContainer> </ DropdownContainer>)
    
    
}


export default Dropdown