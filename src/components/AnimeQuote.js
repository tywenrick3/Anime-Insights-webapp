import React from 'react';

function AnimeQuote({ anime, name, quote }) {
	return (
		<section className='AnimeQuote'>
			<div>
				<h2 className='animeTitle'>{anime}</h2>
				<p className='name'>{name}</p>
				<p className='quote'>--"{quote}"</p>
			</div>
		</section>
	);
}

export default AnimeQuote;
