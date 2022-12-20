/** @format */
import { Link } from "react-router-dom";
import "./postcard.css";
const PostCard = ({ post }) => {
	console.log("%c post ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", post);
	return (
		<div className="postCard">
			{post.imageUrl && <img className="postImg" src={post.imageUrl} alt={`Picture of ${post.title} `} />}
			<Link to={`/blogs/${post._id}`} className={"link-style"}>
				<div className="postInfo">
					<div className="postCategories">
						<span className="postCat">Indoor</span>
						<span className="postCat">Outdoor</span>
					</div>
					<span className="postTitle">{post.title}</span>
					<hr />
					<span className="postDate">{new Date(post.time).toDateString()}</span>
				</div>
				<p className="postDesc">{post.description}</p>
			</Link>
		</div>
	);
};
export default PostCard;
