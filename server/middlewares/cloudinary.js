/** @format */

const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "blanty-app",
	},
});

module.exports = multer({ storage });
