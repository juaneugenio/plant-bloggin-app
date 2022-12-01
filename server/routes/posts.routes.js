/** @format */

const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("All posts");
});
module.exports = router;
