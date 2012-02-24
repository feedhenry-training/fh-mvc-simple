$(document).ready(function() {
	importViews(function() {
		changeView("mainPage");
		var mainPageView = getView("mainPage");
		mainPageView.find("#info").html("Loading User Data....");
		users.load(function() {
			mainPageView.find("#info").html("User Data Loaded!");
			mainPageView.find("#loginBtn").removeAttr("disabled");
			mainPageView.find("#loginBtn").button("enable");
		});
	});
});
