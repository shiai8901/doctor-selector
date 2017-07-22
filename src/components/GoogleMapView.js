import React from 'react';
import scriptLoader from 'react-async-script-loader'

import styles from '../../dist/styles.css'

class GoogleMapView extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.initMap = this.initMap.bind(this);
	// }	

	// componentDidMount() {
	// 	this.initMap();
	// 	console.log(this.props)
	// }
	// initMap() {
	// 	var uluru = {
	// 		lat: this.props.coordinates.latitude, 
	// 		lng: this.props.coordinates.longitude
	// 	};
	// 	var map = new google.maps.Map(this.refs.map, {
	// 		zoom: 4,
	// 		center: uluru
	// 	});
	// 	var marker = new google.maps.Marker({
	// 		position: uluru,
	// 		map: map
	// 	});
	// }

	render() {
		return (
			<div ref="map">
				<div>Loading google map</div>
			</div>
			)
	}
}

export default GoogleMapView

