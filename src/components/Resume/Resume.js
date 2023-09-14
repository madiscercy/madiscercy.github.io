import React from 'react';
import pdf from '../../Madison_Scercy_Resume.pdf';

const Resume = () => {
	return (
		<div className='container mx-auto px-4 mb-48'>
			<h1 className='text-center text-4xl mt-4 font-semibold'>Resume</h1>
			<div className='mt-8 text-center'>
				<a href={pdf} download className='bg-red-200 hover:bg-red-300 text-white font-bold py-2 px-4 rounded'>
					Download My Resume (PDF)
				</a>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Proficiencies</h2>
				<ul className='list-disc ml-5'>
					<li>React</li>
					<li>JavaScript</li>
					<li>Angular</li>
					<li>TypeScript/JavaScript</li>
					<li>Node.js</li>
					<li>Python</li>
					<li>AWS</li>
					<li>SQL</li>
				</ul>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Education</h2>
				<div>
					<h3 className='text-xl font-semibold'>The Coding Boot Camp, UNC Charlotte</h3>
					<p className='italic'>95 Grade Average, Team Projects</p>
					<p>
						Multiple GitHub Repositories with Deployed Applications like Vitality Vault and Bits and Bytes. Used technologies such as React,
						JavaScript, Node.js, SQL, HTML, CSS
					</p>
					<h3 className='text-xl font-semibold'>Esthetician Certification, Aveda Institute</h3>
					<p className='italic'>2020-02 - 2020-08</p>
					<h3 className='text-xl font-semibold'>High School Diploma, Piedmont High School</h3>
					<p className='italic'>2013-08 - 2017-06</p>
				</div>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Projects</h2>
				<div>
					<h3 className='text-xl font-semibold'>Art Alchemy (artalchemy.io)</h3>
					<p>
						An AWS native website where a user may select five pieces of artwork and which a new piece of artwork will be generated based on
						those pieces. Uses multiple APIs, such as the OpenAI DALLE-2 API to generate the image.
					</p>
				</div>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Certifications and Memberships</h2>
				<div>
					<h3 className='text-xl font-semibold'>AWS Cloud Practitioner Certification</h3>
					<p className='italic'>(June 2023 - Expires June 2026)</p>
					<h3 className='text-xl font-semibold'>Professional Scrum Master (PSM I)</h3>
					<p className='italic'>(September 2023)</p>
					<h3 className='text-xl font-semibold'>Women Who Code, Member</h3>
					<p className='italic'>Jan 2023 - Present</p>
				</div>
			</div>
			<div className='mt-8'>
				<h2 className='text-2xl font-semibold mb-2'>Work Experience</h2>
				<div>
					<h3 className='text-xl font-semibold'>Skin Therapist, ULTA Beauty, Matthews, NC</h3>
					<p className='italic'>2021-02 - 2022-12</p>
					<p>Collaborated with large, diverse team to work together to drive customer satisfaction and sales.</p>
					<h3 className='text-xl font-semibold'>Hostess, O'Charley's, Monroe, NC</h3>
					<p className='italic'>Previous Role</p>
					<p>Helped facilitate cooperation between service and kitchen staff to professionally meet guest needs and resolve problems.</p>
				</div>
			</div>
		</div>
	);
};

export default Resume;
