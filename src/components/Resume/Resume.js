import React from 'react';
import pdf from '../../Madison-Scercy.pdf';

const Resume = () => {
	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-center text-4xl mt-4 font-semibold'>Resume</h1>

			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Proficiencies</h2>
				<ul className='list-disc ml-5'>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>... and more!</li>
				</ul>
			</div>

			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Experience</h2>
				<div>
					<h3 className='text-xl font-semibold'>Skin Therapist at Ulta</h3>
					<p className='italic'>Febuary 2021 - December 2022</p>
					<p>
						{' '}
						As a licensed esthetician, I had many roles at Ulta. I provided skin treatments, much as microdermabrasion, chemical peels, high
						frequency, and more. I also was in charge of makeup applications. I had to keep up with client re-bookings and guest
						relationships. Customer service was an important role in my job, as I also had to interact with customers on the floor and
						convert them to my clients.
					</p>
				</div>
				<div className='mt-8'>
					<a href={pdf} download className='bg-red-200 hover:bg-red-300 text-white font-bold py-2 px-4 rounded'>
						Download My Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resume;
