import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({options, defaultOption, filter, action }) => {
  let slectionOptions = options.map((option) => (<option key={option.id} 
                                                        id={options.id}
                                                        value={option.name} >{option.name}</option>));

  return (
    <div className="dropdown">
      <label className="form-label" htmlFor={filter}>{filter}</label>     
      <select className="filter-item" onChange={action}>
        <option id={defaultOption.id} value={defaultOption.value}>{defaultOption.name}</option>
        <option disabled>--</option>
        {slectionOptions}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  filter: PropTypes.string,
  action: PropTypes.func
}

export default Dropdown