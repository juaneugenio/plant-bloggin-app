/** @format */

import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
	const user = false;
	return (
		<nav className="navbar">
			<div className="topLeft">
				<i className="material-symbols-outlined">grass</i>

				<Link to="/" className="logo-Txt">
					Bl.anty
				</Link>
			</div>
			<div className="topCenter">
				<ul className="center-links">
					<Link to="/" className="linksCenter">
						HOME
					</Link>
					<Link to="#" className="linksCenter">
						ABOUT
					</Link>
					<Link to="/new-blog" className="linksCenter">
						CREATE
					</Link>
					<Link to="#" className="linksCenter">
						{user && "LOGOUT"}
					</Link>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/5146d1dbf9146c4d12a7249e72065a58.png"
						alt="Photo Profile"
						className="profileImg"
					/>
				) : (
					<>
						<Link to="/login" className="linksCenter">
							LOGIN
						</Link>

						<Link to="/register" className="linksCenter">
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
