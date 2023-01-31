/** @format */

const router = require("express").Router();
const userImageUpload = require("../middlewares/cloudinary");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const Session = require("../models/Session.model");
const isLoggedOUT = require("../middlewares/isLoggedOUT");
const isLoggedIN = require("../middlewares/isLoggedIN");
const { response } = require("express");

// router.get("/my-account", (req, res, next) => {
// 	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎", req.body);
// });

//Update User
router.patch("/my-account", isLoggedIN, (req, res) => {
	const { username, password, email, userDescription } = req.body;
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
	if (email === "" || !emailRegex.test(email)) {
		return res.status(400).json({ errorMessage: "Please provide a valid email." });
	}

	if (password === "" || password.length < 6) {
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
		.catch((error) => res.status(500).json({ errorMessage: "Something went wrong", error }));
});

///// Update ROUTE for User Image/Photo profile. Uploading into Cloudinary

router.patch("/updateProfileImage", isLoggedIN, userImageUpload.single("profileImage"), (req, res, next) => {
	const { userId } = req.body;
	UserModel.findByIdAndUpdate(userId, { profileImage: req.file.path }, { new: true })
		.then((updatedUser) => {
			res.status(200).json({
				succes: true,
				profileImage: updatedUser.profileImage,
			});
		})
		.catch((error) => {
			res.json({
				succes: false,
				errorMessage: error.message,
			});
		});
});

//Delete User
router.delete("/:userID", isLoggedIN, async (req, res, next) => {
	const { userID } = req.params;

	//To code when erasing the userspost with post Model File

	const userSessionId = req.headers.authorization;

	const userInSession = await Session.findById(userSessionId).populate("user");

	if (userInSession.user._id.toString() !== userID) {
		return res.status(404).json({
			errorMessage: "You are NOT aloud to delete this account.",
		});
	}
	await Promise.all([UserModel.findByIdAndDelete(userID), Session.findByIdAndDelete(userSessionId)]);
	return res.status(200).json({ message: "Deletion succesful" });
});

module.exports = router;
