/** @format */
import axios from "axios";
import * as PATH from "../../utils/paths";
import { login } from "../../services/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./loginPage.css";

const LoginPage = ({ userAuthenticated }) => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const { email, password } = form;
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		return setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);
		const credentials = { ...form };

		try {
			// const response = await axios.post("http://localhost:3000/api/auth/login", credentials);
			const response = await login(credentials);
			console.log("%c response ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", response);

			if (!response.status) {
				setError("Not response from Server in Login Form");
			}
			userAuthenticated(response.data.user);
			navigate(PATH.TO__HOME_PAGE);
		} catch (error) {
			console.log(
				"%c error ▶︎ ",
				"font-size:13px; background:#993441; color:#ffb8b1;",
				"Wrong Credentials because =>",
				error,
			);
			setError(error.response.data);
		}
	};

	return (
		<div className="loginContainer">
			<span className="loginTitle">Login</span>
			{error && <span className="errorStyle">{error.errorMessage}</span>}
			<form className="loginForm" onSubmit={handleSubmit}>
				<label>E-mail</label>
				<input
					type="email"
					className="loginInput"
					name="email"
					value={email}
					onChange={handleInputChange}
					placeholder="joe@doe.mail"
					required
				/>
				<label>Password</label>
				<input
					type="password"
					className="loginInput"
					name="password"
					value={password}
					onChange={handleInputChange}
					placeholder="°°°°°°°"
					required
				/>
				<button className="loginBtn">Login</button>
				<span className="registerInfo">No Account? Please, register.</span>
				<Link to="/auth/register" className="registerBtn ">
					Register
				</Link>
			</form>
		</div>
	);
};

export default LoginPage;
