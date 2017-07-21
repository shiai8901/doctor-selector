import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';
import styles from '../../dist/styles.css'

class ListView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let items = [];
		if (this.props.list) {
			items = this.props.list.map(item => (<ListItem key={item.id} info={item} />));
		}
		return (
			<div className="list">
			{items}
			</div>
			)
	}
}

export default ListView