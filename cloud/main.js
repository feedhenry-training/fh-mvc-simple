function getUsers() {
	return {
		data : users
	};
}

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