/** @format */

const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	imageUrl: {
		type: String,
		default:
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/house-plants-1629187361.jpg?crop=0.288xw:0.577xh;0.0465xw,0.205xh&resize=640:*",
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
	time: { type: Date, default: Date.now },
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
