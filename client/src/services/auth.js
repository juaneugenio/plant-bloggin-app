/** @format */

import axios from "axios";

// creates a basic url for every request in this file
// const APIURI = process.env.API_URI;
const authService = axios.create({
	baseURL: `${APIURI}/auth`,
});
console.log("%c authService ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", authService);

export function login(credentials) {
	return authService.post("/login", credentials).then(successStatus).catch(internalServerError);
}
