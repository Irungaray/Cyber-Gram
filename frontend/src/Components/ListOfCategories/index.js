import React, { useState, useEffect } from 'react';

import { Category } from '../Category';

import { List, Item } from './styles';

function useCategoriesData() {
	const [ categories, setCategories ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	useEffect(function () {
		setLoading(true)
		window.fetch('https://petgram-server-24iykciv5.now.sh/categories')
			.then(res => res.json())
			.then(response => {
				setCategories(response)
				setLoading(false)
			})
	}, [])

	return { categories, loading };
}

export const ListOfCategories = () => {

	const { categories, loading } = useCategoriesData()

	if (loading) {
		return 'Loading...'
	}

	return (
		<List>
			{
				categories.map(category =>
					<Item key={category.id}>
						<Category
							{...category}
							path={`/pet/${category.id}`}
						/>
					</Item>
				)
			}
		</List>
	);
};
