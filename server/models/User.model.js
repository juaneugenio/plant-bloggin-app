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
				"https://imgs.search.brave.com/HAltpxU-sFVODYlpzIneugquzb8EAWr4WmbK6DVZnw4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvZjgvNDMv/ZDAvZjg0M2QwNWMt/MWIxZi04NGY4LWEz/YmQtY2E5YmFjZjA0/MzYzL3NvdXJjZS81/MTJ4NTEyYmIuanBn",
		},
		userDescription: {
			type: String,
			default: "Add some nice infos to describe your love for plants!",
			trim: true,
		},
	},
	{
		timestamps: true,
	},
);

const User = model("User", userSchema);

module.exports = User;
