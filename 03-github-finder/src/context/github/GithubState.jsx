import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		singleUser: [],
		repos: [],
		isLoading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	const searchUsers = async (text) => {
		setIsLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({ type: SEARCH_USERS, payload: res.data.items });
	};

	const getUser = async (username) => {
		setIsLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({ type: GET_USER, payload: res.data });
	};

	const getUserRepos = async (username) => {
		setIsLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		dispatch({ type: GET_REPOS, payload: res.data });
	};

	const setIsLoading = () => dispatch({ type: SET_LOADING });
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				singleUser: state.singleUser,
				repos: state.repos,
				isLoading: state.isLoading,
				alert: state.alert,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
