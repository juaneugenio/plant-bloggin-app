/** @format */
import "./sidebar.css";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://i.pinimg.com/736x/bb/dc/b9/bbdcb9d2577299a990103330cb6c0e7b--curly-afro-kinky-curly.jpg"
					alt="about me user picture"
				/>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, sapiente sint. </p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">indoor</li>
					<li className="sidebarListItem">outdoor</li>
					<li className="sidebarListItem">room</li>
					<li className="sidebarListItem">kitchen</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
