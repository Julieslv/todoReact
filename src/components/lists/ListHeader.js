import React from 'react'

const ListHeader = ({ listName, listDate }) => {
	return (
		<div className='list-header'>
			<h2>{listName}</h2>
			<p>{listDate}</p>
		</div>
	)
}

export default ListHeader

