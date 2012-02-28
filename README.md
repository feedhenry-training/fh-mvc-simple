# "MainPage" View and "Logged" View Implementation (v2 branch)

## Outline:

1. How to add multiple views to project.
2. How to render a view at the start of the app.

## Step1 -- Add views to project.

In index.html, add two view place holders:

		<div class="page" id="mainPage"></div>
		<div class="page" id="logged"></div> 

Create two view files in ./app/views folder: mainPage.html & logged.html. 
Make sure file name should be consistent to the id of view place holders in index.html.

Add following code to mainPage.html
		
		<div style="text-align:center">
			<h1>Welcome,Please login:</h1>
			<p>
				<label for="username">Username:</label>
				<input type="text" id="username" placeholder="UserName"/>
			</p>
			<p>
				<label for="password">Password:</label>
				<input type="password" id="password" placeholder="Password"/>
			</p>
			<p>
				<input type="button" value="Login" id="loginBtn"  disabled="disabled" />
			</p>
			<p id="info" ></p>
		</div>


Add following code to logged.html

		<h1>Welcome to Login</h1>
		<h3>Your Name is:<span id="name"></span></h3>
		<input  type="button" value="logout" class="logout" />

The content of above two files will be loaded and injected to index.html in different placeholders.

## Step 2 -- Render a View(MainPage View) at the start of the app.

Add a init.js file to ./js folder. init.js will do some initialisation before app really loaded.
Add following code to init.js

		$(document).ready(function() {
			importViews(function() {//import all views. callback when finished
				changeView("mainPage");
				// go to the first view: mainPage
				var mainPageView = getView("mainPage");
			});
		});

Link init.js to index.html

Now the project will render a page that asks users to login. Since there is no events handler, the login button will not work.

Next step in <a href="https://github.com/feedhenry/fh-mvc-simple/tree/v3">v3 branch</a> will introduce how to create a controller and how to send controller messages from UI.




