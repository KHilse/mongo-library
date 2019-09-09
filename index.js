let express = require("express");
let app = express();
let db = require("./models");

app.get("/", (req, res) => {
	res.send("Home page");
})
 
app.get("/testauthor", (req, res) => {
	db.Author.create({
		firstname: 'Kirk',
		lastname: 'Hilse',
		age: 51,
		address: {
			city: 'Kirkland',
			state: 'WA',
			zip: 98034
		}
	})
	.then(result => {
		res.send("Success!")
	})
	.catch(err => {
		console.log("ERROR: ", err)
		res.send("Crap...")
	})
})

app.get("/testbook", (req, res) => {
	db.Book.create({
		title: 'My Awesome BOok',
		author: "5d76d0bb1acebd00e8d92383"
	})
	.then(result => {
		res.send("Success!")
	})
	.catch(err => {
		console.log(err);
		res.send("You did something wrong right there");
	})
})


app.use("/authors", require("./controllers/authors"));
app.use("/books", require("./controllers/books"));

app.listen(8000);