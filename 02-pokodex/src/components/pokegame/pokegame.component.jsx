import React from 'react';

import Pokedex from '../pokedex/pokedex.component';

const DATA = [
	{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

const Pokegame = () => {
	const team1 = [];
	const team2 = [...DATA];

	while (team1.length < team2.length) {
		let randomIdx = Math.floor(Math.random() * team2.length);
		const randomPokemon = team2.splice(randomIdx, 1)[0];
		team1.push(randomPokemon);
	}

	const team1Score = team1.reduce((prev, cur) => prev + cur.base_experience, 0);
	const team2Score = team2.reduce((prev, cur) => prev + cur.base_experience, 0);

	return (
		<div>
			<Pokedex
				data={team1}
				exp={team1Score}
				isWinner={team1Score > team2Score}
			/>
			<Pokedex
				data={team2}
				exp={team2Score}
				isWinner={team2Score > team1Score}
			/>
		</div>
	);
};

export default Pokegame;
