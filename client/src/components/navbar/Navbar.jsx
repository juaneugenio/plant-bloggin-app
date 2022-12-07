/** @format */

import "./navbar.css";
const Navbar = () => {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="material-symbols-outlined">grass</i>
				<span className="logo-Txt">Bl-anty</span>
			</div>
			<div className="topCenter">
				<ul className="center-links">
					<li>HOME</li>
					<li>ABOUT</li>
					<li>CREATE</li>
					<li>LOGOUT</li>
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
		</div>
	);
};

export default Navbar;
