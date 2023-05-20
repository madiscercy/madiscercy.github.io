import React, { useState } from 'react';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formErrors, setFormErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		const errors = {};
		if (!name) errors.name = 'Name is required.';
		if (!email) {
			errors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email address is invalid.';
		}
		if (!message) errors.message = 'Message is required.';
		setFormErrors(errors);
		if (Object.keys(errors).length === 0) {
			alert('Form submitted');
		}
	};

	return (
		<section className='px-4 '>
			<h1 className='text-center text-4xl mt-4 font-semibold'>Contact Me</h1>
			<form onSubmit={handleSubmit} noValidate className='space-y-4 p-10 text-2xl'>
				<input
					type='text'
					placeholder='Name'
					className='w-full p-2 border-4 border-red-100'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{formErrors.name && <p className='text-red-500'>{formErrors.name}</p>}
				<input
					type='email'
					placeholder='Email'
					className='w-full p-2 border-4 border-red-100'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				{formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
				<textarea
					placeholder='Message'
					className='w-full p-2 border-4 border-red-100'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{formErrors.message && <p className='text-red-500'>{formErrors.message}</p>}
				<button type='submit' className='mt-4 bg-red-100 hover:bg-red-200 text-black font-bold py-2 px-4 rounded'>
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
