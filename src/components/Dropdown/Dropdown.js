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
import "./Divider1.scss";
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
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "40px",
          color: "#00917e",
          textShadow: "2px 4px 3px rgba(0,0,0,0.3)"
        }}
      >
        Izdvajamo iz ponude!
        <FcApproval style={{height: "50px", width: "50px"}} /></h2> 
        <div class="h-divider">
    <div class="shadow"></div>
    <div class="text"><i>Ukoliko vam zatrebaju informacije ili pomoć nas slobodno kontaktirajte</i></div>
        </div>
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
