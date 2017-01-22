var express = require("express");
var depLinker = require("dep-linker");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

depLinker.linkDependenciesTo('./public')

app.get('/interviwer', (req, res) => {
	res.sendFile(__dirname + "/public/interviwer.html");
}) 

app.get('/interviwee', (req, res) => {
	res.sendFile(__dirname + "/public/interviwee.html");
}) 

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})