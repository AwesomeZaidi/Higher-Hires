var express = require("express");
var depLinker = require("dep-linker");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

depLinker.linkDependenciesTo('./public')

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/home.html");
}) 

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})