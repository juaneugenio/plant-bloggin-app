/** @format */
import "./home.css";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
