#Use Cloud Data Retrieval (v5 branch)

It is not cool to use Mock-up data stored on client source code. Feedhenry applications could use Cloud, Local storage, etc as model data source. 
In the previous branch, the data we used and validation process happen on client-side.
Usually, those data should be stored on cloud-side and the validation process should happen there as well.

## Outline

* Retrieve user data from cloud and manage data in model.
* Move user validation process to cloud-side.

### Step1 -- Use cloud retrieval data.

Before we started, we assume following scenario:

When the app starting up, user data need to be pulled from cloud-side.

Create users.js in cloud folder. add following code:

		var users = [{
			username : "Joe",
			password : "12345"
		}, {
			username : "John",
			password : "12345"
		},{
			username : "Sean",
			password : "12345"
		},{
			username : "Michael",
			password : "12345"
		},{
			username : "James",
			password : "12345"
		},{
			username : "Daniel",
			password : "12345"
		}];

This defines a set of users that storec on cloud side. Developers could also use Database, SOAP, or REST to retrieve data.

Create main.js in cloud folder, add following code:

		function getUsers() {
			return {
				data : users
			};
		}

Above script will return all users defined in users.js on cloud side.

Add a load method to users model in user.js in ./app/models folder which will be like:

		/**
		 * User model.
		 */
		
		var users = {
			data : [],
			isDataLoaded : false,
			load : function(callback) {
				var that = this;
				$fh.act({
					act : "getUsers"
				}, function(res) {
					that.data = res.data;
					that.isDataLoaded = true;
					if(callback) {
						callback(res.data);
					}
				});
			},
			userValidate : function(username, password, cb) {
			
			.......

When load method is invoked, client will perform a "getUser" action on cloud which will retrieve all pre-defined user.
After data returned, model will call callback function.

Change starting up code in init.js as:

		$(document).ready(function() {
			importViews(function() {
				changeView("mainPage");
				var mainPageView = getView("mainPage");
				mainPageView.find("#info").html("Loading User Data....");
				users.load(function() {
					mainPageView.find("#info").html("User Data Loaded!");
					mainPageView.find("#loginBtn").removeAttr("disabled");
					mainPageView.find("#loginBtn").button("enable");
				});
				bindEvents();
			});
		});

When app starts up, users model will load data and once loaded view would display status.

### Step2 -- Validate user on cloud side.

add following code in main.js on cloud

		function validateUser(param) {
			var name = param.name;
			var pwd = param.pwd;
			for(var i = 0; i < users.length; i++) {
				var user = users[i];
				if(user.username === name && user.password === pwd) {
						return {res:"valid"};
				}
			}
			return {res:"invalid"};
		}

The function will compare username and password in request with cloud stored users and return result.

We need to invoke the function through $fh.act on client-side. Change userValidate function in users model:

		userValidate : function(username, password, cb) {
			var users = this.data;
			$fh.act({
				act : "validateUser",
				req : {
					name : username,
					pwd : password
				}
			}, function(res) {
				if(res.res === "valid") {
					cb(true);
				} else {
					cb(false);
				}
			});
		}

-----

Now, users data and validation process have been moved to cloud-side. With the power of decoupling of MVC, we did not even touch the source code of controller(userAuth.js) and views to perform the modification.

<a href="https://github.com/feedhenry/fh-mvc-simple/tree/v6"> v6 branch</a> will integrate google map to app and demostrate how controller handles user actions such as pin my current locatin on map.

