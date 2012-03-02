#The first controller

## Outlines

* How to create a controller
* How to handle dom events
* How to send messages to controller
* How to change a view

## Step1 -- Create a Controller

Add userAuth.js to ./app/controllers folder and put following code:

		var userAuth = {
			login : function() {
				var username, pwd, usernameElement, passwordElement;
				//define variables
				usernameElement = document.getElementById("username");
				passwordElement = document.getElementById("password");
				username = usernameElement.value;
				pwd = passwordElement.value;
				document.getElementById("name").innerHTML = username;
				return changeView("logged");
			},
			logout : function() {
				changeView("mainPage");
			}
		}

Dont forget add reference to index.html

## Step2 -- Events Handlers

For better code maintainability, we would better define DOM events in one folder. Events definition could be separated by view names. In this example, due to few events, we put them in one file.

Create bind.js in ./app/events folder

Add following code:

		function bindEvents(){
			//event handlers
		}

Link bind.js to index.html

**Question**: When bindEvents function get invoked?

**Answer**: Since binding events works only when target element exists, we could invoke bindEvents once all views have been imported.

Currently, we need add two events:

* login button click event
* logout button click event

Add following code to bindEvents function :

		$("#loginBtn").bind("click",function(){
			userAuth.login();
		});
		
		$(".logout").bind("click",function(){
			userAuth.logout();
		});
		
## Step3 -- Send Message to Controller

To send message to a controller, the most direct way is: ControllerName.method(param) just like the code above: userAuth.login();

## Step4 -- Change view

Change view means hide current view and display next view. Just simply invoke changeView function defined in viewutil.js with viewId as parameter.


Now, if you run the project in Feedhenry Platform, you are able to login with any credentials and logout.


(Complete code is in <a href="https://github.com/feedhenry/fh-mvc-simple/tree/v3">v3 branch</a>)

Next chapter will introduce how to define a model and validate credential data using model. Please checkout <a href="https://github.com/feedhenry/fh-mvc-simple/tree/v3">v3 branch</a>.




