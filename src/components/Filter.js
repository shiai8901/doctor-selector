import React from 'react';
import ReactDOM from 'react-dom';
import http from 'http';
import Dropdown from './Dropdown';

class Filter extends React.Component {
	constructor (props) {
		super(props);
	}



	componentDidMount() {

	}

	render() {

		console.log("FILTER: ",this.props);
		let specialtyDefaultOption = {
			id: 0,
			value: "doctor",
			name: "All doctors"
		}

		return (
			<div>
				<form>
					<Dropdown 
						options={this.props.specialtyList} 
						defaultOption={specialtyDefaultOption}
						filter="Specialty" 
						action={this.props.getDoctorsBySpecialty} />

				</form>
			</div>
		)
	}
}

Filter.defaultProps = {

}

export default Filter

