import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const { setAlert } = alertContext;

	const [text, setText] = useState('');

	const handleChange = (event) => setText(event.target.value);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='search'>
				<input
					type='text'
					name='text'
					placeholder='Search Users'
					value={text}
					onChange={handleChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{githubContext.users.length > 0 ? (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			) : null}
		</div>
	);
};

export default Search;
