import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import AnimeQuote from '../components/AnimeQuote';

let name = 'luffy';
let animeName = 'fma_brotherhood';
const QUOTE_QUERY = `https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/quotes/character?name=${name}`;
const FACT_QUERY = `https://cors-anywhere.herokuapp.com/https://anime-facts-rest-api.herokuapp.com/api/v1/:${animeName}`;

function Home() {
	const [quoteData, setQuoteData] = useState();
	const [factData, setFactData] = useState();

	function getRandomIndex(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	useEffect(() => {
		if (!factData) {
			axios
				.get(FACT_QUERY)
				.then(function (response) {
					const fact = response.data;
					setFactData(fact);
					console.log(fact);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, []);

	useEffect(() => {
		if (!quoteData) {
			axios
				.get(QUOTE_QUERY)
				.then(function (response) {
					let index = getRandomIndex(0, 9);
					const quotes = response.data[index];
					setQuoteData(quotes);
					console.log(quotes);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, []);

	const { anime, name, quote } = useMemo(() => {
		if (!quoteData) return {};
		return {
			anime: quoteData.anime,
			name: quoteData.character,
			quote: quoteData.quote,
		};
	}, [quoteData]);

	return (
		<main className='App'>
			<header className='title'>
				<h1>Get inspired by your favorite anime character</h1>
				<nav className='navbar'></nav>
			</header>
			<AnimeQuote
				className='quote'
				anime={anime}
				name={name}
				quote={quote}
			/>
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
