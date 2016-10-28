
import MY_KEYS from 'MY_KEYS';

const DARK_SKY_URL = 'https://api.darksky.net/forecast/' + MY_KEYS.darkSkyKey + '/42.3601,-71.0589'

const darkSkyApi = {
  getWeather: function(){
    return $.ajax({
      type: 'get',
      dataType: "jsonp",
      url: DARK_SKY_URL,
    }).done(function(response){
      return response;
      console.log("HERE'S THE WEATHER", response);
    }).fail(function(response){
      console.log("it failed");
      console.log(response);
    });
  }

}

export default darkSkyApi;
