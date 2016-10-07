var React = require('react');

var WeatherMessage = ({location, temp}) => {
    // var {location, temp} = props;
    return (
      <h3>It's {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;
