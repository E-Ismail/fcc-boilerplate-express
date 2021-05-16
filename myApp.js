var express = require('express');
require('dotenv/config');
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

const timeMdware = (req, res, next) => {
    req.time = new Date().toString();
    next();
}

//Middleware in a Route.
app.get('/now', timeMdware, (req, res) => {
    let time = { "time": req.time };
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
})


































module.exports = app;
