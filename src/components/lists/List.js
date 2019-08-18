import React from 'react'
import ListHeader from './ListHeader';
import ListCheck from './ListItem';

// const List = (props) => {
const List = ({ listName, listDate, listToDo }) => {
	return (
		<div className='list'>
			<ListHeader listName={listName} listDate={listDate} />
			<ul className='checklist'>
				{listToDo.map((listItem, index) => {
					let itemKey = index + 1
					return (
						/* using the key like this is not ideal */
						< ListCheck listItem={listItem} key={itemKey} itemKey={itemKey} />
					)
				})}
			</ul>
			<div className='add-item'>
				<button className='btn-add'>Add a todo</button>
				<input className='input-item' type='text' placeholder='Add a todo' />
			</div>
		</div>
	)
}

export default List
