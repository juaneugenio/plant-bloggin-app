/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import "./settingsProfile.css";
import * as PATH from "../../utils/paths";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { updatingUser } from "../../services/userService";

const userInForm = {
	username: "",
	email: "",
	password: "",
	userDescription: "",
	profileImage: "",
};

const Settings = ({ user, setUser }) => {
	const userId = user._id;
	const [newUser, setNewUser] = useState(userInForm);

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(false);

		updatingUser(newUser)
			.then((response) => {
				if (!response.success) {
					return setError(response.data);
				}

				setUser(response.data.user);
			})
			.finally(() => {
				setIsLoading(false);
				navigate(PATH.TO__HOME_PAGE);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser({ ...newUser, [name]: value });
	};
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
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Your current Profile Picture</label>
					<div className="settingsPP">
						<img
							src={
								user.profileImage
									? user.profileImage
									: "https://imgs.search.brave.com/HAltpxU-sFVODYlpzIneugquzb8EAWr4WmbK6DVZnw4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvZjgvNDMv/ZDAvZjg0M2QwNWMt/MWIxZi04NGY4LWEz/YmQtY2E5YmFjZjA0/MzYzL3NvdXJjZS81/MTJ4NTEyYmIuanBn"
							}
							alt="User photo profile"
						/>
						<label htmlFor="fileInput">
							<span className="settingsPPIcon material-symbols-outlined">upload</span>
						</label>
						<input
							id="fileInput"
							type="file"
							style={{ display: "none" }}
							className="settingsPPInput"
							// value={user.title}
							// onChange={handleChange}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={user.username}
						name="username"
						value={newUser.username}
						onChange={handleChange}
					/>
					<label>Email</label>
					<input type="email" placeholder={user.email} name="email" value={newUser.email} onChange={handleChange} />
					<label>Personal Description</label>
					<textarea
						type="text-field"
						className="userDescription"
						placeholder={
							user.userDescription
								? user.userDescription
								: "Describe yourself and your love for plants to make your account more special."
						}
						rows="5"
						name="userDescription"
						value={newUser.userDescription}
						onChange={handleChange}
					></textarea>
					<label>Password</label>
					<input
						type="password"
						placeholder="Type another Password to change the current passsword"
						name="password"
						value={newUser.password}
						onChange={handleChange}
					/>
					<button className="settingsSubmitButton" type="submit">
						Submit changes
					</button>
				</form>
				{error && <p>{error}</p>}
			</div>
			<Sidebar user={user} />
		</div>
	);
};
export default Settings;
