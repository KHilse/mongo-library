// Require any modules we need
let mongoose = require("mongoose");

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/library",
	{ useNewUrlParser: true }
);

// Export all models in this folder
// Include as many as needed in the same format
module.exports.Author = require('./author');
module.exports.Book = require("./book");
