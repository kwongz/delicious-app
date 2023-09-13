import styled from "styled-components";
import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DarkModeContext from "../context/darkModeContext.js";

function Search() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();
	const { isDarkMode } = useContext(DarkModeContext);

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/searched/" + input);
	};

	return (
		<div>
			<FormStyle onSubmit={submitHandler} isDarkMode={isDarkMode}>
				<FaSearch />
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
				/>
			</FormStyle>
		</div>
	);
}

const FormStyle = styled.form`
	margin: 0rem 20 rem;
	position: relative;
	input {
		border: none;
		background: ${(props) =>
			props.isDarkMode ? "linear-gradient(35deg, #494949, #313131)" : "#fff"};
		font-size: 1.5rem;
		color: ${(props) => (props.isDarkMode ? "white" : "#333")};
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}
	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: ${(props) => (props.isDarkMode ? "white" : "#333")};
	}
`;

export default Search;
