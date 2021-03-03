import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
    
    renderWeather (cityData) {
        const name= cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        console.log(lon,lat)
        // const lat = cityData.city.coords.lat;

        console.log(temps);

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color='orange' units='k' /></td>
                <td><Chart data={pressure} color='green' units='hpa' /></td>
                <td><Chart data={humidities} color='black' units='%'/></td>

            </tr>
        )
    }

    render () {
        console.log(this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Temperature (K)
                        </th>
                        <th>
                            Pressure (hPa)
                        </th>
                        <th>
                            Huminity (%)
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>

            </table>
        )
    }
}

function mapStateToProps ({weather}) {
    console.log(weather);
    return {weather};

}

export default connect (mapStateToProps) (WeatherList);