import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/herojsekcija2.mp4" autoPlay loop muted />
			<Container>
				<MainHeading>Sve za kućne instalacije</MainHeading>
				<HeroText>
					Cijenimo Vaše povjerenje!
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
					<Button>Kontaktiraj nas
					</Button>
					</Link>
					<Button>Saznaj više
					</Button>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
