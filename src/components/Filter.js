import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import ReactStars from 'react-stars';

const Filter = (props) => {

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
      <form onSubmit={props.getDoctorsByArea} id="filter-form">
        <div className="filter-content">
          <Dropdown 
            options={props.specialtyList} 
            defaultOption={specialtyDefaultOption}
            filter="By Specialty" 
            action={props.getDoctorsBySpecialty} />
        </div>
        <div className="filter-content">
          <label className="form-label">By Area</label>
          <input className="filter-item" onChange={props.updateArea} />
        </div>
        <div className="filter-content">
          <label className="form-label">By Rating</label>
          <ReactStars       
            count={5}
            size={18}
            value={props.rating}
            half={false}
            onChange={props.getDoctorsByRating} />
        </div>  
      </form>
    </div>
  )
}

Filter.propTypes = {
  specialtyList: PropTypes.array,
  getDoctorsBySpecialty: PropTypes.func,
  updateArea: PropTypes.func,
  getDoctorsByArea: PropTypes.func,
  rating: PropTypes.number,
  getDoctorsByRating: PropTypes.func,
}

export default Filter

