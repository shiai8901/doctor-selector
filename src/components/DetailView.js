import React from 'react';
import ReactStars from 'react-stars'
import GoogleMapView from './GoogleMapView'
import styles from '../../dist/styles.css'

class DetailView extends React.Component {

	constructor(props) {
		super(props);
		this.getMapView = this.getMapView.bind(this);
	}

	getMapView() {

	}

	render() {
	console.log(this.props)
	let categories = [];
	if (this.props.selectedDoctor.categories) {
		categories = this.props.selectedDoctor.categories.map((category) => (<a onClick={this.props.updateSpecialty} href="#" key={category.alias}>{category.title}   </a>))
	}

	let address = "";
	if (this.props.selectedDoctor.location.display_address) {
		address = this.props.selectedDoctor.location.display_address.map((line) => (<p key={line}>{line}</p>));
	}

	return (
		<div className="detail">
			<div className="detail-header">
				<div className="detail-title">
					<h2>{this.props.selectedDoctor.name}</h2>
				</div>
				<div className="detail-rating">
					<ReactStars 
						count={5} 
						value={this.props.selectedDoctor.rating} 
						edit={false} />
					<span>{this.props.selectedDoctor.review_count} reviews</span>
				</div>
				<div className="detail-categories">
					{categories}
				</div>
			</div>
			<div className="detail-body">
				<div className="detail-location-section">
					<div className="detail-map">
					<GoogleMapView coordinates={this.props.selectedDoctor.coordinates}/>
					</div>
					<div className="detail-address">
						<span className="detail-label">Address: </span>
						{address}
						</div>
					<div className="detail-phone">
					<span className="detail-label">Phone: </span>{this.props.selectedDoctor.display_phone}
					</div>
				</div>
				<div className="detail-bio">
					<div className="photo-box">
						<img className="detail-avatar" alt={this.props.selectedDoctor.name} src={this.props.selectedDoctor.image_url} />
					</div>
				</div>
			</div>
		</div>
	)	
	}
}
export default DetailView