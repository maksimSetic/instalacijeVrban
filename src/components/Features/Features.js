import React from 'react';
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


	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle style={{color: "#00917e"}}>Katalog proizvoda</FeatureTitle>
					<div class="h-divider">
    				<div class="shadow"></div>
  					<div class="text"><i>Istražite najbolje ponude na tržištu s atraktivnim cijenama</i></div>
       				</div>
				</FeatureTextWrapper>
		<Link style={{ color: "transparent"}} to="/pricing" >
				<FeatureWrapper>
					{featuresData.map((el, index) => (
							
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
					
						> 
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
				
					))}
				</FeatureWrapper>
				</Link>
			</Container>
		</Section>
	);
};

export default Features;
