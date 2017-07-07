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
            APPID: $api_key
        })
        .done(function( data ) {
            $temp = data.main.temp; // Response is in ºK
            $('#temperature').html(convertToFarenheit($temp));
            $('#city').text(data.name);
        });
})();

$('#switch').on('click', function() {
    if ($(this).hasClass('farenheit')) {
        $('#temperature').html(convertToCelsius($temp));
        $(this).removeClass('farenheit').addClass('celsius');
        console.log('C');
    }
    else {
        $('#temperature').html(convertToFarenheit($temp));
        $(this).removeClass('celsius').addClass('farenheit');
        console.log('F');
    }
});

function convertToFarenheit(kelvin) {
    return Math.floor(kelvin * (9/5) - 459.67) + " &deg;F";
}

function convertToCelsius(kelvin) {
    return Math.floor(kelvin - 273.15) + " &deg;C";
}