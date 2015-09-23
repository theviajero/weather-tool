//options parameter for navigator
var options = {
  enableHighAccuracy: true,
  //timeout: 5000,
  maximumAge: 0
};
//Function for the navigator parameter success
function success(pos) {
  var crd = pos.coords;
  var lat = crd.latitude;
  var lon = crd.longitude;
  var acc = crd.accuracy;
  
  console.log("La latitud es: "+lat);
  console.log("La longitud es: "+lon);
  
  //Request to the api of openweathermap to get the actual state of the weather
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID=24ac12f1c21909e18cf067897c054255&units=metric', function (response) {
        for (var i = 0; i < response.length; i++) {
            var data = response[i].data;
            if (data.name.length > 3) {
                models.push(data);
            }

        }
		//temperature in Celcius
		var tempC = response.main.temp;
		//temperature in Fahrenheit
		var tempF = tempC * 9/5 + 32;
		console.log("La temperatura en Celcius es: " + tempC);
		console.log("La temperatura en Fahrenheit es: "	+ tempF);
		b(tempc);
     });
  var function b()
}
//Function error for the navigator parameter error 
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


//navigator
navigator.geolocation.getCurrentPosition(success, error, options);
