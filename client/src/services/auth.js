/** @format */

import axios from "axios";
import * as USER_HELPERS from "../utils/userToken";

// here we are just making our code look more DRY. With every backend call we must deal with errors and success states. The idea of creating these kinds of services is to make our lives easier in the components
function internalServerError(err) {
	console.log("%c err ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", err);
	if (err.response && err.response.data && err.response.data.errorMessage) {
		return {
			status: false,
			errorMessage: err.response.data.errorMessage,
		};
	}
	return {
		status: false,
		errorMessage: "Internal server error. Please check your server",
	};
}

function successStatus(res) {
	return {
		status: true,
		data: res.data,
	};
}

//creates a basic url for every request in this file
const authService = axios.create({
	baseURL: `${import.meta.env.VITE_API_URI}/api/auth`,
});
// const BASE_API_URL = `${import.meta.env.VITE_API_URI}/auth`;

export function login(credentials) {
	return authService.post("/login", credentials).then(successStatus).catch(internalServerError);
}

export function getLoggedIn() {
	return authService
		.get(`session`, {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then(successStatus)
		.catch(internalServerError);
}

export function signup(credentials) {
	return authService.post("/register", credentials).then(successStatus).catch(internalServerError);
}
// export function signup(credentials) {
// 	return axios
// 		.post("http://localhost:3000/api/auth/register", credentials)
// 		.then(successStatus)
// 		.catch(internalServerError);
// }
export function logout() {
	return authService
		.delete("/logout", {
			headers: {
				Authorization: USER_HELPERS.getUserToken(),
			},
		})
		.then(successStatus)
		.catch(internalServerError);
}
