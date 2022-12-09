/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./singlePage.css";
const SinglePage = () => {
	return (
		<div className="singlePage">
			<SinglePost />
			<Sidebar />
		</div>
	);
};

export default SinglePage;
