/** @format */
import "./singlePost.css";

import { Link } from "react-router-dom";

const SinglePost = ({ user, singlePost, authorPost, handleDeletePost }) => {
	console.log("👉 Line-9-AUTHOR ▶︎▶︎", authorPost);

	return (
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
						{/* <Link to={`/blog/edit/${blogId}`}> */}
						<Link to={`/blog/edit/${singlePost._id}`}>
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
	);
};

export default SinglePost;
