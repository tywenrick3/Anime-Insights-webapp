import React, { useEffect, useState, useMemo } from 'react';

function Search() {
	const [name, setName] = useState('');
	console.log(name);
	return (
		<section className='Search'>
			<input
				placeholder='Search'
				type='text'
				onChange={(event) => setName(event.target.value)}
			/>
		</section>
	);
}

export default Search;
