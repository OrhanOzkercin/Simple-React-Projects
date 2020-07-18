import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/navbar';
import UserCollection from './components/users/user-collection/user-collection';
import axios from 'axios';

import './App.css';
import Search from './components/search/search';
import Alert from './components/layout/alert/alert';

import About from './pages/about/about';
import SingleUser from './components/users/single-user/single-user';

class App extends Component {
	state = {
		users: [],
		singleUser: {},
		repos: [],
		isLoading: false,
		alert: null,
	};

	searchUsers = async (text) => {
		this.setState({ isLoading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ users: res.data.items, isLoading: false });
	};

	getUser = async (username) => {
		this.setState({ isLoading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ singleUser: res.data, isLoading: false });
	};

	getUserRepos = async (username) => {
		this.setState({ isLoading: true });
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		this.setState({ repos: res.data, isLoading: false });
	};

	clearUsers = () => {
		this.setState({ users: [], isLoading: false });
	};

	setAlert = (message, type) => {
		this.setState({ alert: { message: message, type: type } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 2000);
	};
	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar />

					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								path='/'
								exact
								render={(props) => (
									<>
										<Search
											handleClear={this.clearUsers}
											searchUsers={this.searchUsers}
											showClear={this.state.users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<UserCollection
											isLoading={this.state.isLoading}
											users={this.state.users}
										/>
									</>
								)}
							/>
							<Route exact path='/about' render={() => <About />}></Route>
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<SingleUser
										{...props}
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
										repos={this.state.repos}
										singleUser={this.state.singleUser}
										isLoading={this.state.isLoading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;
