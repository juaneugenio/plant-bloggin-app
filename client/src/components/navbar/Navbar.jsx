/** @format */

import "./navbar.css";
import * as PATH from "../../utils/paths";
import { Link } from "react-router-dom";

const Navbar = ({ user, logginOUT }) => {
	// const user = false;

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
					<i className=" searchIcon material-symbols-outlined">search</i>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<>
						<Link to="#" className="linksCenter" onClick={logginOUT}>
							{user && "LOGOUT"}
						</Link>
						<Link to={PATH.TO__USER_PROFILE_PAGE}>
							<img src={user.profileImage} alt="Photo Profile" className="profileImg" />
						</Link>
					</>
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
			</div>
		</nav>
	);
};

export default Navbar;
