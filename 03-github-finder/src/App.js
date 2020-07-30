import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar/navbar';
import Alert from './components/layout/alert/alert';
import SingleUser from './components/users/single-user/single-user';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

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
								<Route path='/' exact component={Home} />
								<Route exact path='/about' render={() => <About />}></Route>
								<Route exact path='/user/:login' component={SingleUser} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};
export default App;
