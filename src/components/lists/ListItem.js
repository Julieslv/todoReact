import React from 'react'

const ListItem = (props) => {
	console.log(props.index)
	return (
		<li className='checkbox'>
			<input type='checkbox' id='checkbox_1' />
			<label htmlFor='checkbox_1'>{props.listItem}</label>
			<button className='btn-delete'>Delete item</button>
		</li>
	)
}

export default ListItem
