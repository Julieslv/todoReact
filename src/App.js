
import React, { Component } from 'react'
import './App.css';
import ListGroup from './components/lists/ListGroup'
import Profile from './components/Profile'
import List from './components/lists/List';

class App extends Component {
	state = {
		userName: 'Julie Vaccalluzzo',
		listName: 'Team todo-list'
	}
	render() {
		return (
			<div className="grid container">
				<div>
					<Profile userName={this.state.userName} />
					<ListGroup listName={this.state.listName} />
				</div>
				<div>
					<List />
				</div>
			</div>
		)
	}
}

export default App;
