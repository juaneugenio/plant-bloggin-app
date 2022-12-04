/** @format */
const router = require("express").Router();
const PostModel = require("../models/Post.model");

router.get("/", async (req, res) => {
	try {
		const allPosts = await PostModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});
router.post("/", async (req, res) => {
	try {
		const newPost = await PostModel.create(req.body);
		res.status(200).json({ newPost });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
router.get("/:id", async (req, res) => {
	try {
		const { id: postID } = req.params;
		const getSinglePost = await PostModel.findOne({ _id: postID });
		if (!getSinglePost) {
			return res.status(404).json({ message: `No Post with Id: ${postID}` });
		}
		res.status(200).json({ getSinglePost });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});
router.patch("/:id", async (req, res) => {
	try {
		const { id: postID } = req.params;
		const patchSinglePost = await PostModel.findOneAndUpdate({ _id: postID }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!patchSinglePost) {
			return res.status(404).json({ message: `Post Id: ${postID} successful Updated!` });
		}
		res.status(200).json({ patchSinglePost });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});
router.delete("/:id", async (req, res) => {
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
