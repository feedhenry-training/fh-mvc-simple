# Another view -- user list

## Outline

* Add method to users model
* Add user controller
* Add user list view

### Step1 -- Add method to users model

Add getUserList function to users model as following code:

		getUserList : function(callback) {
				var retArr = [];
				var users = this.data;
				setTimeout(function() {
					for(var i = 0; i < users.length; i++) {
						var user = users[i];
						retArr.push(user.username);
					}
					if(callback) {
						callback(retArr);
					}
				}, 100)
			}
			
The funciton will return a copy of current user data store in model.


### Step2 -- Add user controlelr

create user.js in ./app/controllers folder.  Put following code:

		var user={
			showUserList:function(){
				getView("userList").find("#users").html("");
				users.getUserList(function(arr){
					for (var i=0;i<arr.length;i++){
						var user=arr[i];
						var html="<li>{0}</li>";
						html=html.replace("{0}",user);
						getView("userList").find("#users").append(html);
					}
					changeView("userList");
				});
			},
			back:function(){
				changeView("logged");
			}
		};

showUserList function will invoke getUserList funciton in users model and update UI.


### Step3 -- Add user list view

create userList.html in ./app/views folder. Put following content:

		<div>
			<h1>User List</h1>
			<ul id="users" data-role="listview"></ul>
			<button id="userBack">
				Back
			</button>
			<input type="button" value="logout" class="logout" />
		</div>
		
