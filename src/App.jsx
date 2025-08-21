import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';

import Connect from './components/Connect';
import Chatbot from './components/Chatbot';
import './styles/main.css';

function App() {
    useEffect(() => {
        document.title = 'Kashish Varshney';
        
        // Add smooth scrolling to navigation links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);
    return (
        <div className="app">
            <nav className="navbar">
                <div className="nav-container">
                    <h1 className="nav-logo">Kashish</h1>
                    <div className="hamburger" onClick={() => document.querySelector('.nav-menu').classList.toggle('active')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#connect">Connect</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Connect />
                <ContactMe />
            </main>
            <Chatbot />
        </div>
    );
}

export default App;