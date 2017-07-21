import React from 'react';
import ReactDOM from 'react-dom';
import http from 'http';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			specialtyList: [],
			allDoctors: [],
			selectSpecialty: "doctor"
		}
		this.getSpecialtyList = this.getSpecialtyList.bind(this);
		this.getAllDoctors = this.getAllDoctors.bind(this);
		this.getDoctorsBySpecialty = this.getDoctorsBySpecialty.bind(this);
	}

	getSpecialtyList() {
		const option = {
			path: '/api/specialtyList',
			host: "localhost",
			port: 8080,
		};

		const req = http.request(option, (res) => {
			let data = "";
			res.on('data', (d) => {
				data += d;
			})
			res.on('end', () => {
				data = JSON.parse(data);
				this.setState({specialtyList: data});
			});
		});
		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	getAllDoctors() {
		const option = {
			path: '/api/',
			host: "localhost",
			port: 8080,
		};

		const req = http.request(option, (res) => {
			let data = "";
			res.on('data', (d) => {
				data += d;
			})
			res.on('end', () => {
				data = JSON.parse(data);
				this.setState({allDoctors: data});
			});
		});
		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	getDoctorsBySpecialty(e) {
		console.log(e.target.value);
		let specialty = e.target.value;
		const option = {
			path: '/api/specialty/' + specialty,
			host: "localhost",
			port: 8080,
		};

		const req = http.request(option, (res) => {
			let data = "";
			res.on('data', (d) => {
				data += d;
			})
			res.on('end', () => {
				data = JSON.parse(data);
				console.log(data);
				this.setState({
					allDoctors: data,
					selectSpecialty: specialty
				});
			});
		});
		req.on('error', (e) => {
			console.error(e);
		});
		req.end();
	}

	componentDidMount() {
		this.getSpecialtyList();
		this.getAllDoctors();
		// console.log(this.state);
	}

	render() {
		return (
			<div>
				<Header specialtyList={this.state.specialtyList} 
								getDoctorsBySpecialty={this.getDoctorsBySpecialty} />
				<Main doctorList={this.state.allDoctors} />
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