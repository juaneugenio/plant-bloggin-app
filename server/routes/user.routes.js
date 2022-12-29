/** @format */

const router = require("express").Router();
const UserModel = require("../models/User.model");

/* router.get("/", async (req, res) => {
	try {
		const allPosts = await PostModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});
 */
router.get("/", (req, res, next) => {
	res.send("User routes");
});

module.exports = router;
