/** @format */

import "./navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="topLeft">
				<i className="material-symbols-outlined">grass</i>
				<span className="logo-Txt">Bl.anty</span>
			</div>
			<div className="topCenter">
				<ul className="center-links">
					<li className="linksCenter">HOME</li>
					<li className="linksCenter">ABOUT</li>
					<li className="linksCenter">CREATE</li>
					<li className="linksCenter">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/5146d1dbf9146c4d12a7249e72065a58.png"
					alt="Photo Profile"
					className="profileImg"
				/>
				<i className=" searchIcon material-symbols-outlined">search</i>
			</div>
		</nav>
	);
};

export default Navbar;
