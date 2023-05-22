// Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav className='navigation'>
			<ul className='flex flex-col md:flex-row md:justify-around text-center py-4 px-6 text-md md:text-2xl md:mr-0 space-y-4 md:space-y-0'>
				<li className='nav-item'>
					<NavLink to='/' className='text-gray-700 hover:text-gray-500'>
						About Me
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/portfolio' className='text-gray-700 hover:text-gray-500'>
						Portfolio
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/resume' className='text-gray-700 hover:text-gray-500'>
						Resume
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
