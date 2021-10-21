import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

let name = 'luffy';
const ANIME_QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/quotes/character?name=${name}`;

function Home() {
	const [quote, setQuote] = useState();

	useEffect(() => {
		if (!quote) {
			axios
				.get(ANIME_QUERY_STRING)
				.then(function (response) {
					const quotes = response.data;
					setQuote(quotes);
					console.log(quotes);
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

			<footer>
				<a
					href='https://cors-anywhere.herokuapp.com/corsdemo'
					target='blank'
					rel='none'
				>
					Re-activate cors-anywhere
				</a>
			</footer>
		</main>
	);
}

export default Home;
