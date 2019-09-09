let router = require("express").Router();
let db = require("../models");

router.get("/", (req, res) => {
	db.Author.find()
	.then(authors => {
		res.send(authors);
	})
	.catch(err => {
		console.log(err);
	})
})

module.exports = router;