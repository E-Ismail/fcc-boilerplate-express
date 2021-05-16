var express = require('express');
require('dotenv/config');
var bodyParser = require('body-parser');
var app = express();
let absolutePath = __dirname + "/views/index.html";

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

//Middleware used by app.
app.use(function myLogger(req, res, next) {
    let method = req.method;
    let path = req.path;
    let ip = req.ip;
    console.log(method + " " + path + " - " + ip);
    next();
}
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const timeMdware = (req, res, next) => {
    //timeZone should match in order to pass this challenge
    req.time = new Date().toString();
    next();
}

//Middleware in a Route.
app.get('/now', timeMdware, (req, res) => {
    let time = { "time": req.time };
    console.log(time)
    res.json(time);
});

app.get('/', (req, res) => {

    res.sendFile(absolutePath);
});


app.get('/json', (req, res) => {
    let message = "Hello json";
    let response = "";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = message.toUpperCase();
    } else {
        response = message;
    }
    let data = { "message": response };
    res.json(data);
});

//Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {

    let echo = { "echo": req.params.word }
    res.json(echo);
});


app.get('/name', (req, res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.json({
        name: `${firstName} ${lastName}`
    });

});


app.post("/name", function(req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
  });
































module.exports = app;
