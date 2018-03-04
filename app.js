const express = require("express")
//var ejs = require('ejs')
const bodyParser = require('body-parser');
const app = express()
const request = require('request');

//var path = require('path')


const port = process.env.PORT || 8080;

//app.set('views', __dirname + '/views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')


app.get('/api/file', function(req, res) {
	res.render('./FinalTest')
})

app.post('/api/submission', function(req, res){

  var obj = {};
  	console.log('body: ' + JSON.stringify(req.body));
  	res.send(req.body);

})


app.listen(port, function () {
  console.log('App listening on port: ' + port);
})
