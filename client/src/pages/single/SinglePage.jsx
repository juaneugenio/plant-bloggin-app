/** @format */
import "./singlePage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
// ---
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as PATH from "../../utils/paths";
import { getSinglePost, deleteSinglePost } from "../../services/postServices";

const SinglePage = ({ user }) => {
	// ---
	const { blogId } = useParams();

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [singlePost, setSinglePost] = useState({});
	const [authorPost, setAuthorPost] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		getSinglePost(blogId)
			.then((response) => {
				setAuthorPost(response.data.getSinglePost.author);
				setSinglePost(response.data.getSinglePost);
				setIsLoading(false);
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
			.catch((error) => {
				console.log("👉 Line-42 ▶︎▶︎", error.message);
				setError(error.message);
			});
	};
	return (
		<div className="singlePage">
			<div className="post-container">
				<SinglePost user={user} singlePost={singlePost} authorPost={authorPost} handleDeletePost={handleDeletePost} />
			</div>
			<div className="side-element">
				<Sidebar user={user} authorPost={authorPost} />
			</div>
		</div>
	);
};

export default SinglePage;
