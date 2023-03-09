/** @format */

import "./navbar.css";
import * as PATH from "../../utils/paths";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogOut }) => {
	// const user = false;

	return (
		<nav>
			<div className="logo">
				<i className="material-symbols-outlined">grass</i>

				<Link to={PATH.TO__HOME_PAGE} className="logo-txt">
					Bl.anty
				</Link>
			</div>
			<div className="links-center">
				<Link to={PATH.TO__HOME_PAGE} className="link">
					HOME
				</Link>
				<Link to={PATH.TO__BLOG_CREATE_PAGE} className="link">
					CREATE
				</Link>
				{/* <i className=" searchIcon material-symbols-outlined">search</i> */}
			</div>

			<div className="links-right">
				{user ? (
					<>
						<Link to="#" className="link" onClick={handleLogOut}>
							{user && "LOGOUT"}
						</Link>
						<Link to={PATH.TO__USER_PROFILE_PAGE}>
							<img
								src={
									user.profileImage
										? user.profileImage
										: "https://imgs.search.brave.com/HAltpxU-sFVODYlpzIneugquzb8EAWr4WmbK6DVZnw4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvZjgvNDMv/ZDAvZjg0M2QwNWMt/MWIxZi04NGY4LWEz/YmQtY2E5YmFjZjA0/MzYzL3NvdXJjZS81/MTJ4NTEyYmIuanBn"
								}
								alt="Photo Profile"
								className="profileImg"
							/>
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
