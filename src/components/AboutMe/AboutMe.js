import React from 'react';
import madi from '../../images/Madison-Scercy-Profile-Picture.jpeg';

const About = () => {
	return (
		<div className='container mx-auto px-4 md:mb-0 mb-48'>
			<h1 className='text-center text-4xl mt-4 font-semibold'>About Me</h1>
			<div className='flex justify-center py-8'>
				<img src={madi} alt='Madison Scercy profile picture' className='w-60 h- object-cover rounded-full' />
			</div>

			<p className='mt-6 text-center text-2xl'>
				Hello! I'm Madison, a recent graduate from The Coding Boot Camp at UNC Charlotte. As a web developer, I have a passion for creating
				dynamic and interactive web applications that offer seamless user experiences. My expertise lies in JavaScript, React, and other
				modern web technologies. I utilize these skills to craft scalable, user-friendly websites and applications that not only meet but
				exceed customer expectations. Click on each component in the navigation bar to learn more and check out my previous works in the
				portfolio section.
			</p>
		</div>
	);
};

export default About;
