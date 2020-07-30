import React, { useContext } from 'react';

import AlertContext from '../../../context/alert/AlertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);

	const { alert } = alertContext;

	return alert !== null ? (
		<div className={`alert-${alert.type}`}>
			<i className='fas fa-info-circle'>{alert.message}</i>
		</div>
	) : null;
};

export default Alert;
