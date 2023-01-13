/** @format */

import "./app.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import { getLoggedIn, logout } from "./services/auth";
import { removeAccessToken } from "./utils/consts";
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/loading/Loading";

// import WriteBlogPage from "./pages/write/WriteBlogPage";
// import Settings from "./pages/settingsProfile/SettingsProfile";

function App() {
	const [user, setUser] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);

	const userAuthenticated = (userData) => {
		setUser(userData);
	};
	function logginOUT() {
		logout().finally(() => {
			removeAccessToken();
			setUser(undefined);
		});
	}
	useEffect(() => {
		const accessToken = USER_HELPERS.getUserToken();

		if (!accessToken) {
			return setIsLoading(false);
		}
		getLoggedIn(accessToken).then((response) => {
			console.log("%c response ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", response);

			if (!response.status) {
				return setIsLoading(false);
			}
			userAuthenticated(response.data.user);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Navbar user={user} logginOUT={logginOUT} />
			<Routes>
				{routes({ user, userAuthenticated }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
}

export default App;
