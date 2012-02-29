#A little more Refactor (v9 Branch)

So far, we have written a good structured Feedhenry App. A little more changes could make the app more pretty.

In the app, we have some DOM code (such as jQuery code or DHTML code ) written in controller. However, if the project is not small
and there are a lot of DOM manipulating, the controller code will get messy. In this case, we category those code 
using a JSON object with following structure:

		{
			viewName1:{
				domManipulate1:function(params){
					//implementation
				},
				domManipulate2:function(params){
					//implementation
				}
				....
			},
			viewName2:{
				domManipulate1:function(params){
					//implementation
				},
				domManipulate2:function(params){
					//implementation
				}
			}
			....
		} 
		
Controller will have access to this object and manipulate DOM using those methods.

The benefits of doing so would be:

* Clean controller code. No HTML literals appeard.
* Integrated dom manipulation code. This makes maintainence eaiser.
* Controller will be more focusing on logic rather than manipulating DOM to render UI.

In v9 branch, there is "domManipulate.js" file in ./app/views folder. The file contains all DOM manipulation code in controller in v8 branch. The code of the file will be like: 

		var domMan = {
			mainPage : {//view name
				getCredential : function() {//dom manipulating methods
					var username, pwd, usernameElement, passwordElement;
					//define variables
					usernameElement = document.getElementById("username");
					passwordElement = document.getElementById("password");
					username = usernameElement.value;
					pwd = passwordElement.value;
					return {
						username : username,
						pwd : pwd
					}
				}
			},
			logged : {
				setUserName : function(name) {
					document.getElementById("name").innerHTML = name;
				}
			},
			userList : {
				renderUserList : function(userListArr) {
					var arr=userListArr;
					for(var i = 0; i < arr.length; i++) {
						var user = arr[i];
						var html = "<li>{0}</li>";
						html = html.replace("{0}", user);
						getView("userList").find("#users").append(html);
					}
				},
				clearUserList:function(){
					getView("userList").find("#users").html("");
				}
			},
			map:{
				setStatus:function(status){
					mapView.find("#status").html(status);
				},
				setLatLon:function(lat,lon){
					mapView.find("#lat").text(lat);
					mapView.find("#long").text(lon);
				}
			}
		} 
		
