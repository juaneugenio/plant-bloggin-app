/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import "./settingsProfile.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { updatingUser } from "../../services/userService";

const userData = {
	username: "",
	email: "",
	userDescription: "",
	password: "",
};

const Settings = ({ user }) => {
	const userId = user._id;

	const [userFormData, setUserFormData] = useState(user);

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(false);

		updatingUser(userFormData)
			.then((response) => {
				if (!response.success) {
					return setError(response.data);
				}

				console.log("%c  USER ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", response.data);
				setUserFormData(response.data.user);
			})
			.finally(() => {
				setIsLoading(false);
				setUserFormData(userData);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserFormData({ ...userFormData, [name]: value });
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
						<img src={user.profileImage} alt="" />
						<label htmlFor="fileInput">
							<span className="settingsPPIcon material-symbols-outlined">upload</span>
						</label>
						<input
							id="fileInput"
							type="file"
							style={{ display: "none" }}
							className="settingsPPInput"
							// value={userFormData.title}
							// onChange={handleChange}
						/>
					</div>
					<label>Username</label>
					<input
						type="text"
						placeholder={`Your current username is: ${user.username}`}
						name="username"
						value={userFormData.username}
						onChange={handleChange}
					/>
					<label>Email</label>
					<input
						type="email"
						placeholder={user.email}
						name="email"
						value={userFormData.email}
						onChange={handleChange}
					/>
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
						value={userFormData.userDescription}
						onChange={handleChange}
					></textarea>
					<label>Password</label>
					<input
						type="password"
						placeholder="Type another Password to change the current passsword"
						name="password"
						value={userFormData.password}
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
