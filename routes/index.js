exports.index = function (req, req) {
  if(req.method == 'POST') {
    var post = req.body;
    //other stuff to save
    console.log('POST');
    if(!req.files)
      return res.status(400).send('400 Error');
      
    var file = req.files.uploaded_image;
    var img_name = file.name;

    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
      file.mv('public/images/upload_images/'+file.name, function(err) {
      if (err) return res.status(500).send(err);
      //var sql = "INSERT INTO `users_image`(`first_name`,`last_name`,`mob_no`,`user_name`, `password` ,`image`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";
      var query = db.query(sql, function(err, result) {
        //redirect
        });
      });
    } else {
      //File Format not allowed
    }
  } else {
    //render(index);
  }
};
