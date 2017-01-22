var express = require("express");

var bodyParser = require("body-parser");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();
var points = []

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/interviewer', (req, res) => {
	res.sendFile(__dirname + "/public/interviewer.html");
})

app.get('/index', (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
})

app.get('/interviewee', (req, res) => {
	res.sendFile(__dirname + "/public/interviewee.html");
})

app.get('/plot', (req, res) => {
	res.sendFile(__dirname + "/public/plot.html");
})

app.post('/plot', (req, res) => {
	points.append(req.body);
})

app.get('/points', (req, res) => {
	if (points) {
		res.send(points);	
	} else {
		res.send("Points Empty");
	}
	
})

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})
