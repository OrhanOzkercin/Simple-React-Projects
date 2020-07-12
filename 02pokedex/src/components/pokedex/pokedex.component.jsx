import React from 'react';
import Pokecard from '../pokecard/pokecard.component';

import './pokedex.styles.scss';

const Pokedex = (props) => {
	return (
		<div className='pokedex'>
			<h1 className='pokedex__h1'>Pokedex!</h1>
			<h3 className='pokedex__h3'>Total Experience: {props.exp}</h3>
			<h3 className={`pokedex__h3--${props.isWinner}`}>
				{props.isWinner ? 'Winner' : 'Loser'}
			</h3>
			<div className='pokedex__data'>
				{props.data.map((data) => (
					<Pokecard key={data.id} {...data} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;
