/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import "./settingsProfile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Settings = () => {
	const { userId } = useParams();

	const [singleUser, setSingleUser] = useState({});
	const [error, setError] = useState(null);

	useEffect(() => {
		const singleUserURL = `http://localhost:3000/api/users/${userId}`;
		const fetchSingleUser = async () => {
			try {
				const response = await axios.get(singleUserURL);
				console.log("%c UserDB▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", response.data.user);
				setSingleUser(response.data.user);
			} catch (error) {
				setError("UserID does not exist or Server");
				console.log(
					"%c error ▶︎ ",
					"font-size:13px; background:#993441; color:#ffb8b1;",
					"UserID does not exist or Server",
					error.message,
				);
			}
		};
		fetchSingleUser();
	}, []);
	return (
		<div className="settingsPage">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Update Your Account</span>
					<span className="settingsTitleDelete">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
						<label htmlFor="fileInput">
							<span className="settingsPPIcon material-symbols-outlined">upload</span>
						</label>
						<input id="fileInput" type="file" style={{ display: "none" }} className="settingsPPInput" />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Joan Doe" name="name" />
					<label>Email</label>
					<input type="email" placeholder="joandoe@gmail.com" name="email" />
					<label>Password</label>
					<input type="password" placeholder="Password" name="password" />
					<button className="settingsSubmitButton" type="submit">
						Update
					</button>
				</form>
			</div>
			<Sidebar user={singleUser} />
		</div>
	);
};
export default Settings;
