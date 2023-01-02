/** @format */
import { useState } from "react";

import { Link } from "react-router-dom";
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

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		return setForm({ ...form, [name]: value });
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
	};

	//////

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
					type="text"
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
