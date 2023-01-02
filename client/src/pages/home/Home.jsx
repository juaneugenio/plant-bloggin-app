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
			let { data } = await axios.get("http://localhost:3000/api/posts");
			setPosts(data);
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
