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
	}
	res.redirect('/resetpwd');
});
module.exports = router