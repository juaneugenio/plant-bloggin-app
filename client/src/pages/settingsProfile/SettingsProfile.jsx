/** @format */
import Sidebar from "../../components/sidebar/Sidebar";
import Loading from "../../components/loading/Loading";
import "./settingsProfile.css";
import * as PATH from "../../utils/paths";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatingUser, deleteUser, updateProfileImage } from "../../services/userService";

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
	const [userPicture, setUserPicture] = useState("");
	const [imageInputKey, setImageInputKey] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(false);
		// if (!userPicture) {
		// 	console.log("NO picture");
		// 	setIsLoading(false);
		// 	setError("Do not forget to choose a picture!");
		// 	return;
		// }
		// const formToUpdate = new FormData();
		// formToUpdate.append("profileImage", userPicture);
		// formToUpdate.append("user", formToUpdate);
		// console.log("2222formToUpdate", formToUpdate);
		updatingUser(newUser)
			.then((response) => {
				if (!response.success) {
					setError(response.data);
					setIsLoading(false);
					return;
				}

				setUser(response.data.user);
				setIsLoading(false);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	///Image Input upload
	const handleImageInput = (event) => {
		// console.log(event.target.files[0]);
		setUserPicture(event.target.files[0]);
	};
	const handleProfilePicture = (event) => {
		event.preventDefault();
		setIsLoading(true);
		setError(false);
		if (!userPicture) {
			setError("Don't forget to choose your profile image!");
			setIsLoading(false);
			return;
		}
		const formBody = new FormData();
		formBody.append("profileImage", userPicture); //profileImage  comes from index router.post
		formBody.append("userId", userId);
		updateProfileImage(formBody)
			.then((response) => {
				console.log("%c ▶︎▶︎ -73-「SettingsProfile」", "font-size:13px; background:#993441; color:#ffb8b1;", response);
				if (!response.success) {
					setError("Something is wrong");
				}
				setUser({ ...user, profileImage: response.data.profileImage });
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser({ ...newUser, [name]: value });
	};

	//Deleting User
	const handleDeleteUser = (e) => {
		e.preventDefault();
		setIsLoading(true);
		deleteUser(user._id)
			.then((response) => {
				if (!response.success) {
					return setError(response.data);
				}
			})
			.finally(() => {
				if (error) {
					return setIsLoading(false);
				}
				console.log("User was succesfull deleted");
				navigate(PATH.TO__HOME_PAGE);
				return setUser(null);
			});
	};
	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="settingsPage">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsTitleUpdate">Your Account Page</span>
					{user && (
						<span className="settingsTitleDelete" onClick={handleDeleteUser}>
							Delete Account
						</span>
					)}
				</div>
				<p>
					Here you can edit and update your Profile Info if you need it, otherwise continue enjoying of our community
					plants.
				</p>
				<form className="settingsForm" onSubmit={handleSubmit}>
					<label>Your current Profile Picture</label>
					<div className="settingsPP">
						<img src={user.profileImage && user.profileImage} alt="User photo profile" />
						<label htmlFor="fileInput">
							<span className="settingsPPIcon material-symbols-outlined">upload</span>
						</label>
						<input
							key={imageInputKey}
							id="fileInput"
							type="file"
							style={{ display: "none" }}
							className="settingsPPInput"
							// value={user.title}
							onChange={handleImageInput}
						/>
						<button onClick={handleProfilePicture}>Update image</button>
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
