let mongoose = require("mongoose");

// Define Address schema
let addressSchema = new mongoose.Schema({
	city: String,
	state: String,
	zip: Number
})

// Define Author schema
let authorSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	age: Number,
	address: addressSchema
});

// Create Model for Author and export it
module.exports = mongoose.model("Author", authorSchema);
