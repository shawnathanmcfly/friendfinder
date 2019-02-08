
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000;

require('./routing/htmlroutes')(app);
require('./routing/apiroutes')(app);

app.listen( PORT, ()=> {
    console.log("listening");
} );