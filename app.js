var express = require("express");

var bodyParser = require("body-parser");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/interviewer', (req, res) => {
	res.sendFile(__dirname + "/public/interviewer.html");
}) 

app.get('/interviewee', (req, res) => {
	res.sendFile(__dirname + "/public/interviewee.html");
})

app.get('/plot', (req, res) => {
	res.sendFile(__dirname + "/public/plot.html");
})

app.post('/plot', (req, res) => {
	console.log(req.body);
})

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})