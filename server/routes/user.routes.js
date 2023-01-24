/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const isLoggedOUT = require("../middlewares/isLoggedOUT");
const isLoggedIN = require("../middlewares/isLoggedIN");

// router.get("/my-account", (req, res, next) => {
// 	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎", req.body);
// });

router.patch("/my-account", isLoggedIN, (req, res) => {
	const { username, password, email, userDescription, profileImage } = req.body;
	const { _id } = req.user;

	// if (email === _id.email) {
	// 	return res.json({ user: req.user });
	// }

	// if (foundedUser._id === _id) {
	// 	console.log("%c  USER ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", req.user);
	// 	return res.json({ user: req.user });
	// }
	if (username === "" || username.length < 3) {
		return res.status(400).json({ errorMessage: "Provide a username with more than 3 characters." });
	}
	const emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ errorMessage: "Please provide a valid email." });
	}

	if (password.length < 6) {
		return res.status(400).json({
			errorMessage: "Your password needs to be at least 6 characters long.",
		});
	}

	const hashedPassword = bcrypt.hashSync(password, 10);

	// Create a user and save it in the database
	UserModel.findByIdAndUpdate(
		_id,
		{
			username,
			email,
			password: hashedPassword,
			userDescription,
			profileImage,
		},
		{ new: true },
	)
		.then((updatedUser) => {
			// console.log("CL 👉---", updatedUser);
			res.status(200).json({ user: updatedUser });
		})
		.catch((error) => res.status(500).json({ message: "Something went wrong" }));
});

module.exports = router;
