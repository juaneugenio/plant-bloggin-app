/** @format */

import { useState } from "react";
import axios from "axios";
const initialFormData = {
	imageUrl: "",
	title: "",
	description: "",
};
const Form = () => {
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5000/api/posts", formData);
			setFormData(initialFormData);
			console.log("👍🏼 Post successful created");
			// window.location = "http://localhost:5173/api/posts";
		} catch (error) {
			console.log({ message: error.message });
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Upload a Plant image</label>
					<img src="" alt="" />
					<input id="name" type="file" name="imageUrl" />
				</div>
				<div>
					<label htmlFor="name">Plant Name</label>
					<input
						id="title"
						type="text"
						placeholder="Name of your Plant"
						name="title"
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Plant Description</label>
					<input
						id="description"
						type="text"
						placeholder="Describe your Plant"
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				{/* <div>
					<label htmlFor="message">Message</label>
					<textarea id="message" />
				</div> */}
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Form;
