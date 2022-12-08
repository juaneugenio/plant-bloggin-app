/** @format */
import "./postcard.css";
const PostCard = () => {
	return (
		<div className="postCard">
			<img
				className="postImg"
				src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-plant-money-plant-scindapsus-green-plant-in-4.5-inch-11-cm-ronda-no-1110-round-plastic-turquoise-plant_600x600.jpg?v=1637075960"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCat">Indoor</span>
					<span className="postCat">Outdoor</span>
				</div>
				<span className="postTitle">Girasol americano</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime explicabo accusantium tenetur deserunt
				voluptatem doloribus odit eum molestias. Blanditiis perspiciatis quisquam nemo atque ipsam laborum enim
				consectetur voluptatum mollitia? voluptatem doloribus odit eum molestias. Blanditiis perspiciatis quisquam nemo
				atque ipsam laborum enim consectetur voluptatum mollitia?
			</p>
		</div>
	);
};
export default PostCard;
