import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';


function Footer() {

return <Section padding="4rem 0 2rem 0">
  <FooterWrapper>
	  <FooterGrid justify="space-between">
		  <FooterColumn id="footerLogo">
			  <FooterLogo to="/">
				  Instalacije Vrban
			  </FooterLogo>
			  <FooterAddress>
				  Jakuševečka 15
			  </FooterAddress>
			  <FooterAddress>
				 10020 Zagreb
			  </FooterAddress>
			  <FooterAddress>
				 Hrvatska
			  </FooterAddress>
			  <FooterAddress>
				  Tel: +385916609002
			  </FooterAddress>
			  <FooterAddress>
				  Email: dari2@hotmail.com
			  </FooterAddress>

			  <Row align="center" margin="auto  0 0 0" gap="1rem">
				  {footerSocialData.map((social, index) => (
					  <FooterSocialIcon
						  key={index}
						  href="/"
						  target="_blank"
						  aria-label={social.name}
					  >
						  {social.icon}
					  </FooterSocialIcon>
				  ))}
			  </Row>
		  </FooterColumn>
		  {footerData.map((footerItem, index) => (
			  <FooterLinkItems key={index}>
				  <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
				  {footerItem.links.map((link, linkIndex) => (
					  <FooterLink key={linkIndex} to="/">
						  {link}
					  </FooterLink>
				  ))}
			  </FooterLinkItems>
		  ))}
	  </FooterGrid>
	  <FooterRights>Vrban Instalacije © 2022</FooterRights>
  </FooterWrapper>
</Section>

}

  


export default Footer;
