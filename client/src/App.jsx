/** @format */

import "./app.css";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/navbar/Navbar";

import WriteBlogPage from "./pages/write/WriteBlogPage";
import Settings from "./pages/settingsProfile/SettingsProfile";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				{routes().map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
			{/* <Home /> */}
			{/* <SinglePage /> */}
			{/* <WriteBlogPage /> */}
			{/* <Settings /> */}
			{/* <LoginPage /> */}
			{/* <RegisterPage /> */}
		</>
	);
}

export default App;
