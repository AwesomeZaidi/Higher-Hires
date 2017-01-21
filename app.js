var express = require("express");
//var path = require("path");
process.env.PWD = process.cwd()

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

app.use(express.static(process.env.PWD + '/static'));

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