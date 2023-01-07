/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User.model");
const saltRounds = 10;

// router.get("/register", (req, res, next) => {
// 	console.log("▶︎▶︎▶︎ File: authen.routes ▶︎▶︎", { dat: req.body });
// 	res.json({ dat: req.body });
// });
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

	// const found = await User.findOne({ email });
	// if (found) {
	// 	console.log("▶︎▶︎▶︎ File: authen.routes ▶︎▶︎", "Email already taken. ");
	// 	return res.status(400).json({ errorMessage: "Email already taken." });
	// }

	try {
		// const newUser = await User.create(req.body);
		// console.log("▶︎▶︎▶︎ File: authen.routes ▶︎▶︎", "New USER succesful created!!");
		// res.status(200).json({ newUser });
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

module.exports = router;
