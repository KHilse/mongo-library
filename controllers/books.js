let router = require("express").Router();
let db = require("../models");

router.get("/", (req, res) => {
	db.Book.find()
	.then(books => {
		res.send(books);
	})
	.catch(err => {
		console.log(err);
	})
})

router.get("/withauthor", (req, res) => {
	db.Book.find()
	.populate("author")
	.then(books => {
		res.send(books);
	})
	.catch(err => {
		console.log(err);
	})
})

module.exports = router;