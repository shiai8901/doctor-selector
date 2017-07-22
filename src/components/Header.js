import React from 'react';
import styles from '../../dist/styles.css'
import Filter from './Filter';

const Header = (props) => (
			<div className="header">
				<div className="container" >
					<Filter 
						specialtyList={props.specialtyList} 
						getDoctorsBySpecialty={props.getDoctorsBySpecialty} 
						updateArea={props.updateArea}
						getDoctorsByArea={props.getDoctorsByArea}
						rating={props.rating}
						getDoctorsByRating={props.getDoctorsByRating} />
				</div>
			</div>
			)
						


export default Header