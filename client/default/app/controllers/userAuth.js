var userAuth = {
	login : function() {
		if(users == undefined) {
			return;
		}
		var username,pwd;
		var credential=domMan.mainPage.getCredential();
		username=credential.username;
		pwd=credential.pwd;
		users.userValidate(username, pwd, function(res) {
			if(res === true) {
				domMan.logged.setUserName(username);
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