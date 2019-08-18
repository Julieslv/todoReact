
import React, { Component } from 'react'
import './App.css';
import ListGroup from './components/lists/ListGroup'
import Profile from './components/Profile'
import List from './components/lists/List';

class App extends Component {
	state = {
		userName: 'Julie Vaccalluzzo',
		listName: 'Team todo-list',
		listDate: 'Tues 12 December',
		listToDo: ['Shortlist feature for MVP', 'Launch PPC campaign with new creative', 'Define audience breakdown with new data', 'Launch demo page for SEO analysis']
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

export default App;
