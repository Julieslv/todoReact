import React from 'react'
import ListHeader from './ListHeader';

const List = ({ listName, listDate }) => {
	return (
		<div className='list'>
			<ListHeader listName={listName} listDate={listDate} />
			<ul>
				<li class='checkbox'>
					<input type='checkbox' id='checkbox_1' />
					<label for='checkbox_1'>Pure CSS Checkbox</label>
					<button className='btn-delete'>Delete item</button>
				</li>
			</ul>
		</div>
	)
}

export default List
