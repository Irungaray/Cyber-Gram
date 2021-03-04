import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Link, Nav } from './styles';

export const Navbar = () => {
	return (
		<Nav>
			<Link to='/'>
				<MdHome size='35px' />
			</Link>

			<Link to='/favs'>
				<MdFavoriteBorder size='35px' />
			</Link>

			<Link to='/user'>
				<MdPersonOutline size='35px' />
			</Link>
		</Nav>
	);
};