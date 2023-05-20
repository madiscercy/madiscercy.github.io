// Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav className='navigation'>
			<ul className='flex justify-around py-4 px-6 text-2xl'>
				<li className='nav-item'>
					<NavLink to='/' className='text-gray-700 hover:text-gray-500' end>
						About Me
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/portfolio' className='text-gray-700 hover:text-gray-500'>
						Portfolio
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/contact' className='text-gray-700 hover:text-gray-500'>
						Contact
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
