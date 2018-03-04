const express = require('express');
var mysql = require('mysql');
const app = express();
const routes = require('./routes');
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
//const store = require('./store');

const PORT = process.env.PORT || 8080;

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

/*

global.db = connection;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', process.env.PORT || 8080);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/submit-form.html'));
});

app.get('/', routes.index);
app.post('/submitsuccess', routes.index);

//Picture local upload
app.post('/submitsuccess', function (req, res) {
    var tempPath = req.file.file.path;
    var targetPath = path.resolve('./uploads/image.png');
    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
    } else {
        fs.unlink(tempPath, function () {
            if (err) throw err;
            console.error("Only .png files are allowed!");
        });
    }
    // ...
});

app.listen(PORT, function () {
  console.log('App listening on port: ' + PORT);
}) */
