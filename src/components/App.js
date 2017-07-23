import React from 'react';
import axios from 'axios';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialtyList: [],
      allDoctors: [],
      selectSpecialty: "doctor",
      rating: 0,
      area: "san francisco, ca",
      selectedDoctor: "",
      selectedDoctorDetailInfo: null
    }
    this.getSpecialtyList = this.getSpecialtyList.bind(this);
    this.getDoctorsBySpecialty = this.getDoctorsBySpecialty.bind(this);
    this.getDoctorsByRating = this.getDoctorsByRating.bind(this);
    this.updateSpecialty = this.updateSpecialty.bind(this);
    this.updateArea = this.updateArea.bind(this);
    this.getDoctorsByArea = this.getDoctorsByArea.bind(this);
    this.getDoctorsFromServer = this.getDoctorsFromServer.bind(this);
    this.setSelectedDoctor = this.setSelectedDoctor.bind(this);
  }

  getSpecialtyList() {
    axios.get('/api/specialtyList')
    .then((response) => {
      this.setState({specialtyList: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getDoctorsBySpecialty(e) {

    if (this.state.selectedDoctor) {
      this.setState({
        selectedDoctor: ""
      });
    }
    
    let specialty = e.target.value;
    const cb = (data) => {
      this.setState({
        allDoctors: data,
        selectSpecialty: specialty
      });
    }
    this.getDoctorsFromServer(specialty, this.state.area, this.state.rating, cb);
  }

  getDoctorsByRating(newRating) {

    if (this.state.selectedDoctor) {
      this.setState({
        selectedDoctor: ""
      });
    }
    
    const cb = (data) => {
      this.setState({
        allDoctors: data,
        rating: newRating
      });
    }
    this.getDoctorsFromServer(this.state.selectSpecialty, this.state.area, newRating, cb);
  }

  updateArea(e) {

    if (this.state.selectedDoctor) {
      this.setState({
        selectedDoctor: ""
      });
    }
    
    this.setState({
      area: e.target.value
    });
    console.log(e.target.value);
  }

  getDoctorsByArea(e) {
    e.preventDefault();

    if (this.state.selectedDoctor) {
      this.setState({
        selectedDoctor: ""
      });
    }

    const cb = (data) => {
      this.setState({
        allDoctors: data
      });
    }
    this.getDoctorsFromServer(this.state.selectSpecialty, this.state.area, this.state.rating, cb);
  }

  updateSpecialty(e) {
    let specialty = e.target.text;
    const cb = (data) => {
      this.setState({
        allDoctors: data,
        selectSpecialty: specialty
      });
    }
    this.getDoctorsFromServer(specialty, this.state.area, this.state.rating, cb);
  }

  getDoctorsFromServer(specialtyName, area, rating, cb) {
    axios.get('/api/findDoctors/'+ specialtyName + "/" + area + "/" + rating)
    .then((response) => {
      cb(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  setSelectedDoctor(e) {
    console.log(e.target.innerHTML);
    const name = e.target.innerHTML;
    const doctor = this.state.allDoctors.filter((doctor) => {
      return doctor.name === name;
    });
console.log(doctor[0].categories[0].title, doctor[0].location.city, doctor[0].rating);
    const cb = (data) => {
      this.setState({
        allDoctors: data,
        selectedDoctor: doctor[0]
      });
    }
    this.getDoctorsFromServer(doctor[0].categories[0].title, doctor[0].location.city, doctor[0].rating, cb);
  }

  componentDidMount() {
    this.getSpecialtyList();
    this.getDoctorsFromServer(this.state.selectSpecialty, this.state.area, this.state.rating, (data)=>{this.setState({allDoctors: data})});
  }

  render() {
    return (
      <div>
        <Header specialtyList={this.state.specialtyList} 
          getDoctorsBySpecialty={this.getDoctorsBySpecialty} 
          updateArea={this.updateArea}
          getDoctorsByArea={this.getDoctorsByArea}
          ating={this.state.rating}
          getDoctorsByRating={this.getDoctorsByRating} />
        <Main 
          selectedDoctor={this.state.selectedDoctor}
          setSelectedDoctor={this.setSelectedDoctor}
          doctorList={this.state.allDoctors} 
          updateSpecialty={this.updateSpecialty} />
        <Footer />
      </div>
    )   
  }
  
}

// App.propTypes = {
//   specialtyList: React.PropTypes.array
// };

// App.defaultProps = {
//   specialtyList: []
// };


export default App;