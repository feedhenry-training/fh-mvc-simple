#Data Process with Model (v4 Branch)

## Outline

* How to create a model
* How to process data action request in non-blocking way
* How to perform a data action in controller

## Step1 -- Create a model

Add user.js in ./app/models folder 

Put following code:

		/**
		 * User model.
		 */
		
		var users = { //model uses mockup data
			data : [{
				username:"Joe",
				password:"12345"
			}],
			isDataLoaded : true,
			load : function(callback) {
				//load data to model. Using mock up data. Callback directly.
				if(callback) {
					callback()
				}
			},
			userValidate : function(username, password, cb) {
				var users = this.data;
				//unblock process
				setTimeout(function() {
					for(var i = 0; i < users.length; i++) {
						var user = users[i];
						if(user.username === username && user.password === password) {
							if(cb != undefined) {
								cb(true);
								return;
							}
						}
					}
					if(cb != undefined) {
						cb(false);
					}
				}, 100);
			}
		};

To keep it simple, we use local mock-up data at this stage. The credential for login is: username: Joe, password: 12345

## Step2 -- unblock process

Since model data process could be very heavy, it is required to use non-blocking method which is all methods of a model will return directly and invoke callback function once data process finished.

## Step3 -- Perform data action in controller

Change code in userAuth.js as:

		var userAuth = {
			login : function() {
				if(users == undefined) {
					return;
				}
				var username, pwd, usernameElement, passwordElement;
				//define variables
				usernameElement = document.getElementById("username");
				passwordElement = document.getElementById("password");
				username = usernameElement.value;
				pwd = passwordElement.value;
				users.userValidate(username, pwd, function(res) {
					if(res === true) {
						document.getElementById("name").innerHTML = username;
						return changeView("logged");
					} else {
						alert("Invalid username or password");
					}
				});
			},
			logout : function() {
				changeView("mainPage");
			}
		}
		
As the code above, we use users model to perform user validation action and once it is finished the callback funciton will be called with result.

Now, run the project in Feedhenry platform. The app could now validate user. 

------

So far, a small but containing all Model-View-Controller app has been devloped.

The next steps will be more advanced. 

Please checkout:

* use cloud data/ cloud validation (<a href="https://github.com/keyang-feedhenry/fh-mvc-simple/tree/v5">v5 branch</a>)
* use 3rd party components  (google map) (<a href="https://github.com/keyang-feedhenry/fh-mvc-simple/tree/v6">v6 branch</a>)
* construct a list view (<a href="https://github.com/keyang-feedhenry/fh-mvc-simple/tree/v7">v7 branch</a>)
* use jQuery Mobile.  (<a href="https://github.com/keyang-feedhenry/fh-mvc-simple/tree/v8">v8 branch</a>)


