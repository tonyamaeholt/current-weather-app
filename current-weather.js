/**
 * Created by brentdanley on 7/6/17.
 */

$city = "4977222"; // Saco
$api_key = "f98fd64b6cc0085c37e57e223bb4fb6f"; // Brent Open Weather Map API key
(function() {
    var OpenWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
    $.getJSON( OpenWeatherAPI, {
            id: $city,
            APPID: $api_key,
            format: "json"
        })
        .done(function( data ) {
            $('#temperature').html(Math.floor(data.main.temp * (9/5) - 459.67) + " &deg;F"); // Response is in ºK
        });
})();