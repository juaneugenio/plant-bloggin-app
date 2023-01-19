/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import "./settingsProfile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Settings = ({ user }) => {
	console.log("%c user ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", { user });
	const userId = user._id;
	console.log("%c userId ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", userId);

	const [singleUser, setSingleUser] = useState({});
	const [error, setError] = useState(null);

	// useEffect(() => {
	// 	const singleUserURL = `http://localhost:3000/api/users/${userId}`;
	// 	const fetchSingleUser = async () => {
	// 		try {
	// 			const response = await axios.get(singleUserURL);
	// 			console.log("%c UserDB▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", response.data.user);
	// 			setSingleUser(response.data.user);
	// 		} catch (error) {
	// 			setError("UserID does not exist or Server");
	// 			console.log(
	// 				"%c error ▶︎ ",
	// 				"font-size:13px; background:#993441; color:#ffb8b1;",
	// 				"UserID does not exist or Server",
	// 				error.message,
	// 			);
	// 		}
	// 	};
	// 	fetchSingleUser();
	// }, []);
	return (
		<div className="settingsPage">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Your Account Page</span>
					{user && <span className="settingsTitleDelete">Delete Account</span>}
				</div>
				<p>
					Here you can edit and update your Profile Info if you need it, otherwise continue enjoying of our community
					plants.
				</p>
				<form className="settingsForm">
					<label>Your current Profile Picture</label>
					<div className="settingsPP">
						<img src={user.profileImage} alt="" />
						<label htmlFor="fileInput">
							<span className="settingsPPIcon material-symbols-outlined">upload</span>
						</label>
						<input id="fileInput" type="file" style={{ display: "none" }} className="settingsPPInput" />
					</div>
					<label>Username</label>
					<input type="text" placeholder={`Your current username is: ${user.username}`} name="name" />
					<label>Email</label>
					<input type="email" placeholder={user.email} name="email" />
					<label>Personal Description</label>
					<textarea
						type="text-field"
						className="userDescription"
						placeholder={
							user.userDescription
								? user.userDescription
								: "Describe yourself and your love for plants to make your account more special."
						}
						name="userDescription"
						rows="5"
					></textarea>
					<label>Password</label>
					<input type="password" placeholder="Type another Password to change the current passsword" name="password" />
					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar user={user} />
		</div>
	);
};
export default Settings;
