/** @format */

import axios from "axios";
import { SERVER_URL } from "../utils/consts";
import { sendUser, getUserToken } from "../utils/userToken";
import { onSuccess, onError } from "../utils/serverResponseHandlers";

const postService = axios.create({ baseURL: `${SERVER_URL}/api/posts` });

export function getAllPosts() {
	return postService.get("/", sendUser()).then(onSuccess("getAllPosts")).catch(onError("getAllPosts"));
}
export function createPost(blogPost) {
	// console.log("%c ▶︎▶︎ -14-「postServices」", "font-size:13px; background:#993441; color:#ffb8b1;", blogPost);
	return postService.post("/", blogPost, sendUser()).then(onSuccess("created-post")).catch(onError("created-post"));
}

export function getSinglePost(blogId) {
	return postService.get(`/${blogId}`, sendUser()).then(onSuccess("single-post")).catch(onError(blogId));
}
export function deleteSinglePost(blogId) {
	// const authorization = getUserToken();
	// console.log("This recipe succesful deleted 👉:", blogId);
	return postService.delete(`/${blogId}`, sendUser()).then(onSuccess("deleted-post")).catch(onError("deleted-post"));
}
export function editSinglePost(blogId, updatedPost) {
	// const authorization = getUserToken();
	console.log("This post was succesful updated 👉:", blogId);
	return postService
		.patch(`/edit/${blogId}`, updatedPost, sendUser())
		.then(onSuccess("edited-post"))
		.catch(onError("edited-post"));
}
