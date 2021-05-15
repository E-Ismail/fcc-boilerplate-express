var express = require('express');
var app = express();
absolutePath = __dirname + "/views/index.html";
console.log(absolutePath);
app.get('/', (req, res) => {
    // res.send('Hello Express');
    res.sendFile(absolutePath);
});



































module.exports = app;
