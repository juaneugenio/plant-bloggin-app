/** @format */

const router = require("express").Router();
const bcrypt = require("bcryptjs");

const isLoggedOUT = require("../middlewares/isLoggedOUT");
const isLoggedIN = require("../middlewares/isLoggedIN");

const User = require("../models/User.model");
const Session = require("../models/Session.model");
const saltRounds = 10;

//Register get
router.get("/register", (req, res) => {
	res.send("register");
});
//SESSION
router.get("/session", (req, res) => {
	// we dont want to throw an error, and just maintain the user as null
	if (!req.headers.authorization) {
		return res.json(null);
	}

	// accessToken is being sent on every request in the headers
	const accessToken = req.headers.authorization;

	Session.findById(accessToken)
		.populate("user")
		.then((session) => {
			if (!session) {
				return res.status(404).json({ errorMessage: "Session does not exist" });
			}
			return res.status(200).json(session);
		});
});

//REGISTER
router.post("/register", isLoggedOUT, (req, res) => {
	const { username, password, email, userDescription, profileImage } = req.body;
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

	User.findOne({ email }).then((emailFounded) => {
		// If the user is found, send the message username is taken
		if (emailFounded) {
			return res.status(400).json({ errorMessage: "Email already taken." });
		}

		// if user is not found, create a new user - start with hashing the password
		return bcrypt
			.genSalt(saltRounds)
			.then((salt) => bcrypt.hashSync(password, salt))
			.then((hashedPassword) => {
				// Create a user and save it in the database
				return User.create({
					username,
					email,
					password: hashedPassword,
					userDescription,
					profileImage,
				});
			})
			.then((user) => {
				Session.create({
					user: user._id,
					createdAt: Date.now(),
				}).then((session) => {
					console.log("%c session ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", session);
					res.status(201).json({ user, accessToken: session._id });
				});
			})
			.catch((error) => {
				if (error instanceof mongoose.Error.ValidationError) {
					return res.status(400).json({ errorMessage: error.message });
				}
				if (error.code === 11000) {
					return res.status(400).json({
						errorMessage: "Email needs to be unique. The email you chose is already in use.",
					});
				}
				return res.status(500).json({ errorMessage: error.message });
			});
	});
});

//LOGIN
router.post("/login", isLoggedOUT, (req, res) => {
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
	User.findOne({ email })
		.then((user) => {
			// If the user isn't found, send the message that user provided wrong credentials
			if (!user) {
				return res.status(400).json({ errorMessage: "⚠️ You don't have an Account yet. Please Register" });
			}
			bcrypt.compare(password, user.password).then((isSamePassword) => {
				if (!isSamePassword) {
					return res.status(400).json({ errorMessage: "⚠️ Wrong credentials." });
				}
				Session.create({ user: user._id, createdAt: Date.now() }).then((session) => {
					return res.json({ user, accessToken: session._id });
				});
			});
		})
		.catch((error) => {
			return res.status(500).render("login", { errorMessage: error.message });
		});
});

//LOGOUT
router.delete("/logout", isLoggedIN, (req, res) => {
	Session.findByIdAndDelete(req.headers.authorization)
		.then(() => {
			res.status(200).json({ message: "User was logged out" });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: err.message });
		});
});

module.exports = router;
