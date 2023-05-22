import React from 'react';

const projects = [
	{
		name: 'Vitality Vault',
		languages: 'React, JavaScript, HTML, CSS, Tailwind CSS',
		image: require('../../images/vitality-vault.png'),
		deployedUrl: 'https://vitality-vault.herokuapp.com/',
		repoUrl: 'https://github.com/csnyder94/vitality-vault',
	},
	{
		name: 'Bits and Bytes',
		image: require('../../images/bits-and-bytes.png'),
		deployedUrl: 'https://bits-and-bytes.herokuapp.com/',
		repoUrl: 'https://github.com/IsaiahGz/bits-and-bytes',
	},
	{
		name: 'Simultaneous Searches',
		image: require('../../images/simultaneous-searches.png'),
		deployedUrl: 'https://csnyder94.github.io/simultaneous-searches/',
		repoUrl: 'https://github.com/csnyder94/simultaneous-searches',
	},
	{
		name: 'Note Taker',
		image: require('../../images/note-taker.png'),
		deployedUrl: 'https://module-11-note-taker.herokuapp.com/',
		repoUrl: 'https://github.com/madiscercy/Note-Taker-11',
	},
	{
		name: 'Weather Dashboard',
		image: require('../../images/weather-dashboard.png'),
		deployedUrl: 'https://madiscercy.github.io/Weather-Dashboard06/',
		repoUrl: 'https://github.com/madiscercy/Weather-Dashboard06',
	},
	{
		name: 'Code Quiz',
		image: require('../../images/code-quiz.png'),
		deployedUrl: 'https://madiscercy.github.io/Code-Quiz-Challenge04/',
		repoUrl: 'https://github.com/madiscercy/Code-Quiz-Challenge04',
	},
];

const Portfolio = () => {
	return (
		<div className='px-4 mb-20'>
			<h1 className='text-center text-4xl mt-4 font-semibold'>Portfolio</h1>
			<div className='grid grid-cols-3 gap-4 py-8'>
				{projects.map((project, index) => (
					<div key={index} className='border p-2 text-center'>
						<div className='w-full h-48 overflow-hidden'>
							<img src={project.image} alt={project.name} className='w-full h-full object-cover' />
						</div>
						<h3 className='text-2xl font-bold mt-2'>{project.name}</h3>
						<p className='text-md italic mt-1'>{project.languages}</p>
						<a
							href={project.deployedUrl}
							target='_blank'
							rel='noreferrer'
							className='inline-block border-2 border-red-200 bg-red-200 text-white px-4 py-2 mt-2 rounded hover:bg-white hover:text-red-200 transition duration-200'
						>
							Deployed Application
						</a>
						<br />
						<a
							href={project.repoUrl}
							target='_blank'
							rel='noreferrer'
							className='inline-block border-2 border-red-200 text-red-200 px-4 py-2 mt-2 rounded hover:bg-red-200 hover:text-white transition duration-200'
						>
							GitHub Repository
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
