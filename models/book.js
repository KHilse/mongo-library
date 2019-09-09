let mongoose = require("mongoose");

// Define Book schema
let bookSchema = new mongoose.Schema({
	title: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Author"
	}
})


// Create Model for Author and export it
module.exports = mongoose.model("Book", bookSchema);