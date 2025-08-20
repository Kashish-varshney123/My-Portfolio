import React from 'react';

const Connect = () => {
    const socialLinks = [
        {
            platform: 'LinkedIn',
            description: 'Currently looking for some internship, would love to hear from recruiters.',
            url: 'https://www.linkedin.com/in/kashish-varshney44',
            color: 'blue'
        },
        {
            platform: 'GitHub',
            description: 'I write code related to Web Development, Mobile Apps, etc',
            url: 'https://github.com/Kashish-varshney123',
            color: 'dark'
        }
    ];

    return (
        <section id="connect" className="connect">
            <div className="container">
                <h2 className="section-title">
                    Connect with me
                </h2>
                <div className="social-grid">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={`social-card ${link.color}`}>
                            <div className="social-avatar">
                                <span>👤</span>
                            </div>
                            <h3>{link.platform}</h3>
                            <p>{link.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Connect;