var React = require('react');
var GetWeatherForm = require('GetWeatherForm');
var CityWeather = require('CityWeather');

var Weather = React.createClass({
    getDefaultProps: function () {
        return {
            city: 'Hong Kong'
        };
    },
    getInitialState: function () {
        return {
            city: this.props.city
        };
    },
    handleNewData: function (update) {
        this.setState(update);
    },
    render: function () {
        var city = this.state.city;
        return (
            <div>
                <GetWeatherForm onNewData={this.handleNewData} />
                <CityWeather city={city} />
            </div>
        );
    }
});

module.exports = Weather;
