import React from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends React.Component {

	render() {
		let options = [];
		if (this.props.options) {
			options = this.props.options.map((option) => (<option key={option.id} id={options.id}
																	value={option.name} >{option.name}</option>));
		}
		let context = this;
		console.log(this.props)
		return (
			<div>
				<label htmlFor={this.props.filter}>{this.props.filter}</label><div className="arrow"><i className="down"></i></div>
				
				<select onChange={this.props.action}>
					<option id={this.props.defaultOption.id} value={this.props.defaultOption.value}>{this.props.defaultOption.name}</option>
					<option disabled>--</option>
					{options}
				</select>
			</div>
		)
	}
}

export default Dropdown