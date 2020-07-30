import React from 'react';

import spinner from '../../../assets/spinner.gif';

import './spinner.scss';

const Spinner = () => (
	<img src={spinner} alt='loading...' className='spinner' />
);

export default Spinner;
