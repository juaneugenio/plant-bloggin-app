/** @format */

export const ACCESS_TOKEN = "access_token";

// const APP_NAME = "yumMeals";
// export const CAPITALIZED_APP = APP_NAME[0].toUpperCase() + APP_NAME.slice(1).toLowerCase();

export function getAccessToken() {
	return localStorage.getItem(ACCESS_TOKEN);
}

export function setAccessToken(newValue) {
	return localStorage.setItem(ACCESS_TOKEN, newValue);
}

export function removeAccessToken() {
	return localStorage.removeItem(ACCESS_TOKEN);
}

export function sendUser() {
	return {
		headers: {
			authorization: getAccessToken(),
		},
	};
}

const BASE_URL = import.meta.env.VITE_API_URI;
export const SERVER_URL = `${BASE_URL}`;
