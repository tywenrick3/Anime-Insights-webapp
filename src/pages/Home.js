import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const QUERY_STRING = `https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/random`;

function Home() {
	//const [quote, setQuote] = useState();

	fetch(QUERY_STRING)
		.then((response) => response.json())
		.catch(function (error) {
			console.warn(error);
		})
		.then((quote) => console.log(quote));

	/*
	useEffect(() => {
		if (!quote) {
			axios
				.get(QUERY_STRING)
				.then(function (response) {
					const animeQuote = response.data;
					setQuote(animeQuote);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, []);
	*/

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
