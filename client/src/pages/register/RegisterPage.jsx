/** @format */
import axios from "axios";
import { signup } from "../../services/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as PATH from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";

import "./registerPage.css";
const RegisterPage = ({ userAuthenticated }) => {
	//////
	const [form, setForm] = useState({
		username: "",
		password: "",
		email: "",
	});
	const { username, password, email } = form;
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		return setForm({ ...form, [name]: value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		setError(false);
		const credentials = { ...form };

		signup(credentials).then((res) => {
			if (!res.status) {
				// unsuccessful signup
				console.error("Signup was unsuccessful: ", res);
				return setError({
					message: "Register data incorrect! Please send valid information!",
				});
			}
			// successful signup
			USER_HELPERS.setUserToken(res.data.accessToken);
			userAuthenticated(res.data.user);
			navigate(PATH.TO__HOME_PAGE);
		});
	};

	return (
		<div className="registerContainer">
			<span className="registerTitle">Register</span>
			{error && <span className="errorStyle">{error.message}</span>}
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
