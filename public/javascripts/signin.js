/*
Author: Stephen Hyberger & 
File: signin.js
Date: 10.3.2020
Purpose: Handling the behavior of the sign-in/registration page.
*/

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
