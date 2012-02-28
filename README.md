# Preparation (v1 Branch)

To start with a Feedhenry App, simply just follow steps:

Create an empty folder to contain code base.

Create project structure (directories and files) as following graphic:

<img src="https://github.com/feedhenry/fh-mvc-simple/raw/v1/docs/structure.png"/>


* basic.css includs CSS definitions.
* jquery.js contains the latest jQuery library (for more information about jQuery please checkout: http://jquery.com)

put following code to viewutil.js

			
			/**
			 * 	 hide last view (div) and Load next view(div). View is specified by id.
			 */
			var lastView = null;
			function changeView(viewId) {
				// get next view through page id
				var nextView = getView(viewId);
				if(nextView.length === 0) {
					console.log("Could not find view with ID:" + viewId);
					return;
				}
				if(lastView != null) {
					//hide last view
					lastView.removeClass("active");
				}
			
				// display next view
				nextView.addClass("active");
				// view has been loaded
				lastView = nextView;
			}
			
			/**
			 *  get view with specified id
			 * 
			 */
			function getView(viewId){
				return $("#"+viewId);
			}
			
			/**
			 * import views html content to DOM.
			 */
			function importViews(callback){
				var pages=$(".page");
				var viewFolder="./app/views/";
				var count=pages.length;
				pages.each(function(){
					var page=$(this);
					var path=viewFolder+page.attr("id")+".html";
					$.ajax({
						url:path,
						dataType:"text",
						success:function(res){
							console.log(page.attr("id"));
							$("#"+page.attr("id")).html(res);
							count--;
							if (count===0 && callback){
								callback();
							}
						},
						error:function(){
							debugger;
						}
					});
				});
			}
			
Above code does some repeated and tedious view manipulation work.			
			
Finally, write some basic HTML code to index.html.

		<!DOCTYPE HTML>
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="./css/basic.css" />
				<script type="text/javascript" src="./js/jquery.js"></script>
				<script type="text/javascript" src="./js/viewutil.js"></script>
			</head>
			<body>
			</body>
		</html>

			


Ok. Fingers crossed. Let's proceed to <a href="https://github.com/feedhenry/fh-mvc-simple/tree/v2">v2 branch</a>.

