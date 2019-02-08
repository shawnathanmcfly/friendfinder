
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

require('./routing/htmlroutes')(app);
require('./routing/apiroutes')(app);

app.listen( 8081 );