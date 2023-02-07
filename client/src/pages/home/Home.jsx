/** @format */
import "./home.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postServices";

const Home = ({ user }) => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchingPosts = async () => {
			try {
				let { data } = await getAllPosts();
				setPosts(data);
			} catch (error) {
				setError(error.message);
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
				{error ? (
					<h3 style={{ width: "65rem", textAlign: "center" }}>An error has ocurred fetching the data.</h3>
				) : (
					<Posts posts={posts} />
				)}
				<Sidebar user={user} />
			</div>
		</>
	);
};

export default Home;
