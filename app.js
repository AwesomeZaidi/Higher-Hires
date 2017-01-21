var express = require("express");

var app = express();

app.get('/', (req, res) => {
	res.sendFile("C:/Users/shazy/Desktop/DevelopmentProjects/boilermake/HigherHire/home.html");
}) 

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})