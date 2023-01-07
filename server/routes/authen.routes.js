/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User.model");
const saltRounds = 10;

//REGISTER
router.post("/register", async (req, res) => {
	const { username, password, email } = req.body;
	if (!username || username.length < 3) {
		return res.status(400).json({ errorMessage: "Provide a username with more than 3 characters." });
	}
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ errorMessage: "Please provide a valid email." });
	}

	if (!password || password.length < 6) {
		return res.status(400).json({
			errorMessage: "Your password needs to be at least 6 characters long.",
		});
	}

	try {
		User.findOne({ email }, async (err, doc) => {
			if (err) throw err;
			if (doc) res.status(400).json({ errorMessage: "User with this Email already exist" });
			if (!doc) {
				const hashedPassword = await bcrypt.hash(password, saltRounds);
				const newUser = new User({
					username,
					email,
					password: hashedPassword,
				});
				await newUser.save();
				res.status(200).json(newUser);
			}
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ errorMessage: "Please provide a valid email." });
	}

	if (!password || password.length < 6) {
		return res.status(400).json({
			errorMessage: "Your password needs to be at least 6 characters long.",
		});
	}
	try {
		const formPassword = req.body.password;
		const user = await User.findOne({ email });
		!user && res.status(400).json({ errorMessage: "1Wrong credentials! Please, check again!" });

		const passValidation = await bcrypt.compare(formPassword, user.password);

		!passValidation && res.status(400).json({ errorMessage: "2Wrong credentials! Please, check again!" });

		const { password, ...others } = user._doc;

		res.status(200).json(others);
	} catch (err) {
		console.log("%c err500 ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", err);
		res.status(500).json({ "Error500:": err.message });
	}
});

module.exports = router;
