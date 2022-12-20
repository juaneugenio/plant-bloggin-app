/** @format */
import { Link } from "react-router-dom";
import "./registerPage.css";
const RegisterPage = () => {
	return (
		<div className="registerContainer">
			<span className="registerTitle">Register</span>
			<form className="registerForm">
				<label>Username</label>
				<input type="text" className="registerInput" placeholder="Enter your Username..." />
				<label>E-mail</label>
				<input type="text" className="registerInput" placeholder="Enter your Email..." />
				<label>Password</label>
				<input type="password" className="registerInput" placeholder="A Password for this account..." />
				<button className="registerBtn">Register</button>
				<span className="registerInfo">Already an Account? Please, Login.</span>
				<Link to="/login" className="loginBtn">
					Login
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;
