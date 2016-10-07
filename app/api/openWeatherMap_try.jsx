var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ccfa52b0c4e8498d6d3fecde9768f856&units=imperial'

module.exports = {
    getTemp: function (location) {
        var encodeLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

        axios.get(requestUrl).then(function (res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (res){
            throw new Error(res.data.message);
        });
    }
}
