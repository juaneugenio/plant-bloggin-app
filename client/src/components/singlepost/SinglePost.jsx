/** @format */
import "./singlePost.css";
import axios from "axios";
import { getSinglePost, deleteSinglePost } from "../../services/postServices";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as PATH from "../../utils/paths";

const SinglePost = ({ user }) => {
	const { blogId } = useParams();
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [singlePost, setSinglePost] = useState("");
	const [authorPost, setAuthorPost] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		getSinglePost(blogId)
			.then((response) => {
				setAuthorPost(response.data.getSinglePost.author);
				setSinglePost(response.data.getSinglePost);
				setIsLoading(false);
				console.log("singlePost", singlePost);
			})
			.catch((error) => {
				console.log("%c ▶︎▶︎ -23-「SinglePost」", "font-size:13px; background:#993441; color:#ffb8b1;", error.message);
				setError(error.message);
			});
	}, []);

	const handleDeletePost = () => {
		setIsLoading(true);
		deleteSinglePost(blogId)
			.then((response) => {
				if (!response.success) {
					return setError(response.data);
				}
				navigate(PATH.TO__HOME_PAGE);
				setIsLoading(true);
			})
			.catch();
	};

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
					{authorPost._id === user?._id ? (
						<div className="editBtns">
							<Link to={`/blog/edit/${blogId}`}>
								<span className="singlePostIcon material-symbols-outlined">edit_note</span>
							</Link>

							<span className="singlePostIcon material-symbols-outlined" onClick={handleDeletePost}>
								delete
							</span>
						</div>
					) : (
						<span></span>
					)}
				</h1>
				<div className="spInfo">
					<span className="spAuthor">
						Author:
						<Link className="link-style">{authorPost.username ? <b> {authorPost.username}</b> : " No Author"}</Link>
					</span>

					<span className="spDate">{new Date(singlePost.time).toDateString()}</span>
				</div>
				<p className="spDescription">{singlePost.description}</p>
			</div>
		</div>
	);
};

export default SinglePost;
