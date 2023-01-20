/** @format */

const router = require("express").Router();
const UserModel = require("../models/User.model");
const isLoggedOUT = require("../middlewares/isLoggedOUT");
const isLoggedIN = require("../middlewares/isLoggedIN");

// router.post("/my-account", (req, res, next) => {
// 	const { _id } = req.body.user;
// 	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎ REQ.BODY", _id);
// });

router.patch("/my-account", async (req, res) => {
	try {
		const { _id } = req.body.user;
		console.log("%c _id ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", _id);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
