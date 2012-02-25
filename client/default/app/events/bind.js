function bindEvents() {
	$("#loginBtn").bind("click", function() {
		userAuth.login();
	});

	$(".logout").bind("click", function() {
		userAuth.logout();
	});
	
	$("#pinCurrentLocation").bind("click", function() {
		map.pinCurrentLocation();
	});

	$("#mapback").bind("click", function() {
		map.back();
	});
}