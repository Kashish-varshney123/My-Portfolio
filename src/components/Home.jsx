import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const roles = ['Web Developer', 'Freelancer'];
    
    useEffect(() => {
        const currentWord = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                if (displayText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);
        
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-intro">Hello, my name is</p>
                    <h1 className="hero-name">Kashish Varshney</h1>
                    <h2 className="hero-role">
                        And I'm a <span className="role-text">{displayText}<span className="cursor">|</span></span>
                    </h2>
                    <button onClick={() => window.open('https://www.linkedin.com/in/kashish-varshney44', '_blank')} className="hire-btn">Hire me</button>
                </div>
                <div className="hero-avatar">
                    <div className="avatar-container">
                        <div className="avatar-face">👩💻</div>
                        <div className="avatar-hand">👋</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;