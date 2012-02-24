function bindEvents(){
	$("#loginBtn").bind("click",function(){
		userAuth.login();
	});
	
	$(".logout").bind("click",function(){
		userAuth.logout();
	});
}

