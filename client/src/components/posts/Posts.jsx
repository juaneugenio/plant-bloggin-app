/** @format */

import "./posts.css";
import PostCard from "../postcard/PostCard";

const Posts = ({ posts }) => {
	return (
		<div className="grid-container">
			{posts.map((post) => (
				<PostCard key={post._id} post={post} />
			))}
		</div>
	);
};
export default Posts;
