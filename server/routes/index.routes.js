/** @format */

const router = require("express").Router();

const postsRoutes = require("./posts.routes");
const userRoutes = require("./user.routes");

router.get("/", (req, res) => {
	res.send("Root path whit api prefix: api/");
});

router.use("/posts", postsRoutes);
router.use("/users", userRoutes);

module.exports = router;
