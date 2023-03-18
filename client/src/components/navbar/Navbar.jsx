/** @format */

import "./navbar.css";
import * as PATH from "../../utils/paths";
import defaulUserImg from "../../assets/default-user.webp";

import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogOut }) => {
	// const user = false;

	return (
		<nav>
			<div className="logo">
				<i className="material-symbols-outlined icon-grass">grass</i>

				<Link to={PATH.TO__HOME_PAGE} className="logo-txt">
					Bl.anty
				</Link>
			</div>
			<div className="links-center">
				<Link to={PATH.TO__HOME_PAGE} className="link">
					<i className="material-symbols-outlined icon-home">home</i>
				</Link>
				<Link to={PATH.TO__BLOG_CREATE_PAGE} className="link">
					CREATE
				</Link>
				{/* <i className=" searchIcon material-symbols-outlined">search</i> */}
			</div>

			<div className="links-right">
				{user ? (
					<>
						<Link to={PATH.TO__USER_PROFILE_PAGE}>
							<img
								src={user.profileImage ? user.profileImage : "defaulUserImg"}
								alt="Photo Profile"
								className="profileImg"
							/>
						</Link>
						<Link to="#" className="link" onClick={handleLogOut}>
							{user && "LOGOUT"}
						</Link>
					</>
				) : (
					<>
						<Link to={PATH.TO__LOGIN_PAGE} className="link">
							LOGIN
						</Link>

						<Link to={PATH.TO__REGISTER_PAGE} className="link">
							REGISTER
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
