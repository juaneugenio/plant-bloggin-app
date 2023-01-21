/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const isLoggedOUT = require("../middlewares/isLoggedOUT");
const isLoggedIN = require("../middlewares/isLoggedIN");

const saltRounds = 10;

// router.get("/my-account", (req, res, next) => {
// 	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎", req.body);
// });

router.patch("/my-account", isLoggedIN, (req, res) => {
	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎", req.body);
	const { username, password, email, userDescription, profileImage } = req.body;
	const { _id } = req.user;

	if (email === _id.email) {
		return res.json({ user: req.user });
	}
	if (!req.body) {
		return res.status(400).json({ errorMessage: "You're not making any changes. Nothing to submmit." });
	}
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

	UserModel.findOne({ email }).then((foundedUser) => {
		if (foundedUser) {
			return res.status(400).json({ errorMessage: "Email already exist. Insert another one" });
		}
	});
	return bcrypt
		.genSalt(saltRounds)
		.then((salt) => bcrypt.hashSync(password, salt))
		.then((hashedPassword) => {
			// Create a user and save it in the database
			return UserModel.findByIdAndUpdate(
				_id,
				{
					username,
					email,
					password: hashedPassword,
					userDescription,
					profileImage,
				},
				{ new: true },
			).then((updatedUser) => {
				// console.log("CL 👉---", updatedUser);
				res.json({ user: updatedUser });
			});
		});
});
module.exports = router;
