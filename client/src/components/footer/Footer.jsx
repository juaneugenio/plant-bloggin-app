/** @format */

import React from "react";
import "./footer.css";

function Footer() {
	return (
		<footer className="fixed-bottom">
			<div className="txt-footer-container">
				<p>©Bl.anty App 2023 - {new Date().getFullYear()}</p>
				<p>
					Author: <strong>Juan C. Eugenio.</strong>
				</p>
				<p>
					<strong>MERN</strong> Fullstack Web Developer
				</p>
				<p>
					Picture credits: <a href="https://www.freepik.com/">freepik</a> -
					<a href="https://www.setaswall.com/">setaswall</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
