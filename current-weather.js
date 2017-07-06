/**
 * Created by brentdanley on 7/6/17.
 */

$city = "4977222"; // Saco
$api_key = "f98fd64b6cc0085c37e57e223bb4fb6f"; // Brent Open Weather Map API key
$temp = "";

(function() {
    var OpenWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
    $.getJSON( OpenWeatherAPI, {
            id: $city,
            APPID: $api_key,
            format: "json"
        })
        .done(function( data ) {
            $temp = data.main.temp; // Response is in ºK
            $('#temperature').html(convertToFarenheit($temp));
            $('#city').text(data.name);
        });
})();

$('#to-celsius').on('click', function() {
    $('#temperature').html(convertToCelsius($temp));
});

$('#to-farenheit').on('click', function() {
    $('#temperature').html(convertToFarenheit($temp));
});

function convertToFarenheit(kelvin) {
    return Math.floor(kelvin * (9/5) - 459.67) + " &deg;F";
}

function convertToCelsius(kelvin) {
    return Math.floor(kelvin - 273.15) + " &deg;C";
}