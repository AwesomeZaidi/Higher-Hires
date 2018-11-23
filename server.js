const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.port || process.env.PORT || 3000;

var app = express();

// rename these!
const points = [];
const hr;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/interviewer', (req, res) => {
	res.render('interviewer');
})

app.get('/', (req, res) => {
	res.render('/');
})

app.get('/interviewee', (req, res) => {
	res.render('interviewee');
})

app.get('/plot', (req, res) => {
	res.render('plot');
})

app.post('/plot', (req, res) => {
	console.log("plot req >>",req.body);
	points.push(req.body);
	
})

app.post('/heart', (req, res) => {
	console.log("heart req >>",req.body);
	hr = req.body;
	
})
app.get('/heart', (req, res) => {
	console.log("heart req >>",req.body);
	res.send(hr);
	
})

app.get('/points', (req, res) => {
	console.log("points >>",req.body);
	if (points) {
		res.send(points);	
	} else {
		res.send("Points Empty");
	}
})

app.get('/clear', (req, res) => {
	points = [];
	res.send('Cleared');
})


app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server Started");
	}
})
