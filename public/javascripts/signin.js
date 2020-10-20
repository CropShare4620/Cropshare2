/*
Author: Stephen Hyberger &
File: signin.js
Date: 10.2.2020
Purpose: Handling the behavior of the sign-in/registration page.
*/

var mysql = require('mysql');

/*
The next two functions:
Author: Michael Lieb
Taken From: scripts.js
*/

function signUpTransition() {

	document.getElementById("signin-wrapper").classList.add("right-panel-active");
}
function signInTransition() {
    	document.getElementById("signin-wrapper").classList.remove("right-panel-active");
}


//The loginValAuth() function takes in an email and a password identification and authenticates them against the database. On success, transfers user to profile page, on failure displays unsuccessful logon message.
function loginValAuth(email, password) {
    alert("Hello Woirld");

    //Establish sql connection.
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'csauth',
		password: 'KDN3-23FR-DW24-H9RT',
		database: 'csdatabase'
	});
	conn.connect();

	//Do query.
	var results = conn.query("SELECT email FROM cs_users WHERE email=" + email + " AND password=" + password + ";");

	//Check for errors.
	var error = results.on('error');
	if(error) throw error;
	else {
		var user = results.on('rows');

		//Check if user, if so authorize user.
		if(user);
		//Otherwise, indicate that the identification was invalid.
		else return null;
	}
}

function registerUser(email, name, password, passwordConf) {

	//Check if password and passwordConf match.
	if(passwordConf === password) {
		//Setup SQL connection.
		var conn = mysql.createConnection({
			host: 'localhost',
			user: 'csregstr',
			password: '54LG-D4GR-WCER-UO3R',
			database: 'csdatabase'
		});
		conn.connect();

		//Check if username is unique. If so, insert.
		var result = conn.query("SELECT email FROM cs_users WHERE email=" + email + ";");
		var error = result.on('error');
		if(error) throw error;
		else {
			if(!result.on('rows')) {

				//Get date.
				var date = new Date();
				var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();

				//Do insert.
				result = conn.query("INSERT INTO cs_users(email, password, name, time) VALUES(" + email + ", " + password + ", " + name + ", " + time + ");");
				//Check for errors, if no errors, insertion was successful, transition to sign in.
				error = result.on('error');
				if(error) throw error;
				else signInTransition();

			//Otherwise, display error on page.
			} else {
				//Insert error code here.
			}
		}
	}
}

