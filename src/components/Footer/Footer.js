import React from 'react';
import githubLogo from '../../images/github-logo.png';
import linkedinLogo from '../../images/linkedin.png';
import '../../App.css';

const Footer = () => {
	return (
		<footer className='flex items-center justify-center h-16 bg-red-200 text-white fixed inset-x-0 bottom-0'>
			<a href='https://github.com/madiscercy' target='_blank' rel='noopener noreferrer'>
				<img src={githubLogo} alt='Github Logo' className='h-8 w-8' />
			</a>
			<a href='https://www.linkedin.com/in/madison-scercy-64b284267/' target='_blank' rel='noopener noreferrer'>
				<img src={linkedinLogo} alt='Github Logo' className='h-8 w-8 ml-5' />
			</a>
		</footer>
	);
};

export default Footer;
