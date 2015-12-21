var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	imageUrl: String,
	title: String,
	author: String,
	description: Number,
	display: String,
	voteCount: 0,
	comments: []
});

module.exports = mongoose.model("Post", postSchema);