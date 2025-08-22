import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';

import Connect from './components/Connect';
import './styles/main.css';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        document.title = 'Kashish Varshney';
    }, []);
    
    const scrollToSection = (sectionId) => {
        const target = document.querySelector(sectionId);
        if (target) {
            setIsMenuOpen(false);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="app">
            <nav className="navbar">
                <div className="nav-container">
                    <h1 className="nav-logo">Kashish</h1>
                    <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Home</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a></li>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }}>Skills</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>Projects</a></li>
                        <li><a href="#connect" onClick={(e) => { e.preventDefault(); scrollToSection('#connect'); }}>Connect</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></li>
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
        </div>
    );
}

export default App;