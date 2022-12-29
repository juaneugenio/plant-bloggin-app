/** @format */
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		username: {
			type: String,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		profileImage: {
			type: String,
			default:
				"https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
		},
	},
	{
		timestamps: true,
	},
);

const User = model("User", userSchema);

module.exports = User;
