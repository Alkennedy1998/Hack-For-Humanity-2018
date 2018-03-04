const express = require('express');
const mysql = require('mysql');
const app = express();
const routes = require('./routes');
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileUpload');
const bodyParser = require('body-parser');
//const store = require('./store');

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: PORT,
  database: 'reports'
});

connection.connect();

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
app.post('/', routes.index);

//Picture local upload
/*app.post('/submitsuccess', function (req, res) {
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
}); */

app.listen(PORT, function () {
  console.log('App listening on port: ' + PORT);
})
