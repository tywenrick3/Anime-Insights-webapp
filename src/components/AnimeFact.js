import React from 'react';

function AnimeQuote({ series, fact }) {
	return (
		<section className='AnimeFact'>
			<div>
				<h2 className='animeSeries'>{series}</h2>
				<p className='fact'>{fact}</p>
			</div>
		</section>
	);
}

export default AnimeQuote;
