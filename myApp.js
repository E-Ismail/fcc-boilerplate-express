var express = require('express');
require('dotenv/config');
var app = express();
absolutePath = __dirname + "/views/index.html";

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
});


app.get('/json', (req, res) => {
    let data = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        data = data.toUpperCase();
    }
    res.json(data);
})


































module.exports = app;
