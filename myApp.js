var express = require('express');
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
    let data = {"message":"Hello json"};
    res.json(data);
})


































module.exports = app;
