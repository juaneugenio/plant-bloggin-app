/** @format */

import axios from "axios";
import { SERVER_URL, sendUser } from "../utils/consts";
import { onSuccess, onError } from "../utils/serverResponseHandlers";

const BASE_API_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const userService = axios.create({ baseURL: BASE_API_URL });

export function updatingUser(userObj) {
	return userService
		.patch("/my-account", { userObj }, sendUser())
		.then(onSuccess("Updated account"))
		.catch(onError("Updated account"));
}
