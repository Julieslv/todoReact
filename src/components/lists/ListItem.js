import React from 'react'

const ListItem = ({ listItem, itemKey }) => {
	return (
		<li className='checkbox'>
			<input type='checkbox' id={`checkbox_${itemKey}`} />
			<label htmlFor={`checkbox_${itemKey}`}>{listItem}</label>
			<button className='btn-delete'>Delete item</button>
		</li>
	)
}

export default ListItem
