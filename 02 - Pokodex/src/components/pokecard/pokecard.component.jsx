import React from 'react';

import './pokecard.styles.scss';

const POKE_IMG_API =
	'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const Pokecard = ({ id, name, type, base_experience }) => {
	const _id = id < 10 ? `00${id}` : id < 100 ? `0${id}` : `${id}`;
	let imgSrc = `${POKE_IMG_API}${_id}.png`;
	return (
		<div className='pokecard'>
			<h1 className='pokecard__name'>{name}</h1>
			<img className='pokecard__img' src={imgSrc} alt={name} />
			<span className='pokecard__type'>Type: {type}</span>
			<span className='pokecard__exp'>Exp: {base_experience}</span>
		</div>
	);
};

export default Pokecard;
