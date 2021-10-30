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
		if (!quoteData) {
			axios
				.get(
					`https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/quotes/character?name=${char}`
				)
				.then(function (response) {
					let index = getRandomIndex(0, 9);
					const quotes = response.data[index];
					console.log(quotes);
					setQuoteData(quotes);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, [query]);

	useEffect(() => {
		const nameValue = query.get('name');
		if (nameValue === 'luffy' || nameValue === 'zoro') {
			setSeries('one_piece');
		}
		if (nameValue === 'saitama') {
			setSeries('one_punch_man');
		} else {
			setSeries('naruto');
		}

		if (!factData) {
			axios
				.get(
					`https://anime-facts-rest-api.herokuapp.com/api/v1/${series}`
				)
				.then(function (response) {
					let index = getRandomIndex(0, 10);
					const facts = response.data.data[index];
					console.log(facts);
					setFactData(facts);
				})
				.catch(function (error) {
					console.warn(error);
				});
		}
	}, [query]);

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
				<h1>Anime Insights</h1>
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
						href='/?name=Itachi Uchiha'
						className={
							char === 'Itachi Uchiha' &&
							'Active' &&
							series === 'naruto'
						}
					>
						Itachi
					</a>
					<a
						href='/?name=saskue'
						className={
							char === 'saskue' && 'Active' && series === 'naruto'
						}
					>
						Saskue
					</a>
					<a
						href='/?name=saitama'
						className={
							char === 'saitama' &&
							'Active' &&
							series === 'naruto'
						}
					>
						Saitama
					</a>
				</nav>
			</header>
			<div className='comps'>
				<AnimeQuote
					className='quote'
					anime={anime}
					name={name}
					quote={quote}
				/>

				<AnimeFact className='fact' fact={fact} series={series} />
			</div>

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
