
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.port || process.env.PORT || 3000;
// create these controller routers soon.
var indexRouter = require('./controllers/index');
// var usersRouter = require('./routes/users');
const app = express();

// rename these, because i'm not sure what they even are!
// const points = [];
// const hr;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())


// view engine setup
app.set('views', path.join(__dirname, 'views'));
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: require("handlebars-helpers")()
}));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

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
