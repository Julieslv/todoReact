import React from 'react'

const ListItem = ({ what, id, deleteItem, complete, handleCheck }) => {
	return (
		<li className='checkbox'>
			<input type='checkbox' checked={complete} id={`checkbox_${id}`} onChange={() => handleCheck(id)} />
			<label htmlFor={`checkbox_${id}`}>{what}</label>
			<button className='btn-delete' key={id} onClick={() => deleteItem(id)} >Delete item</button>
		</li>
	)
}

export default ListItem
