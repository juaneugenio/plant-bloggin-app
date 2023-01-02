/** @format */

import "./navbar.css";
import * as PATH from "../../utils/paths";
import { Link } from "react-router-dom";

const Navbar = () => {
	const user = false;
	return (
		<nav className="navbar">
			<div className="topLeft">
				<i className="material-symbols-outlined">grass</i>

				<Link to={PATH.TO__HOME_PAGE} className="logo-Txt">
					Bl.anty
				</Link>
			</div>
			<div className="topCenter">
				<ul className="center-links">
					<Link to={PATH.TO__HOME_PAGE} className="linksCenter">
						HOME
					</Link>
					{/* TODO */}
					<Link to="#" className="linksCenter">
						ABOUT
					</Link>
					<Link to={PATH.TO__BLOG_CREATE_PAGE} className="linksCenter">
						CREATE
					</Link>
					<Link to="#" className="linksCenter">
						{user && "LOGOUT"}
					</Link>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to={PATH.TO__USER_PROFILE_PAGE}>
						<img
							src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/5146d1dbf9146c4d12a7249e72065a58.png"
							alt="Photo Profile"
							className="profileImg"
						/>
					</Link>
				) : (
					<>
						<Link to={PATH.TO__LOGIN_PAGE} className="linksCenter">
							LOGIN
						</Link>

						<Link to={PATH.TO__REGISTER_PAGE} className="linksCenter">
							REGISTER
						</Link>
					</>
				)}
				<i className=" searchIcon material-symbols-outlined">search</i>
			</div>
		</nav>
	);
};

export default Navbar;
