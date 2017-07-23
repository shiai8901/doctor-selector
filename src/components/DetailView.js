import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapView from './GoogleMapView'
import ReactStars from 'react-stars'
import styles from '../../dist/styles.css'

const DetailView = ({ selectedDoctor, updateSpecialty }) => {

  let categories = [];
  if (selectedDoctor.categories) {
    categories = selectedDoctor.categories.map((category) => (<a href="#" 
                                                                  onClick={updateSpecialty} 
                                                                  key={category.alias}>{category.title}</a>))
  }

  let address = "";
  if (selectedDoctor.location.display_address) {
    address = selectedDoctor.location.display_address.map((line) => (<p key={line}>{line}</p>));
  }

  return (
    <div className="detail">
      <div className="detail-header">
        <div className="detail-title">
          <h2>{selectedDoctor.name}</h2>
        </div>
        <div className="detail-rating">
          <ReactStars 
            count={5} 
            value={selectedDoctor.rating} 
            edit={false} />
          <span>{selectedDoctor.review_count} reviews</span>
        </div>
        <div className="detail-categories">
          {categories}
        </div>
      </div>
      <div className="detail-body">
        <div className="detail-location-section">
          <div className="detail-map">
          <GoogleMapView coordinates={selectedDoctor.coordinates}/>
          </div>
          <div className="detail-address">
            <span className="detail-label">Address: </span>
            {address}
            </div>
          <div className="detail-phone">
          <span className="detail-label">Phone: </span>{selectedDoctor.display_phone}
          </div>
        </div>
        <div className="detail-bio">
          <div className="photo-box">
            <img className="detail-avatar" alt={selectedDoctor.name} src={selectedDoctor.image_url} />
          </div>
        </div>
      </div>
    </div>
  ) 
}

DetailView.propTypes = {
  selectedDoctor: PropTypes.object,
  updateSpecialty: PropTypes.func
}

export default DetailView