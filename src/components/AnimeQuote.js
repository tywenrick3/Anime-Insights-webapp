import React from 'react';

function AnimeQuote({ anime, name, quote }) {
	return (
		<section className='AnimeQuote'>
			<div>
				<h3 className='animeTitle'>{anime}</h3>
				<h4 className='name'>{name}</h4>
				<p className='quote'>"{quote}"</p>
			</div>
		</section>
	);
}

export default AnimeQuote;
