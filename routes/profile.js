var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('profile');
});

router.post('/post_available_produce', function(req, res) {
      //Ensure method was post
      if(req.method === 'POST') {
        //Login to farmer user
        var conn = mysql.createConnection({
          host: "localhost",
          user: "database_editor",
          password: "farmer2020",
          database: "csdatabase"
        });

        conn.connect(function(err) {
            if(err) throw err;
        });
        
        conn.query("INSERT INTO available_produce (produce_type, name, email, quantity, price) VALUES (\'" + req.body.type + "\', " + req.body.name + "\', " + req.body.email + "\', " + req.body.quantity + "\', " + req.body.price + "\');", function(err, results) {
            if(err) throw err;
          });
      }
});

router.post('/post_needed_produce', function(req, res) {
  //Ensure method was post
  if(req.method === 'POST') {
    //Login to farmer user
    var conn = mysql.createConnection({
      host: "localhost",
      user: "database_editor",
      password: "farmer2020",
      database: "csdatabase"
    });

    conn.connect(function(err) {
        if(err) throw err;
    });

    conn.query("INSERT INTO needed_produce (produce_type, name, email, quantity, price) VALUES (\'" + req.body.type + "\', " + req.body.name + "\', " + req.body.email + "\', " + req.body.quantity + "\', " + req.body.price + "\');", function(err, results) {
        if(err) throw err;
      });
  }
});

module.exports = router;
