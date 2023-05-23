import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './output.css';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const currentPage = useSelector((state) => state.page);

	let page;
	if (currentPage === 'about') {
		page = <About />;
	} else if (currentPage === 'portfolio') {
		page = <Portfolio />;
	} else if (currentPage === 'resume') {
		page = <Resume />;
	}

	return (
		<div>
			<Header />
			{page}
			<Footer />
		</div>
	);
}

export default App;
