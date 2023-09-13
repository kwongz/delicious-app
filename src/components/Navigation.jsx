import React, { useContext } from "react";
import { GiKnifeFork } from "react-icons/gi";
import DarkModeToggle from "../components/DarkModeToggle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkModeContext from "../context/darkModeContext.js";

function Navigation() {
	const { isDarkMode } = useContext(DarkModeContext);

	return (
		<Nav>
			<Logo to={"/"} isDarkMode={isDarkMode}>
				<GiKnifeFork />
				delicious
			</Logo>
			<DarkModeToggle />
		</Nav>
	);
}

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: "Lobster Two", cursive;
	color: ${(props) => (props.isDarkMode ? "#fff" : "rgb(56,56,56)")};
`;

const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;

export default Navigation;
