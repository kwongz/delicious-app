import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import DarkModeProvider from "./context/DarkModeProvider";
import GlobalStylesProvider from "./context/GlobalStylesProvider";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navigation";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<DarkModeProvider>
					<GlobalStylesProvider>
						<Nav />
						<Search />
						<Category />
						<Pages />
					</GlobalStylesProvider>
				</DarkModeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
