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
};
