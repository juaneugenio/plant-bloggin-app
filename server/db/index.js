/** @format */

const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
console.log("%c ▶︎▶︎ -6-「index」", "font-size:13px; background:#993441; color:#ffb8b1;", MONGO_URI);
// || "mongodb://localhost/plant-blog";

mongoose
	.connect(MONGO_URI)
	.then((x) => {
		if (!x) {
			console.log("▶︎▶︎▶︎ File: index ▶︎▶︎", "No connection to DB");
		}
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error("Error connecting to mongo: ", err);
	});
