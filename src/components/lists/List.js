import React from 'react'
import ListHeader from './ListHeader';

const List = ({ listName, listDate }) => {
	return (
		<div className='list'>
			<ListHeader listName={listName} listDate={listDate} />
			List of items
		</div>
	)
}

export default List
