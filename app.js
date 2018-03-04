var express = require("express")
var ejs = require('ejs')
var bodyParser = require('body-parser');
var app = express()
var bodyParser = require('body-parser');
var path = require('path')
var multer = require('multer')

const port = process.env.PORT || 8080;


var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './uploadedPictures')
	},
	filename: function(req, file, callback) {
		console.log(file)
		callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	}
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.get('/api/file', function(req, res) {
	res.render('sendImage')
})

app.post('/api/file', function(req, res){


  console.log(req.body);
	var upload = multer({
		storage: storage
	}).single('userFile')
	upload(req, res, function(err) {
		res.end('File is uploaded')
	})
})


app.listen(port, function () {
  console.log('App listening on port: ' + port);
})
