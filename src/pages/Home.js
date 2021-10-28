import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import AnimeQuote from '../components/AnimeQuote';
import AnimeFact from '../components/AnimeFact';
import { useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function Home() {
	const [quoteData, setQuoteData] = useState();
	const [factData, setFactData] = useState();
	const [char, setChar] = useState();
	const [series, setSeries] = useState();

	let query = useQuery();

	function getRandomIndex(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	useEffect(() => {
		const charValue = query.get('name');
		setChar(charValue);
	}, [query]);

	useEffect(() => {
		const nameValue = query.get('name');
		if (nameValue === 'luffy' || nameValue === 'zoro') {
			setSeries('one_piece');
		} else {
			setSeries('naruto');
		}
	}, [query]);

	useEffect(() => {
		if (!factData) {
			axios
				.get(
					`https://anime-facts-rest-api.herokuapp.com/api/v1/${series}`
				)
				.then(function (response) {
					let index = getRandomIndex(0, 10);
					const fact = response.data.data.fact;
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
				.get(
					`https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/quotes/character?name=${char}`
				)
				.then(function (response) {
					console.log(response.data);
					let index = getRandomIndex(0, 9);
					const quotes = response.data[index];
					setQuoteData(quotes);
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

	const { fact } = useMemo(() => {
		if (!factData) return {};
		return {
			fact: factData.fact,
		};
	}, [factData]);

	return (
		<main className='App'>
			<header className='title'>
				<h1>Seek Advice From Gods</h1>
				<nav className='Navigation'>
					<a
						href='/?name=luffy'
						className={
							char === 'luffy' &&
							'Active' &&
							series === 'one_piece'
						}
					>
						Luffy
					</a>
					<a
						href='/?name=naruto'
						className={
							char === 'naruto' && 'Active' && series === 'naruto'
						}
					>
						Naruto
					</a>
					<a
						href='/?name=zoro'
						className={
							char === 'zoro' &&
							'Active' &&
							series === 'one_piece'
						}
					>
						Zoro
					</a>
					<a
						href='/?name=itachi'
						className={
							char === 'itachi' && 'Active' && series === 'naruto'
						}
					>
						Itachi
					</a>
				</nav>
			</header>
			<AnimeQuote
				className='quote'
				anime={anime}
				name={name}
				quote={quote}
			/>

			<AnimeFact className='fact' fact={fact} />

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
