/** @format */

import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/single/SinglePage";
import WriteBlogPage from "./pages/write/WriteBlogPage";
import Settings from "./pages/settings/Settings";

function App() {
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			{/* <SinglePage /> */}
			{/* <WriteBlogPage /> */}
			<Settings />
		</>
	);
}

export default App;
