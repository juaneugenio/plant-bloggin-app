/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./singlePage.css";
const SinglePage = ({ user }) => {
	return (
		<div className="singlePage">
			<SinglePost user={user} />
			<Sidebar user={user} />
		</div>
	);
};

export default SinglePage;
