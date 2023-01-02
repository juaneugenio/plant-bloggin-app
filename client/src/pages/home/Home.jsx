/** @format */
import "./home.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchingPosts = async () => {
			try {
				let { data } = await axios.get("http://localhost:3000/api/posts");
				setPosts(data);
			} catch (error) {
				console.log(
					"%c error ▶︎ ",
					"font-size:13px; background:#993441; color:#ffb8b1;",
					"No Conexion with DB=>",
					error.message,
				);
			}
		};
		fetchingPosts();
	}, []);
	return (
		<>
			<Header />
			<div className="home">
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
