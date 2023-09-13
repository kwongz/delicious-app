import React, { useContext } from "react";
import DarkModeContext from "../context/darkModeContext.js";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function DarkModeToggle() {
	const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<div onClick={toggleDarkMode}>
			{isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
		</div>
	);
}

export default DarkModeToggle;

// create a button that toggles between light and dark mode, animate toggle to slide back and fourth
