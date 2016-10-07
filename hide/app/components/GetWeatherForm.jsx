var React = require('react');

var GetWeatherForm = React.createClass ({
    onFormSubmit: function (e) {
        e.preventDefault();

        var update = {};
        var city = this.refs.city.value;

        if(city.length > 0){
            this.refs.city.value = '';
            update.city = city;
        }

        this.props.onNewData(update);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder="Enter city name" ref="city" /><br></br>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = GetWeatherForm;
