var users=require("users.js");


function getUsers(params, callback) {
	callback(null, {
		data : users
	});
}

function validateUser(param, callback) {
	var name = param.name;
	var pwd = param.pwd;
	var res=null;
	for(var i = 0; i < users.length; i++) {
		var user = users[i];
		if(user.username === name && user.password === pwd) {
			res= {
				res : "valid"
			};
		}
	}
	if (res==null){
			res= {
				res : "invalid"
			};
	}
	
	callback(null,res);
}

module.exports = {
	getUsers : getUsers,
	validateUser : validateUser
}