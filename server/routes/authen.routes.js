/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User.model");
const Session = require("../models/Session.model");
const saltRounds = 10;

//SESSION
router.get("/session", async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.json(null);
	}
	const accesToken = req.headers.authorization;
	const session = await Session.findById(accesToken).populate("user");
	!session && res.status(400).json({ errorMessage: "⚠️ Session does not exist" });
	console.log("%c session ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", session);

	res.status(200).json(session);
});
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
		return res.status(400).json({ errorMessage: "⚠️ Please provide a valid email." });
	}

	if (!password || password.length < 6) {
		return res.status(400).json({
			errorMessage: "⚠️ Your password needs to be at least 6 characters long.",
		});
	}
	try {
		const formPassword = req.body.password;
		const user = await User.findOne({ email });
		!user && res.status(400).json({ errorMessage: "⚠️ You don't have an Account yet. Please Register" });

		const passValidation = await bcrypt.compare(formPassword, user.password);
		!passValidation && res.status(400).json({ errorMessage: "⚠️ Wrong credentials! Please, check again!" });

		const userInSession = await Session.create({ user: user._id, createdAt: Date.now() });
		console.log("%c userInSession ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", userInSession);

		res.status(200).json({ user, accessToken: userInSession._id });
	} catch (err) {
		console.log("%c err500 ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", err.message);
		res.status(500).json({ "Error500:": err.message });
	}
});

module.exports = router;
