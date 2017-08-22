

// init of app
getLocation();

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else {
		alert("Geolocation not supported in this broswer!");
	}
}

function showPosition(pos) {
	var lat = pos.coords.latitude;
	var lon = pos.coords.longitude;
	$.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon, function(data) {
		console.log();
		$("#degree").html(Math.floor((data.main.temp)*(9/5) + 32)+ " F");
		$("#city").html(data.name);
	 	$("#icon").html("<img src='" + data.weather[0].icon + "'>")
		
		
	})
}