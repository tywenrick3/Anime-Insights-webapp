import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

let name = 'goku';

const QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/quotes/character?name=${name}`;

function Home() {
	const [quote, setQuote] = useState();

	useEffect(() => {
		if (!quote) {
			axios
				.get(QUERY_STRING)
				.then(function (response) {
					const animeQuote = response.data;
					setQuote(animeQuote);
					console.log(animeQuote);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, []);

	return (
		<main className='App'>
			<header>
				<h1>Midterm Project</h1>
				<nav className='navbar'></nav>
			</header>
		</main>
	);
}

export default Home;
