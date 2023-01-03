/** @format */

const router = require("express").Router();
const UserModel = require("../models/User.model");

router.get("/:userId", async (req, res) => {
	console.log("▶︎▶︎▶︎ File: user.routes ▶︎▶︎", req.body);
	try {
		const { userId } = req.params;

		const userFromDB = await UserModel.findOne({ _id: userId });
		if (!userFromDB) {
			return res.status(404).json({ message: `No User with Id: ${userId}` });
		}
		res.status(200).json({ user: userFromDB });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
