import React from 'react'
import profileImg from '../images/profile.jpg';

const Profile = ({ userName }) => {
	return (
		<div className='profile'>
			{/* COULD DO Profile image dynamic */}
			<img src={profileImg} alt='User profile' />
			<div>{userName}</div>
		</div>
	)
}

export default Profile
