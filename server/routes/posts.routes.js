/** @format */
const router = require("express").Router();
const uploadPostPicture = require("../middlewares/cloudinary");
const isLoggedIN = require("../middlewares/isLoggedIN");
const PostModel = require("../models/Post.model");

////Getting all posts //////
router.get("/", async (req, res) => {
	try {
		const allPosts = await PostModel.find();
		allPosts.reverse();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

////Creating a single post //////
router.post("/", isLoggedIN, uploadPostPicture.single("blogPicture"), async (req, res) => {
	const { title, description } = req.body;
	// console.log("▶︎▶︎▶︎ File: posts.routes ▶︎▶︎", req.user);
	// console.log("▶︎▶︎▶︎ REQ.FILE▶︎▶︎", req.file);
	try {
		const newPost = await PostModel.create({
			title,
			description,
			imageUrl: req.file.path,
			author: req.user._id,
		});
		res.status(200).json({ createdPost: newPost });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

////Getting a single post //////
router.get("/:id", async (req, res) => {
	try {
		const { id: blogId } = req.params;
		const getSinglePost = await PostModel.findOne({ _id: blogId }).populate("author");
		if (!getSinglePost) {
			return res.status(404).json({ message: `No Post with Id: ${postID}` });
		}
		// const authorPost = getSinglePost.author.username;

		res.status(200).json({ getSinglePost });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

////Editting a single post //////
router.patch("/edit/:id", isLoggedIN, uploadPostPicture.single("blogPicture"), async (req, res) => {
	try {
		const { id: blogId } = req.params;

		const { title, description, blogPicture } = req.body;
		// if (req.file) {
		// 	imageUrl = req.file.path;
		// }
		console.log("%c ▶︎▶︎ -58-「BODY---」", "font-size:13px; background:#993441; color:#ffb8b1;", req.body);
		console.log("%c ▶︎▶︎ -58-FILEEEE---」", "font-size:13px; background:#993441; color:#ffb8b1;", req.file);
		const patchSinglePost = await PostModel.findOneAndUpdate(
			{ _id: blogId },
			{
				title,
				description,
				imageUrl: req.file.path,
			},
			{
				new: true,
				runValidators: true,
			},
		);
		if (!patchSinglePost) {
			return res.status(404).json({ message: `Post Id: ${blogId} Unsuccessful Updated!` });
		}
		res.status(200).json({ patchSinglePost });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

////Deleting a single posts //////
router.delete("/:id", isLoggedIN, async (req, res) => {
	try {
		const { id: postID } = req.params;
		const deleteSinglePost = await PostModel.findByIdAndDelete({ _id: postID });
		if (!deleteSinglePost) {
			return res.status(404).json({ message: `No Post with Id: ${postID}` });
		}
		res.status(200).json({ message: `Post Id: ${postID} successful deleted` });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
