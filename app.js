const express = require('express');
//const mysql = require('mysql');
const app = express();
//const myConnection = require('express-myconnection');
const path = require('path');

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3000,
  database: 'reports'
});

app.use(myConnection(mysql, connection, 'pool')); */

app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/frontend/submitpage.html'));
});
app.listen(300, function () {
  console.log('App listening on port 300');
})
