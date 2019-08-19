
import React, { Component } from 'react'
import './App.css';
import ListGroup from './components/lists/ListGroup'
import Profile from './components/Profile'
import List from './components/lists/List';
import PropTypes from 'prop-types';

class App extends Component {
	state = {
		userName: 'Julie Vaccalluzzo',
		listName: 'Team todo-list',
		listDate: 'Tues 12 December'
	}
	render() {
		return (
			<div className="grid container">
				<div>
					<Profile userName={this.state.userName} />
					<ListGroup listName={this.state.listName} />
				</div>
				<div>
					<List listName={this.state.listName} listDate={this.state.listDate} listToDo={this.state.listToDo} />
				</div>
			</div>
		)
	}
}

List.propTypes = {
	userName: PropTypes.string,
	listName: PropTypes.string.isRequired, //this should come from the array of list items
	listDate: PropTypes.string.isRequired,
}


export default App;
