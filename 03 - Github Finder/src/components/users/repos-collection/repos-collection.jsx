import React from 'react';
import RepoItem from '../repo-item/repo-item';
import PropTypes from 'prop-types';

const ReposCollection = ({ repos }) => {
	return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

ReposCollection.PropTypes = {
	repos: PropTypes.array.isRequired,
};
export default ReposCollection;
