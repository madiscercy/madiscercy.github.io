import React from 'react';
import madi from '../../images/madi.png';

const About = () => {
	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-center text-4xl mt-4 font-semibold'>About Me</h1>
			<div className='flex justify-center py-8'>
				<img src={madi} alt='Madison' className='w-36 h-36 object-cover rounded-full' />
			</div>

			<p className='mt-6 text-center text-2xl'>
				Hello! My name is Madison. I'm a web developer with a passion for creating dynamic and interactive web applications. I specialize in
				using JavaScript, React, and other modern web technologies to build scalable and user-friendly websites and applications. Click on
				each component in the navigation bar to learn more and check out my previous works in the portfolio section.
			</p>
		</div>
	);
};

export default About;
