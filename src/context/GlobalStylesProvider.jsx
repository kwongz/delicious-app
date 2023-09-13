// DarkModeProvider.js
import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import GlobalStylesContext from "./globalStylesContext";
import DarkModeContext from "./darkModeContext";

const GlobalStylesProvider = ({ children }) => {
	const { isDarkMode } = useContext(DarkModeContext);
	return (
		<GlobalStylesContext.Provider value={isDarkMode}>
			<GlobalStyles isDarkMode={isDarkMode} />
			{children}
		</GlobalStylesContext.Provider>
	);
};

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0% 20%;
	background: ${(props) =>
		props.isDarkMode
			? "linear-gradient(35deg, #000F08, #303030)"
			: "linear-gradient(35deg, #8BAAAD, #FAF9F6)"};
}

code{
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h4{
    font-size: 1rem;
    color: ${(props) => (props.isDarkMode ? "#F4FFF8" : "#000F08")};
}

h3{
    font-size: 1.5rem;
    color: ${(props) => (props.isDarkMode ? "#F4FFF8" : "#000F08")};
    line-height: 2.5rem;
    margin: 2rem 0rem;
}

a{
    color: ${(props) => (props.isDarkMode ? "#F4FFF8" : "#000F08")};
}

li{
    color: ${(props) => (props.isDarkMode ? "#F4FFF8" : "#000F08")};
}

button {
    color: ${(props) => (props.isDarkMode ? "#F4FFF8" : "#000F08")}
}

`;

export default GlobalStylesProvider;
