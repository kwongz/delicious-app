import React, { useContext } from "react";
import DarkModeContext from "../context/context.js";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function DarkMode() {
	const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<div onClick={toggleDarkMode}>
			{isDarkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
		</div>
	);
}

export default DarkMode;

// create a button that toggles between light and dark mode, animate toggle to slide back and fourth
