import React, { useContext } from 'react';
import UserItem from '../user-item/user-item';
import Spinner from '../../layout/spinner/spinner';

import GithubContext from '../../../context/github/GithubContext';

const UserCollection = () => {
	const githubContext = useContext(GithubContext);

	const { isLoading, users } = githubContext;

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

export default UserCollection;
