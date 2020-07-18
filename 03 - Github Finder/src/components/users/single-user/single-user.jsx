import React, { Component } from 'react';
import Spinner from '../../layout/spinner/spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReposCollection from '../repos-collection/repos-collection';

class SingleUser extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}
	static propTypes = {
		loading: PropTypes.bool,
		singleUser: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
		getUserRepos: PropTypes.func.isRequired,
		repos: PropTypes.array.isRequired,
	};
	render() {
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
		} = this.props.singleUser;

		const { isLoading } = this.props;
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
				<ReposCollection repos={this.props.repos} />
			</>
		);
	}
}

export default SingleUser;
