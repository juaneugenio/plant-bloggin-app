/** @format */

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	imageUrl: {
		type: String,
		default: String, //TO DO: to paste a urlimage from anyplant in the internet
	},
	title: {
		type: String,
		trim: true,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId, //TO DO
		ref: "User",
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId, // TO DO
			ref: "Comment",
		},
	],
	timestamps: true,
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
