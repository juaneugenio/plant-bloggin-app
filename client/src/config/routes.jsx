/** @format */
import * as PATH from "../utils/paths";
import Home from "../pages/home/Home";
import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import SinglePage from "../pages/single/SinglePage";
import WriteBlogPage from "../pages/write/WriteBlogPage";
import Settings from "../pages/settingsProfile/SettingsProfile";

const routes = (props) => {
	const { user } = props;
	return [
		{
			path: PATH.TO__HOME_PAGE,
			element: <Home />,
		},
		{
			path: PATH.TO__LOGIN_PAGE,
			element: <LoginPage {...props} />,
		},
		{
			path: PATH.TO__REGISTER_PAGE,
			element: <RegisterPage {...props} />,
		},
		{
			path: PATH.TO__BLOG_CREATE_PAGE,
			element: user ? <WriteBlogPage /> : <RegisterPage />,
		},

		{
			path: PATH.TO__BLOG_SINGLE_PAGE,
			element: <SinglePage />,
		},
		{
			path: PATH.TO__USER_PROFILE_PAGE,
			element: user ? <Settings /> : <RegisterPage />,
		},
		{
			path: "*",
			element: <h1>404 This Page NOT EXIST!</h1>,
		},
	];
};
export default routes;
