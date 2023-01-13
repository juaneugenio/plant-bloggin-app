/** @format */

import "./app.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import { getLoggedIn } from "./services/auth";
import Navbar from "./components/navbar/Navbar";

// import WriteBlogPage from "./pages/write/WriteBlogPage";
// import Settings from "./pages/settingsProfile/SettingsProfile";

function App() {
	const [user, setUser] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);

	const userAuthenticated = (userData) => {
		setUser(userData);
	};

	useEffect(() => {
		const accessToken = USER_HELPERS.getUserToken();
		if (!accessToken) {
			return setIsLoading(false);
		}
		getLoggedIn(accessToken).then((response) => {
			if (!response.status) {
				return setIsLoading(false);
			}
			setUser(response.data.user);
			setIsLoading(false);
		});
	}, []);

	return (
		<>
			<Navbar user={user} />
			<Routes>
				{routes({ user, userAuthenticated }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
}

export default App;
