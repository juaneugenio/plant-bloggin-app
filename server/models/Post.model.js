/** @format */

const { Schema, model } = require("mongoose");
const postSchema = new Schema({
	imageUrl: {
		type: String,
		default: "https://friendlystock.com/wp-content/uploads/2020/12/3-kawaii-indoor-plant-cartoon-clipart.jpg",
	},
	title: {
		type: String,
		trim: true,
		required: true,
	},
	description: {
		type: String,
		trim: true,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId, //TO DO
		ref: "User",
	},
	// comments: [
	// 	{
	// 		type: Schema.Types.ObjectId, // TO DO
	// 		ref: "Comment",
	// 	},
	// ],
	time: { type: Date, default: Date.now() },
});
const Post = model("Post", postSchema);

module.exports = Post;
