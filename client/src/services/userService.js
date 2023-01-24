/** @format */

import axios from "axios";
import { SERVER_URL, sendUser } from "../utils/consts";
import { onSuccess, onError } from "../utils/serverResponseHandlers";

const BASE_API_URL = `${import.meta.env.VITE_API_URI}/api/users`;
console.log("%c BASE_API_URL ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", BASE_API_URL);

const userService = axios.create({ baseURL: BASE_API_URL });

export function updatingUser(userFormData) {
	return userService
		.patch("/my-account", userFormData, sendUser())
		.then(onSuccess("Updated account"))
		.catch(onError("Updated account"));
}
