/** @format */
import "./singlePost.css";
const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostContent">
				<img
					className="spImage"
					src="https://i0.wp.com/www.florestore.com/flores-a-domicilio/wp-content/uploads/2018/06/cuidados-de-los-girasoles-florestore.jpg?resize=846%2C602&ssl=1"
					alt=""
				/>

				<h1 className="singlePostTitle">
					Los girasoles son bonitos.{" "}
					<div className="editBtns">
						<span className="singlePostIcon material-symbols-outlined">edit_note</span>
						<span className="singlePostIcon material-symbols-outlined">delete</span>
					</div>
				</h1>
				<div className="spInfo">
					<span className="spAuthor">
						Author: <b>Torres</b>
					</span>
					<span className="spDate">1 hour ago</span>
				</div>
				<p className="spDescription">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt reiciendis sapiente fugiat magni
					alias repellendus assumenda. Aliquid eligendi nam perferendis vel, natus at ipsum qui doloremque quisquam fuga
					unde id. Eum doloribus voluptates enim, corrupti id accusantium nemo pariatur debitis maxime soluta atque
					quod, hic dolores facere ab iusto sapiente ex doloremque, veritatis cupiditate ratione veniam iure
					dignissimos. Debitis et perferendis minima voluptatem vitae, labore quos alias vero aspernatur praesentium!
					Provident culpa nisi ex repudiandae enim delectus inventore nam eos nihil fuga ullam illo optio praesentium at
					reiciendis quibusdam, quisquam porro est odio deleniti! Sint expedita exercitationem laboriosam adipisci
					cumque labore possimus sunt voluptates odio itaque id quasi dolores, officiis cum nisi tempore temporibus hic
					cupiditate obcaecati nostrum repellendus doloribus! Rerum debitis suscipit fugiat, deleniti veritatis dolores
					aliquam dolorem possimus excepturi? Optio totam sapiente eveniet molestiae obcaecati quaerat minima laborum
					repudiandae inventore, fugiat voluptates qui quidem libero impedit repellendus fuga, dolor at quae? Nihil
					praesentium eveniet harum aliquid, delectus quas tenetur fugit nemo possimus vel qui saepe quam enim, sequi
					nostrum quaerat cupiditate eligendi pariatur excepturi veniam exercitationem! Laudantium neque nemo
					doloremque. Quae consectetur in est nam ipsum, quos odit, veritatis ullam cum suscipit tempore id quidem
					deserunt possimus.
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
