import React from "react";
import "./DropdownStyles.js";
import { DropdownContainer, DropdownIcon } from "./DropdownStyles.js";
import { Button } from "../../globalStyles";
import {
  PricingContainer,
  PricingCardPlan,
  PricingCardCost,
  PricingCardText,
  PricingCardFeature,
  PricingCardImg,
  PricingCardExcerpt,
} from "../Pricing/PricingStyles";
import { pricingData7 } from "../../data/PricingData";
import "../Pricing/PricingStyles.scss";
import { FaArrowCircleDown } from "react-icons/fa";
import { FcApproval } from "react-icons/fc"

const Dropdown = () => {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          fontSize: "40px",
          color: "#00917e"
        }}
      >
        Izdvajamo iz ponude!
        <FcApproval style={{ marginLeft: "10px", height: "50px", width: "50px"}} /></h2> 
      <DropdownContainer>
        <DropdownIcon>
          <FaArrowCircleDown style={{ color: "white" }} />
        </DropdownIcon>
        <PricingContainer>
						{pricingData7.map((card, index) => (
							 <div id="card-container">
							 <div id="card2">
							   <div class="front face">
								 <PricingCardImg src={card.img}/>
								 <PricingCardExcerpt><PricingCardPlan>{card.title}</PricingCardPlan></PricingCardExcerpt>
							   </div>
							   <div class="back face"  style={{backgroundColor: "#00917e"}}>
								 <PricingCardText class="artist">{card.text}</PricingCardText>
								 <PricingCardFeature>{card.features}</PricingCardFeature>
								 <PricingCardFeature>{card.features2}</PricingCardFeature>
								 <PricingCardFeature>{card.features3}</PricingCardFeature>
								 <PricingCardCost class="date">{card.features4}</PricingCardCost>
							   </div>
							 </div>
						
						   </div>
								
						
						))}
					</PricingContainer>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
