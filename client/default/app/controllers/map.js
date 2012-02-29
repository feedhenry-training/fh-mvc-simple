var map = {
	pinCurrentLocation : function() {
		changeView("map");
		var mapView = getView("map");

		domMan.map.setStatus("Retriving your location");
		$fh.geo({
			interval : 0
		}, function(res) {
			domMan.map.setStatus("Loading map...");
			domMan.map.setLatLon(res.lat,res.lon);
			$fh.map({
				target : '#map_div',
				lat : res.lat,
				lon : res.lon,
				zoom : 13
			}, function(map) {
				domMan.map.setStatus("Done");
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
