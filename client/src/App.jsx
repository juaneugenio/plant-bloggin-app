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
	const [user, setUser] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

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

	function handleLogOut() {
		const accessToken = USER_HELPERS.getUserToken();
		if (!accessToken) {
			setUser(null);
			return setIsLoading(false);
		}
		setIsLoading(true);
		logout(accessToken).then((response) => {
			if (!response.status) {
				console.log("LogOut unsuccesful", response);
			}
			USER_HELPERS.removeUserToken();
			setIsLoading(false);
			return setUser(null);
		});
	}
	const userAuthenticated = (user) => {
		setUser(user);
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Navbar user={user} handleLogOut={handleLogOut} />
			<Routes>
				{routes({ user, setUser, userAuthenticated, handleLogOut }).map((route) => (
					<Route key={route.path} path={route.path} element={route.element} />
				))}
			</Routes>
		</>
	);
}

export default App;
