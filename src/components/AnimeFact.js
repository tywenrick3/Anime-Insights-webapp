import React from 'react';

function AnimeQuote({ series, fact }) {
	console.log(series);
	console.log(fact);
	return (
		<section className='AnimeFact'>
			<div>
				<h3 className='factinfo'>Random Fact</h3>
				<h4 className='animeSeries'>Series: {series}</h4>
				<p className='fact'>{fact}</p>
			</div>
		</section>
	);
}

export default AnimeQuote;
