/** @format */

import "./app.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/navbar/Navbar";

// import WriteBlogPage from "./pages/write/WriteBlogPage";
// import Settings from "./pages/settingsProfile/SettingsProfile";

function App() {
	const [user, setUser] = useState(undefined);

	const userAuthenticated = (userData) => {
		setUser(userData);
	};

	return (
		<>
			<Navbar user={user} />
			<Routes>
				{routes({ userAuthenticated }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
}

export default App;
