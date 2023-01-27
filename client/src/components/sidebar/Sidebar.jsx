/** @format */
import "./sidebar.css";
const Sidebar = ({ user }) => {
	// console.log("%c user ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", user);
	return (
		<div className="sidebar">
			{user ? (
				<>
					<div className="sidebarItem">
						<span className="sidebarTitle">ABOUT ME</span>
						<img
							src={
								user.profileImage
									? user.profileImage
									: "https://imgs.search.brave.com/HAltpxU-sFVODYlpzIneugquzb8EAWr4WmbK6DVZnw4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvZjgvNDMv/ZDAvZjg0M2QwNWMt/MWIxZi04NGY4LWEz/YmQtY2E5YmFjZjA0/MzYzL3NvdXJjZS81/MTJ4NTEyYmIuanBn"
							}
							alt={`${user.username}'s profile picture.`}
						/>
						<p>{user.username}</p>
						<p>{user.userDescription}</p>
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
				</>
			) : (
				<div className="sidebarItem">
					<span className="sidebarTitle">CATEGORIES</span>
					<ul className="sidebarList">
						<li className="sidebarListItem">indoor</li>
						<li className="sidebarListItem">outdoor</li>
						<li className="sidebarListItem">room</li>
						<li className="sidebarListItem">kitchen</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
