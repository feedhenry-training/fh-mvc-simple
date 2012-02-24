# Main View and Logged in View Implementation (v2 branch)

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
				<!-- We assume controller userAuth exists -->
				<input type="button" value="Login" id="loginBtn" disabled="disabled"/>
			</p>
			<p id="info" ></p>
		</div>

