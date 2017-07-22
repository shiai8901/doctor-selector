import React from 'react';
import http from 'http';
import Dropdown from './Dropdown';
import ReactStars from 'react-stars';

class Filter extends React.Component {

	render() {
		const specialtyDefaultOption = {
			id: 0,
			value: "doctor",
			name: "All doctors"
		}

		const ratingDefaultOption = {
			id: 0,
			value: "",
			name: "All ratings"
		}


		return (
			<div>
				<form onSubmit={this.props.getDoctorsByArea} id="filter-form">
					<div className="filter-content">
						<Dropdown 
							options={this.props.specialtyList} 
							defaultOption={specialtyDefaultOption}
							filter="By Specialty" 
							action={this.props.getDoctorsBySpecialty} />
					</div>
					<div className="filter-content">
						<label className="form-label">By Area</label>
						<input className="filter-item" onChange={this.props.updateArea} />
					</div>
					<div className="filter-content">
						<label className="form-label">By Rating</label>
						<ReactStars				
							count={5}
							size={18}
							value={this.props.rating}
							half={false}
							onChange={this.props.getDoctorsByRating} />
					</div>	
				</form>
			</div>
		)
	}
}

Filter.defaultProps = {

}

export default Filter

