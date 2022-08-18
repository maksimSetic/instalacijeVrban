import React, { useState } from 'react';
import { FaRProject, FaTimes,  FaPhone } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiHouse, GiRabbitHead } from 'react-icons/gi';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavInfoLogo
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
				<GiRabbitHead style={{display: "flex", height: "70px", width: "70px", flexShrink: 0.2, marginLeft: "-20px"}}  /><NavLogo  to="/">
						Instalacije Vrban
					</NavLogo>
				<NavMenu   show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks style={{color: "#00917e"}} onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
					
					<NavInfoLogo>
				<FaPhone />+385916609002
				<GiHouse />	Jakuševečka 15 
					</NavInfoLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes style={{ color: "#00917e" }}  /> : <CgMenuRight />}
					</MobileIcon>
					
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
