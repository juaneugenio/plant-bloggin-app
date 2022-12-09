/** @format */

import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SinglePage from "./pages/single/SinglePage";
import WriteBlogPage from "./pages/write/WriteBlogPage";

function App() {
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			{/* <SinglePage /> */}
			<WriteBlogPage />
		</>
	);
}

export default App;
