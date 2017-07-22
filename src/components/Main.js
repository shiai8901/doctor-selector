import React from 'react';
import ListView from './ListView';
import styles from '../../dist/styles.css'
import DetailView from './DetailView'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (!this.props.selectedDoctor) {
			return (
				<div className="main">
					<ListView 
						list={this.props.doctorList} 
						setSelectedDoctor={this.props.setSelectedDoctor}
						updateSpecialty={this.props.updateSpecialty} />
				</div>
			)
		}	
		return (
			<div className="main">
				<DetailView 
					selectedDoctor={this.props.selectedDoctor} />
				<div className="main-devider">
					<h3>Similar doctors </h3>
				</div>
				<ListView 
					list={this.props.doctorList} 
					setSelectedDoctor={this.props.setSelectedDoctor}
					updateSpecialty={this.props.updateSpecialty} />
			</div>
			)
	}
}
	

export default Main

					
					