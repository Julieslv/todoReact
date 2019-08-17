
import React, { Component } from 'react'
import './App.css';
import ListGroup from './components/ListGroup'
import Profile from './components/Profile'



class App extends Component {
	state = {
		userName: 'Julie Vaccalluzzo'
	}
	render() {
		return (
			<div className="grid container">
				<div>
					<Profile userName={this.state.userName} />
					<ListGroup />
				</div>
				<div>
					<ListGroup />

				</div>
			</div>
		)
	}
}

export default App;
