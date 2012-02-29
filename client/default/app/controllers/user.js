var user={
	showUserList:function(){
		domMan.userList.clearUserList();
		users.getUserList(function(arr){
			domMan.userList.renderUserList(arr);
			changeView("userList");
		});
	},
	back:function(){
		changeView("logged");
	}
};
