var React = require('react');

var CityWeather = React.createClass ({
    render: function () {
        var city = this.props.city;
        return (
            <div>
                <h2>{city}</h2>
            </div>
        );
    }
});

module.exports = CityWeather;
