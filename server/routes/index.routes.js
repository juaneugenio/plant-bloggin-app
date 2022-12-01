/** @format */

const router = require("express").Router();

const postsRoutes = require("./posts.routes");

router.get("/", (req, res) => {
	res.send("Root path");
});

router.use("/posts", postsRoutes);

module.exports = router;
