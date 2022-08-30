import React, { useState } from 'react';
import { FaTimes,  FaPhone } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { GiHouse} from 'react-icons/gi';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavInfoLogo,
	NavImg
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { logoData } from '../../data/NavbarData';


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
				<NavLogo  to="/">
						Instalacije Vrban
					</NavLogo> <NavImg src={logoData.img} />
				<NavMenu   show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
					
					<NavInfoLogo>
					<FaPhone /><a  href="tel:+385916609002" style={{color: "white"}}>+385916609002</a>
				<GiHouse /><a target="blank" href="https://www.google.hr/maps/place/Jaku%C5%A1eve%C4%8Dka+ul.+15,+10000,+Zagreb/@45.7606311,16.0130851,3a,75y,29.3h,90t/data=!3m6!1e1!3m4!1s6QMoIC8LgAXjZwq8AzgIbQ!2e0!7i13312!8i6656!4m5!3m4!1s0x47667f576247735f:0x5ed16298a3830936!8m2!3d45.7607549!4d16.013184" style={{color: "white"}}>Jakuševečka 15</a>	
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
