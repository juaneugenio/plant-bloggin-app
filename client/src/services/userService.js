/** @format */

import axios from "axios";
import { SERVER_URL, sendUser, getAccessToken, removeAccessToken } from "../utils/consts";
import { onSuccess, onError } from "../utils/serverResponseHandlers";

const BASE_API_URL = `${import.meta.env.VITE_API_URI}/api/users`;

const userService = axios.create({ baseURL: BASE_API_URL });

export function updatingUser(userFormData) {
	return userService
		.patch("/my-account", userFormData, sendUser())
		.then(onSuccess("Updated account"))
		.catch(onError("Updated account"));
}
export function updateProfileImage(imageFile) {
	return userService
		.patch("/updateProfileImage", imageFile, sendUser())
		.then(onSuccess("Updated Image Profile"))
		.catch(onError("Updated Image Profile"));
}

export function deleteUser(userID) {
	return userService
		.delete(`/${userID}`, {
			headers: {
				authorization: getAccessToken(),
			},
		})
		.then(() => {
			removeAccessToken();
			return onSuccess("deleted-user");
		})
		.catch(onError("deleted-user"));
}
