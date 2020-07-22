import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/navbar';
import UserCollection from './components/users/user-collection/user-collection';

import './App.css';
import Search from './components/search/search';
import Alert from './components/layout/alert/alert';

import About from './pages/about/about';
import SingleUser from './components/users/single-user/single-user';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert alert={alert} />
							<Switch>
								<Route
									path='/'
									exact
									render={(props) => (
										<>
											<Search />
											<UserCollection />
										</>
									)}
								/>
								<Route exact path='/about' render={() => <About />}></Route>
								<Route exact path='/user/:login' component={SingleUser} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};
export default App;
