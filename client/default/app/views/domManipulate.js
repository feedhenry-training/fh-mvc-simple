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