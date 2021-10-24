import React, { useEffect, useState, useMemo } from 'react';

function Search() {
	const [query, setQuery] = useState();
	return (
		<section className='Search'>
			<input
				placeholder='Search'
				onChange={(event) => setQuery(event.target.value)}
			/>
		</section>
	);
}

export default Search;
