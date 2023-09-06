// DarkModeProvider.js
import React, { useState } from "react";
import DarkModeContext from "./context";

const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeProvider;
