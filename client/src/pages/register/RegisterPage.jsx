/** @format */
import axios from "axios";
import * as PATH from "../../utils/paths";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./registerPage.css";
const RegisterPage = () => {
	//////
	const [form, setForm] = useState({
		username: "",
		password: "",
		email: "",
	});
	const { username, password, email } = form;
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		return setForm({ ...form, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const credentials = { ...form };

		try {
			const newUser = await axios.post("http://localhost:3000/api/auth/register", credentials);
			console.log(
				"%c newUser ▶︎ ",
				"font-size:13px; background:#993441; color:#ffb8b1;",
				"New User sended",
				newUser.data,
			);
			navigate(PATH.TO__HOME_PAGE);
		} catch (error) {
			console.log(
				"%c error ▶︎ ",
				"font-size:13px; background:#993441; color:#ffb8b1;",
				"User Unsucceful created=>",
				error.message,
			);
			setError(error.message);
		}
	};

	return (
		<div className="registerContainer">
			<span className="registerTitle">Register</span>
			<form onSubmit={handleFormSubmit} className="registerForm">
				<label>Username</label>
				<input
					type="text"
					className="registerInput"
					placeholder="joedoe"
					name="username"
					value={username}
					onChange={handleInputChange}
					required
				/>
				<label>E-mail</label>
				<input
					type="email"
					className="registerInput"
					placeholder="joe@doe.mail"
					name="email"
					value={email}
					onChange={handleInputChange}
					required
				/>
				<label>Password</label>
				<input
					type="password"
					className="registerInput"
					placeholder="°°°°°°°"
					name="password"
					value={password}
					onChange={handleInputChange}
					required
				/>
				<button type="submit" className="registerBtn">
					Register
				</button>
				<span className="registerInfo">Already an Account? Please, Login.</span>
				<Link to="/auth/login" className="loginBtn">
					Login
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;
