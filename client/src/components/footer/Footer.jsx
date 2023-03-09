/** @format */

import React from "react";
import "./footer.css";

function Footer() {
	return (
		<footer className="fixed-bottom">
			© Bl.anty App | {new Date().getFullYear()}
			<span>
				| Pictures from:
				<a href="https://www.freepik.com/">"www.freepik.com"</a>
			</span>
		</footer>
	);
}

export default Footer;
