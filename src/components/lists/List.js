import React from 'react'
import ListHeader from './ListHeader';
import ListCheck from './ListItem';

// const List = (props) => {
const List = ({ listName, listDate, listToDo }) => {
	console.log(listToDo)
	return (
		<div className='list'>
			<ListHeader listName={listName} listDate={listDate} />
			<ul>
				{listToDo.map((listItem, index) => {
					return (
						< ListCheck listItem={listItem} key={index + 1} />
					)
				})}
			</ul>
		</div>
	)
}

export default List
