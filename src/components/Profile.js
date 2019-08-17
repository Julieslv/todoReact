import React from 'react'
import profileImg from '../images/profile.jpg';

const Profile = (props) => {
	return (
		<div className='profile'>
			<img src={profileImg} alt='User profile' />
			<div>{this.props.userName}</div>
		</div>
	)
}

export default Profile
