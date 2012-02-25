# Google Map (v6 Branch)

##Outline

* Pin current location on google map.

### Step1 -- Create a map controller

Create map.js file in ./app/controllers folder

Link it in index.html

### Step 2 -- add user action in controller: pin current location

add following content to map.js

		var map = {
			pinCurrentLocation : function() {
				changeView("map");
				var mapView = getView("map");
		
				mapView.find("#status").html("Retriving your location");
				$fh.geo({
					interval : 0
				}, function(res) {
					mapView.find("#status").html("Loading map...");
					mapView.find("#lat").text(res.lat);
					mapView.find("#long").text(res.lon);
					$fh.map({
						target : '#map_div',
						lat : res.lat,
						lon : res.lon,
						zoom : 13
					}, function(map) {
						mapView.find("#status").html("Done");
						var myLatLng=new google.maps.LatLng(res.lat,res.lon);
						var marker = new google.maps.Marker({
							position : myLatLng,
							title : "You are here!"
						});
		
						// To add the marker to the map, call setMap();
						marker.setMap(map.map);
					}, function(msg) {
						console.log(msg);
					});
				})
			},
			back : function() {
				changeView("logged");
			}
		};


The pinCurrentLocation method will locate current location first and mark it on google map. The controller updates view.

### Step 3 -- add map view 

Create map.html in ./app/views folder and add a map placeholder in index.html

put following content to map.html

		<h1>Map</h1>
		<div id="map_div"></div>
		<p>
			Your Location:<span id="lat"></span>, <span id="long"></span>
		</p>
		<p>
			Status:<span id="status"></span>
		</p>
		<button id="mapback" >
			Back
		</button>
		<input type="button"  value="logout" class="logout" />


