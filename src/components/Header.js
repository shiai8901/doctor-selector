import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../dist/styles.css'
import Filter from './Filter';

const Header = (props) => (
			<div className="header">
				<div className="container">
					<Filter specialtyList={props.specialtyList} getDoctorsBySpecialty={props.getDoctorsBySpecialty} />
				</div>
			</div>
			)



export default Header