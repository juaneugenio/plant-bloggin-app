/** @format */

const router = require("express").Router();

const authRoutes = require("./authen.routes");
const postsRoutes = require("./posts.routes");
const userRoutes = require("./user.routes");

router.get("/", (req, res) => {
	res.send("Rootpath whit api prefix: ...api/");
});

router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);
router.use("/users", userRoutes);

module.exports = router;
