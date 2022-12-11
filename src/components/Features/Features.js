import React, {useState} from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';
import {Link} from "react-router-dom";
import "./Divider2.scss"


const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	const [activeChapter, setActiveChapter] = useState(0);

	const handleActiveChapter = () => {
		setActiveChapter(1);
	}

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
				<Link style={{ textDecoration: "none" }} to="/pricing" ><FeatureTitle style={{color: "#00917e"}}>Katalog proizvoda</FeatureTitle></Link>
					<div class="h-divider">
    				<div class="shadow"></div>
  					<div class="text"><i>Istražite vrhunske proizvode na tržištu s atraktivnim cijenama i brzom dostavom</i></div>
       				</div>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
							
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
							onClick={handleActiveChapter}
					
						> 
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
				
					))}
				</FeatureWrapper>
				<Link style={{ textDecoration: "none" }} to="/pricing" ><FeatureTitle style={{color: "#00917e", textAlign: "center", fontSize: "40px", marginTop: "35px"}}>Istraži ponude</FeatureTitle></Link>
			</Container>
		</Section>
	);
};

export default Features;
