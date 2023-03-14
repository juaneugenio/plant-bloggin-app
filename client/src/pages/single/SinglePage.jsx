/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./singlePage.css";
const SinglePage = ({ user }) => {
	return (
		<div className="singlePage">
			<div className="post-container">
				<SinglePost user={user} />
			</div>
			<div className="side-element">
				<Sidebar user={user} />
			</div>
		</div>
	);
};

export default SinglePage;
