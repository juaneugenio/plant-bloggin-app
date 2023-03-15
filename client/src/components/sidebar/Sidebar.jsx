/** @format */
import "./sidebar.css";
const Sidebar = ({ authorPost }) => {
	// console.log("%c user ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", user);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT THE AUTHOR</span>
				<img
					src={
						authorPost
							? authorPost.profileImage
							: "https://imgs.search.brave.com/HAltpxU-sFVODYlpzIneugquzb8EAWr4WmbK6DVZnw4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvZjgvNDMv/ZDAvZjg0M2QwNWMt/MWIxZi04NGY4LWEz/YmQtY2E5YmFjZjA0/MzYzL3NvdXJjZS81/MTJ4NTEyYmIuanBn"
					}
					alt={`${authorPost.username}'s profile picture.`}
				/>
				<p>{authorPost.username}</p>
				<p>{authorPost.userDescription}</p>
			</div>
		</div>
	);
};

export default Sidebar;

//
