/** @format */
import { Link } from "react-router-dom";
import "./postcard.css";
const PostCard = ({ post }) => {
	return (
		<div className="postCard">
			<img
				className="postImg"
				src={
					post.imageUrl
						? post.imageUrl
						: "https://friendlystock.com/wp-content/uploads/2020/12/3-kawaii-indoor-plant-cartoon-clipart.jpg"
				}
				alt={`Picture of ${post.title} `}
			/>
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCat">Indoor</span>
					<span className="postCat">Outdoor</span>
				</div>
				<Link to={`/blogs/${post._id}`} className="link-style">
					<p className="postTitle">{post.title}</p>
				</Link>
				<hr />
				<span className="postDate">{new Date(post.time).toDateString()}</span>
			</div>
			<Link to={`/blogs/${post._id}`} className="link-style">
				<p className="postDesc">{post.description}</p>
			</Link>
		</div>
	);
};
export default PostCard;
