import React from 'react';
import { useDispatch } from 'react-redux';

function Navigation() {
	const dispatch = useDispatch();

	const aboutMeClick = () => {
		dispatch({ type: 'ABOUT_ME' });
	};

	const portfolioClick = () => {
		dispatch({ type: 'PORTFOLIO' });
	};

	const resumeClick = () => {
		dispatch({ type: 'RESUME' });
	};

	return (
		<nav className='navigation'>
			<ul className='flex flex-col md:flex-row md:justify-around text-center py-4 px-6 text-md md:text-2xl md:mr-0 space-y-4 md:space-y-0'>
				<li className='nav-item'>
					<button onClick={aboutMeClick} className='text-gray-700 hover:text-gray-500'>
						About Me
					</button>
				</li>
				<li className='nav-item'>
					<button onClick={portfolioClick} className='text-gray-700 hover:text-gray-500'>
						Portfolio
					</button>
				</li>
				<li className='nav-item'>
					<button onClick={resumeClick} className='text-gray-700 hover:text-gray-500'>
						Resume
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
