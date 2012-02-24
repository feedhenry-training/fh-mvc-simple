function bindEvents(){
	$("#loginBtn").bind("click",function(){
		userAuth.login();
	});
	
	$("#pinCurrentLocation").bind("click",function(){
		map.pinCurrentLocation();
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
	$("#getUserList").bind("click",function(){
		user.showUserList();
	});
	$("#mapback").bind("click",function(){
		map.back();
	});
	$("#userBack").bind("click",function(){
		user.back();
	});
}

$(document).ready(function(){
	bindEvents();
});
