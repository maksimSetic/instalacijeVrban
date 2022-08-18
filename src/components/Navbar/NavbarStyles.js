import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	background: linear-gradient(#00917e 75%, rgba(242,242,242,255));
	transition: background-color 0.3s ease-in ease-out;
`;



export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;


	${Container}
`;

export const NavLogo = styled(Link)`
display: flex;
	color: #fff;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	align-items: center;
	z-index: 50;
	font-family: cholla-sans, sans-serif;


`;

export const NavInfoLogo = styled.div`
display: flex;
align-items: center;
z-index: 50;
justify-self: flex-start;
cursor: pointer;
color: #fff;
cursor: pointer;
text-decoration: none;
font-size: 1rem;
flex-direction: column;
transition: opacity 0.5s ease;
margin-top: 5px;
margin-left: 5px;

@media screen and (max-width: 960px) {
	margin-top: 5px;
	margin-right: 45px;
	flex-direction: column;
	transition: opacity 0.5s ease;
}


	
`

export const NavIcon = styled.img`
	margin-right: 1rem;
	width: 3rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;


	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;

	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	display: flex;
	align-items: center;
	justify-content: left;
	list-style: none;
	text-align: center;
	width: 100%;
	background-color: rgba(242,242,242,255);
	box-shadow: 0 0 5px 0 rgba(62,62,62,0.3);
	transition: opacity 0.5s ease;




	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #fff;
	}

`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;
	

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: left;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;
