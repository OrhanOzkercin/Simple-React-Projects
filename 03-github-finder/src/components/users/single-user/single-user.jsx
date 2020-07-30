import React, { useEffect, useContext } from 'react';
import Spinner from '../../layout/spinner/spinner';
import { Link } from 'react-router-dom';
import ReposCollection from '../repos-collection/repos-collection';
import GithubContext from '../../../context/github/GithubContext';

const SingleUser = ({ match }) => {
	const githubContext = useContext(GithubContext);

	const { getUser, getUserRepos, repos, isLoading, singleUser } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		company,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = singleUser;

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<Link to='/' className='btn btn-light'>
				Back To Search
			</Link>
			Hireable:{' '}
			{hireable ? (
				<i className='fas fa-check text-success'></i>
			) : (
				<i className='fas fa-times-circle text-danger'></i>
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						alt='Avatar'
						style={{ width: '150px' }}
						className='round-img'
					/>
					<h1>{name}</h1>
					<p>Location: {location ? location : 'No Info'} </p>
				</div>
				<div>
					{bio && (
						<>
							<h3>Bio</h3>
							<p>{bio}</p>
						</>
					)}
					<a href={html_url} className='btn btn-dark my-1'>
						Visit Github Profile
					</a>
					<ul>
						<li>
							{login && (
								<>
									<strong>Username: </strong>
									{login}
								</>
							)}
						</li>
						<li>
							{company && (
								<>
									<strong>Company: </strong>
									{company}
								</>
							)}
						</li>
						<li>
							{' '}
							{blog && (
								<>
									<strong>Website: </strong>
									{blog}
								</>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				<div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-dark'>Public Gists: {public_gists}</div>
			</div>
			<ReposCollection repos={repos} />
		</>
	);
};

export default SingleUser;
