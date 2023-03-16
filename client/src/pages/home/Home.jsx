/** @format */
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postServices";

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchingPosts = async () => {
			try {
				setIsLoading(true);
				let { data } = await getAllPosts();
				setPosts(data);
				setIsLoading(false);
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

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<main>
				<Header />
				<div className="home">
					{error ? (
						<h3 style={{ width: "65rem", textAlign: "center" }}>An error has ocurred fetching the data.</h3>
					) : (
						<Posts posts={posts} />
					)}
				</div>
			</main>
		</>
	);
};

export default Home;
