/** @format */
import { Link } from "react-router-dom";
import "./loginPage.css";
const LoginPage = () => {
	return (
		<div className="loginContainer">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>E-mail</label>
				<input type="text" className="loginInput" placeholder="Enter your Email..." />
				<label>Password</label>

				<input type="password" className="loginInput" placeholder="Enter your password..." />
				<button className="loginBtn">Login</button>
				<span className="registerInfo">No Account? Please, register.</span>
				<Link to="/register" className="registerBtn">
					<button>Register</button>
				</Link>
			</form>
		</div>
	);
};

export default LoginPage;
