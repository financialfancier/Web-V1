var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('Single Blog Page');
});

app.listen(3001, function() {
    console.log("Server running at port: 3001");
})