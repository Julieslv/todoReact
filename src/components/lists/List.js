import React, { Component } from 'react'
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import PropTypes from 'prop-types'

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 1566146386080,
					what: 'Shortlist feature for MVP',
					complete: false,
					listGroup: 'Team todo-list'
				},
				{
					id: 1566156386080,
					what: 'Launch demo page for SEO analysis',
					complete: false,
					listGroup: 'Team todo-list'
				},
				{
					id: 1566166386080,
					what: 'Define audience breakdown with new data',
					complete: false,
					listGroup: 'Team todo-list'
				},
				{
					id: 1566176386080,
					what: 'Launch PPC campaign with new creative',
					complete: false,
					listGroup: 'Team todo-list'
				}
			],
			currentItem: {
				id: '',
				what: '',
				complete: false,
				listGroup: 'Team todo-list'
			}
		};
	}

	deleteItem = id => {
		console.info(`deleteItem : ${id}`)
		const filteredItems = this.state.items.filter(item => {
			return item.id !== id
		})
		this.setState({
			items: filteredItems,
		})
	}
	handleInput = event => {
		const itemText = event.target.value
		const currentItem = { what: itemText, id: Date.now() }
		this.setState({
			currentItem
		})
	}

	addItem = event => {
		event.preventDefault()
		const newItem = this.state.currentItem
		if (newItem.text !== '') {
			const items = [...this.state.items, newItem]
			this.setState({
				items: items,
				currentItem: { what: '', id: '' },
			})
			console.log(this.state.currentItem.what);
		}
	}

	render() {
		return (
			<div className='list'>
				<ListHeader listName={this.props.listName} listDate={this.props.listDate} />
				<ul className='checklist'>
					{this.state.items.map(item => {
						return (
							< ListItem what={item.what} key={item.id} id={item.id} deleteItem={this.deleteItem} />
						)
					})}
				</ul>
				<div className='add-item'>
					<form onSubmit={this.addItem}>
						<button className='btn-add'>Add a todo</button>
						<input
							className='input-item'
							type='text'
							placeholder='Add a todo'
							value={this.state.currentItem.what}
							onChange={this.handleInput} />
					</form>
				</div>
			</div>
		)
	}
}

List.propTypes = {
	items: PropTypes.array,
	currentItem: PropTypes.string
}

export default List
