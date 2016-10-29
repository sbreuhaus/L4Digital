
import MY_KEYS from 'MY_KEYS';

const DARK_SKY_URL = 'https://api.darksky.net/forecast/' + MY_KEYS.darkSkyKey;

const darkSkyApi = {
  getWeather: function(lat, lng){
    let url = `${DARK_SKY_URL}/${lat},${lng}`
    return $.ajax({
      type: 'get',
      dataType: "jsonp",
      url: url,
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
