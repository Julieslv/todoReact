import React from 'react'

const ListGroup = ({ listName }) => {
	return (
		// TODO: make the active state dynamic
		<div className='list-group active'>
			{listName}
		</div>
	)
}

export default ListGroup
