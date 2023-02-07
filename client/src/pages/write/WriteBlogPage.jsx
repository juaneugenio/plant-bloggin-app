/** @format */
import "./writeBlogPage.css";
import { createPost } from "../../services/postServices";
import * as PATH from "../../utils/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const initialFormData = {
	imageUrl: "",
	title: "",
	description: "",
};

const WriteBlogPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [blogPicture, setBlogPicture] = useState("");
	const { imageUrl, title, description } = formData;

	const handlePictureChange = (event) => {
		// console.log(event.target.files[0]);
		setBlogPicture(event.target.files[0]);
	};

	//Handling text Form inputs
	const handleTextChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(false);

		if (!blogPicture) {
			setError("You must select a picture to upload!");
			setIsLoading(false);
			return;
		}
		//Handling ImageUpload
		const blogPost = new FormData();
		blogPost.append("blogPicture", blogPicture);
		// blogPost.append("formData", formData);
		blogPost.append("title", title);
		blogPost.append("description", description);
		// console.log("BLOGPOST", blogPost);

		createPost(blogPost)
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
	if (isLoading) {
		return <Loading />;
	}
	return (
		<div className="writePage">
			{/* {error && <p>{error}</p>} */}
			<img className="imgUploaded" src={imageUrl} alt={blogPicture.name ? blogPicture.name : "Upload an Image"} />
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
						placeholder="Title"
						onChange={handleTextChange}
						autoFocus={true}
					/>
					<textarea
						name="description"
						value={description}
						type="text"
						className="formDescription"
						placeholder="Describe your Plant..."
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

export default WriteBlogPage;
