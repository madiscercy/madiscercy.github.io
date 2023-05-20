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

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<About />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/resume' element={<Resume />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
