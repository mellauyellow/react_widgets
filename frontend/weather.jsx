import React from 'react';
class Weather extends React.Component {
  constructor(){
    super();
    this.state = {temp: null};
    this.weatherRequest = this.weatherRequest.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.weatherRequest);
  }

  weatherRequest(position) {
    let coords = [position.coords.latitude, position.coords.longitude];
    let url =  `http://api.openweathermap.org/data/2.5/weather?lat=${coords[0]} &lon=${coords[1]}&appid=5f686178cf5a8befa9c3323296d7d62e`;


    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let resp = JSON.parse(request.response);
        let temp = ((resp.main.temp - 273.15) * (1.8) + 32) ;
        this.setState({temp});
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }


  render(){
    return(
      <p>{this.state.temp}</p>
    );

  }

}
 export default Weather;
