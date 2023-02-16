/** @format */

import axios from "axios";

import { getSinglePost, editSinglePost } from "../../services/postServices";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as PATH from "../../utils/paths";

const EditSinglePost = () => {
	const { blogId } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [singlePost, setSinglePost] = useState({});
	const { title, imageUrl, description } = singlePost;
	const [blogPicture, setBlogPicture] = useState("");

	const navigate = useNavigate();
	// const [formData, setFormData] = useState({ singlePost });

	useEffect(() => {
		setIsLoading(true);
		getSinglePost(blogId)
			.then((response) => {
				setSinglePost(response.data.getSinglePost);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log("%c ▶︎▶︎ -23-「SinglePost」", "font-size:13px; background:#993441; color:#ffb8b1;", error.message);
				setError(error.message);
			});
	}, []);

	//Picture Input change
	const handlePictureChange = (event) => {
		// console.log(event.target.files[0]);
		setBlogPicture(event.target.files[0]);
	};

	const handleTextChange = (e) => {
		const { name, value } = e.target;
		setSinglePost({ ...singlePost, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(false);

		// if (!title || !description) {
		// 	setError("You must publish something!");
		// 	setIsLoading(false);
		// 	return;
		// }
		//Handling ImageUpload
		const updatedPost = new FormData();
		updatedPost.append("blogPicture", blogPicture);
		updatedPost.append("title", title);
		updatedPost.append("imageUrl", imageUrl);
		updatedPost.append("description", description);
		// console.log("BLOGPOST", blogPost);

		editSinglePost(blogId, updatedPost)
			.then((response) => {
				if (!response.succes) {
					return setError(response.data);
				}
				console.log("%c ▶︎▶︎ -51-「WriteBlogPage」", "font-size:13px; background:#993441; color:#ffb8b1;", response);
				setIsLoading(false);
			})
			.finally(() => {
				navigate(PATH.TO__HOME_PAGE);
			});
	};

	return (
		<div className="writePage">
			{error && <p>{error}</p>}
			<img className="imgUploaded" src={imageUrl} alt={`${title}'s picture`} />
			<form className="createForm" onSubmit={handleSubmit}>
				<div className="formGroup1">
					<label htmlFor="fileInput">
						<span className="uploadIcon material-symbols-outlined">upload</span>
						<input type="file" id="fileInput" style={{ display: "none" }} onChange={handlePictureChange} />
					</label>
				</div>
				<div className="formGroup">
					<input
						name="title"
						value={title}
						type="text"
						className="formTitle"
						// placeholder={title}
						onChange={handleTextChange}
						autoFocus={true}
					/>
					<textarea
						name="description"
						value={description}
						type="text"
						className="formDescription"
						// placeholder={description}
						rows="20"
						cols="20"
						onChange={handleTextChange}
					></textarea>
				</div>
				<button type="submit" className="btnSubmit">
					Publish
				</button>
			</form>
		</div>
	);
};

export default EditSinglePost;
