/** @format */

const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Router } = require("express");
const mongoose = require("mongoose");

const User = require("../models/User.model");
const saltRounds = 10;

/* router.get("/", async (req, res) => {
	try {
		const allPosts = await PostModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});
 */
console.log("▶︎▶︎▶︎ File: authen.routes ▶︎▶︎", "hola authentic");
router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;
	console.log("%c req.body ▶︎ ", "font-size:13px; background:#993441; color:#ffb8b1;", req.body);
	try {
		const allPosts = await PostModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

module.exports = router;
