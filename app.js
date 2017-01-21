var express = require("express");
//var path = require("path");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
	res.sendFile("./home.html");
}) 

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})