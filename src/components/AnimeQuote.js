import React from 'react';

function AnimeQuote({ anime, name, quote }) {
	return (
		<section className='AnimeQuote'>
			<div>
				<h2>{anime}</h2>
				<h3>{name}</h3>
				<p>--"{quote}"</p>
			</div>
		</section>
	);
}

export default AnimeQuote;
