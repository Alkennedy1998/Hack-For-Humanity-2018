const express = require('express');
//const mysql = require('mysql');
const app = express();
//const myConnection = require('express-myconnection');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
//const store = require('./store');

const port = process.env.PORT || 8080;

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3000,
  database: 'reports'
});

app.use(myConnection(mysql, connection, 'pool')); */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
//app.use(bodyParser.json());
app.use(bodyParser({uploadDir:'/data'}));


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/submit-form.html'));
});

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

app.listen(port, function () {
  console.log('App listening on port: ' + port);
})
