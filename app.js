const express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var multer = require('multer');
var upload = multer({ dest: './uploads' });
const app = express();
const path = require('path');
var Schema = mongoose.Schema;
const fs = require('fs');
var router = express.Router();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 27017;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser({uploadDir:'/data'}));

var url = "mongodb://127.0.0.1/mydb";
mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));



var ReportsSchema = new Schema({
  latitude: Number,
  longitude: Number,
  descr: String,
  category: String,
  //img: {data: Buffer, contentType: String}
});

var Item = mongoose.model('Report', ReportsSchema);

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

router.get('/',function(req,res){
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

//POSTs a report into reports
router.post('/submission', function(req, res) {
    var report = new Item();
    console.log(req.body);
    report.latitude = req.body.latitude;
    report.longitude = req.body.longitude;
    report.descr = req.body.description;
    report.category = req.body.category;

    report.save( function(err) {
      if(err)
        req.send(err);

      res.json({message: 'Report created'});
    });
});

//GETs all the reports
router.get('/submission', function(req, res) {
  Item.find(function(err, reports) {
    if (err)
        res.send(err);

    res.json(reports);
  });
});

app.listen(PORT, function () {
  console.log('App listening on port: ' + PORT);
})
