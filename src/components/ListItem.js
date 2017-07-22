import React from 'react';
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import styles from '../../dist/styles.css'

class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let categories = [];
		if (this.props.info.categories) {
			categories = this.props.info.categories.map((category) => (<a onClick={this.props.updateSpecialty} href="#" key={category.alias}>{category.title}   </a>))
		}

		let address = "";
		if (this.props.info.location.display_address) {
			address = this.props.info.location.display_address.map((line) => (<p key={line}>{line}</p>));
		}

		return (
			<div className="list-item">
				<div className="list-photo-box">
						<img className="list-avatar" alt={this.props.info.name} src={this.props.info.image_url} />
				</div>
				<div className="list-story">
					<div className="list-story-half">
						<h3 className="list-title" onClick={this.props.setSelectedDoctor}>{this.props.info.name}</h3>
						<div className="list-rating">
							<ReactStars count={5} value={this.props.info.rating} edit={false} />
							<span>{this.props.info.review_count} reviews</span>
						</div>
						<div className="list-category">{categories}</div>
					</div>
					<div className="list-story-half">
					<address className="list-address">
					{address}
					</address>
					</div>
				</div>
			</div>
			)
	}
}

export default ListItem