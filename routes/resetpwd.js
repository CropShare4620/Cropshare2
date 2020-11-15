const express = require('express');
const mysql = require('mysql');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('resetpwd');
});
router.get('/result', function(req, res) {
	
	if(req.method === 'POST') {
		//Establish connection
  		var conn = mysql.createConnection({
			host: "localhost",
			user: "csauth",
			password: "KDN3-23FR-DW24-H9RT",
			database: "csdatabase"
 		});
		
		conn.connect(function(err) {
			if(err) throw err;
		});

		conn.query("SELECT email FROM cs_users_auth WHERE email = \'" + req.body.email + "\';", function(err, results) {
			if(err) throw err;
			else {
				if(results.length > 0) {
					conn.end();

					conn = mysql.createConnection({
						host: "localhost",
						user: "csreset",
						password: "wings_up_2018",
						database: "csdatabase"
					});

					conn.connect(function(err) {
						if(err) throw err;
					});
					
					conn.query("UPDATE cs_users SET password = " + req.body.passwd + " WHERE email = " + req.body.email + ";", function(err, results) {
						if(err) throw err;
						else {
							res.redirect('/user');	
						}
					});

					console.log("Email validated");
				} else {
					console.log("Email was not found");
				}
			}
		});
		conn.end();
	}
	res.redirect('/resetpwd');
});
module.exports = router
