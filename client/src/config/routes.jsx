/** @format */

import Home from "../pages/home/Home";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import SinglePage from "../pages/single/SinglePage";
import WriteBlogPage from "../pages/write/WriteBlogPage";
import Settings from "../pages/settingsProfile/SettingsProfile";

const routes = (props) => {
	// const { user } = props;
	const user = false;
	return [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/login",
			element: user ? <Home /> : <LoginPage />,
		},
		{
			path: "/register",
			element: user ? <Home /> : <RegisterPage />,
		},
		{
			path: "/new-blog",
			element: user ? <WriteBlogPage /> : <RegisterPage />,
		},

		{
			path: "/blogs/:blogId",
			element: <SinglePage />,
		},
		{
			path: "/user/settings",
			element: user ? <Settings /> : <RegisterPage />,
		},
		{
			path: "*",
			element: <h1>No page here</h1>,
		},
	];
};
export default routes;
