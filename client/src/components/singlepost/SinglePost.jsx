/** @format */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
const SinglePost = () => {
	const { blogId } = useParams();
	const [singlePost, setSinglePost] = useState({});

	useEffect(() => {
		const singlePostURL = `http://localhost:3000/api/posts/${blogId}`;
		const fetchSinglePost = async () => {
			try {
				const response = await axios.get(singlePostURL);
				setSinglePost(response.data.getSinglePost);
			} catch (error) {
				console.log("File: SinglePost --> Line: 16", error.message);
			}
		};
		fetchSinglePost();
	}, []);
	return (
		<div className="singlePost">
			<div className="singlePostContent">
				<img
					className="spImage"
					src={
						singlePost.imageUrl
							? singlePost.imageUrl
							: "https://friendlystock.com/wp-content/uploads/2020/12/3-kawaii-indoor-plant-cartoon-clipart.jpg"
					}
					alt={`Photo of ${singlePost.title}`}
				/>

				<h1 className="singlePostTitle">
					{singlePost.title}
					<div className="editBtns">
						<span className="singlePostIcon material-symbols-outlined">edit_note</span>
						<span className="singlePostIcon material-symbols-outlined">delete</span>
					</div>
				</h1>
				<div className="spInfo">
					<span className="spAuthor">
						Author:
						<Link className="link-style">{singlePost.author ? <b> {singlePost.author} </b> : " No Author"}</Link>
					</span>
					<span className="spDate">{new Date(singlePost.time).toDateString()}</span>
				</div>
				<p className="spDescription">{singlePost.description}</p>
			</div>
		</div>
	);
};

export default SinglePost;
