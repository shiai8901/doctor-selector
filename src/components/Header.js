import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../dist/styles.css'
import Filter from './Filter';

const Header = ({ 
  specialtyList,
  getDoctorsBySpecialty,
  updateArea,
  getDoctorsByArea,
  rating,
  getDoctorsByRating
}) => (
  <div className="header">
    <div className="container" >
      <Filter 
        specialtyList={specialtyList} 
        getDoctorsBySpecialty={getDoctorsBySpecialty} 
        updateArea={updateArea}
        getDoctorsByArea={getDoctorsByArea}
        rating={rating}
        getDoctorsByRating={getDoctorsByRating} />
    </div>
  </div>
)
            
Header.propTypes = {
  specialtyList: PropTypes.array,
  getDoctorsBySpecialty: PropTypes.func,
  updateArea: PropTypes.func,
  getDoctorsByArea: PropTypes.func,
  rating: PropTypes.number,
  getDoctorsByRating: PropTypes.func,
}

export default Header