import React from 'react'

const ListItem = ({ what, id, deleteItem }) => {
	return (
		<li className='checkbox'>
			<input type='checkbox' id={`checkbox_${id}`} />
			<label htmlFor={`checkbox_${id}`}>{what}</label>
			<button className='btn-delete' key={id} onClick={() => deleteItem(id)} >Delete item</button>
		</li>
	)
}

export default ListItem
