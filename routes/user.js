const express = require('express');
const querystr = require('querystring');
const mysql = require('mysql');

const router = express.Router();

router.get('/', function(req, res, next) {
	res.render('user');
});
router.post('/signin', function(req, res) {

  	//Ensure that the method was post.
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

  		conn.query("SELECT email FROM cs_users_auth WHERE email = \'" + req.body.email + "\' AND password = \'" + req.body.password + "\';", function(err, results) {
  			if(err) throw err;
			else {
				if(results.length > 0) {
					conn.end();
					console.log("Going to marketplace");
					res.redirect('/marketplace');
				} else {
					conn.end();
					console.log("Failure, rerouting");
					res.redirect('/user');
				}
			}
		});
	}
});
router.post('/signup', function(req, res) {
	
	//Ensure that the method was post.
	if(req.method === 'POST') {
		
		//Check that both password fields match.
		if(req.body.password === req.body.passwordconf) {

			//Establish connection.
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
						res.redirect('/user');
					} else {

						var connInsert = mysql.createConnection({
							host: "localhost",
							user: "csregstr",
							password: "54LG-D4GR-WCER-UO3R",
							database: "csdatabase"
						});

						var date = new Date();
						connInsert.query("INSERT INTO cs_users(email, password, name, join_date) VALUES(\'" + req.body.email + "\', \'" + req.body.password + "\', \'" + req.body.name + "\', \'" + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() +"\');", function(err) {
							if(err) throw err;
						});
						connInsert.end();
						res.redirect('/user');
					}
				}
			});
		}
	}
});
// router.post('/user/signup', async (req, res) => {
//     // Create a new user
//     const user = new User(req.body)
//     await user.save()
//     const token = await user.generateAuthToken()
//     res.status(201).send({ user, token })
// })
// router.post('/user/login', async(req, res) => {
//     //Login a registered user
//     const { email, password } = req.body
//     const user = await User.findByCredentials(email, password)
//     if (!user) {
//         return res.status(401).send({error: 'Login failed! Check authentication credentials'})
//     }
//     const token = await user.generateAuthToken()
//     res.send({ user, token })
// })
// router.get('/user/me', auth, async(req, res) => {
//     // View logged in user profile
//     res.send(req.user)
// })
// router.post('/user/me/logout', auth, async (req, res) => {
//     // Log user out of the application
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token != req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
// router.post('/user/me/logoutall', auth, async(req, res) => {
//     // Log user out of all devices
//     try {
//         req.user.tokens.splice(0, req.user.tokens.length)
//         await req.user.save()
//         res.send()
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
cd 
module.exports = router
