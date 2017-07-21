import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';
import styles from '../../dist/styles.css'

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<div className="main">
				Main
				<ListView list={this.props.doctorList} />
			</div>
		)
	}
}
	

export default Main