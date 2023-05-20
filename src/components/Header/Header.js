import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
	return (
		<header className='p-5 bg-red-200 text-gray-700 text-center '>
			<h1 className='text-2xl font-bold'>Madison Scercy</h1>
			<Navigation></Navigation>
		</header>
	);
};

export default Header;
