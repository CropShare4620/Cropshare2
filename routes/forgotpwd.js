const express = require('express');
const mysql = require('mysql');
const mailsend = require('nodemailer');
const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('forgotpwd');
});
router.post('/result', function(req, res, next) {
	
	if(req.method === 'POST') {
		
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
					console.log("Email validated");

					//Uncomment when email is working.
					/*
					var transport = mailsend.createTransport({
						host: "stmp.cropshare.com",
						port: 587,
						secure: false
					});
					var message = await transport.sendMail({
						from: "CropShareResetPasswordDaemon@CropShare.com",
						to: req.body.email,
						subject: "CropShare Password Reset",
						text: "LINK GOES HERE"
					});*/
				} else {
					conn.end();
					console.log("Email not found");
				}
			}
		});
	}
	res.redirect('/forgotpwd');
});
module.exports = router
