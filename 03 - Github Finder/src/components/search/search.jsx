import React, { Component } from 'react';

class Search extends Component {
	state = {
		text: '',
	};
	handleChange = (event) =>
		this.setState({ [event.target.name]: event.target.value });
	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Please enter something', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		const { handleClear, showClear } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='search'>
					<input
						type='text'
						name='text'
						placeholder='Search Users'
						value={this.state.text}
						onChange={this.handleChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				{showClear ? (
					<button className='btn btn-light btn-block' onClick={handleClear}>
						Clear
					</button>
				) : null}
			</div>
		);
	}
}

export default Search;
