var express = require('express');
require('dotenv/config');
var app = express();
let absolutePath = __dirname + "/views/index.html";

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

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
