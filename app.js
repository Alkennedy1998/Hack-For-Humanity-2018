const express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var multer = require('multer');
const app = express();
const path = require('path');
var Schema = mongoose.Schema;
const fs = require('fs');
//const bodyParser = require('body-parser');

//const port = process.env.PORT || 8080;

/*app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser({uploadDir:'/data'}));*/

var url = "mongodb://27017/mydb";
mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

var pic = new picSchema({
  img: {data: Buffer, contentType: String}
});
var Item = mongoose.model('Clothes', Item);

app.use(multer({
  dest: './data/',
  rename: function (fieldname, filename) {
    return filename;
  }
}));

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/frontend/submitpage.html'));
});

app.post('/api/photo',function(req,res){
 var newPic = new pic();
 newPic.img.data = fs.readFileSync(req.files.userPhoto.path)
 newPic.img.contentType = 'image/png';
 newPic.save();
});

//Picture local upload
app.post('/submitsuccess', function (req, res) {
    var tempPath = req.files.file.path,
        targetPath = path.resolve('./uploads/image.png');
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

});

app.listen(27017, function () {
  console.log('App listening on port: 27017');
})
