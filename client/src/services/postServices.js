/** @format */

import axios from "axios";
import { SERVER_URL } from "../utils/consts";
import { sendUser, getUserToken } from "../utils/userToken";
import { onSuccess, onError } from "../utils/serverResponseHandlers";

const postService = axios.create({ baseURL: `${SERVER_URL}/api/posts` });

export function getAllPosts() {
	return postService.get("/", { sendUser }).then(onSuccess("getAllPosts")).catch(onError("getAllPosts"));
}
