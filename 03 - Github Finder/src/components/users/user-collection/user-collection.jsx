import React from 'react';
import UserItem from '../user-item/user-item';
import Spinner from '../../layout/spinner/spinner';
import PropTypes from 'prop-types';

const UserCollection = ({ users, isLoading }) => {
	return isLoading ? (
		<Spinner />
	) : (
		<div className='grid-3'>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

UserCollection.propTypes = {
	users: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default UserCollection;
