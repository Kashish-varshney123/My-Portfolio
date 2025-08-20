import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">
                    About Me
                </h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/profile.jpg" alt="Kashish Varshney" className="profile-image" />
                    </div>
                    <div className="about-text">
                        <h3>I'm Kashish, a <span className="highlight">Web Developer</span></h3>
                        <p>
                            a Web Developer with strong learning and creative abilities. I enjoy exploring new technologies, adapting quickly, and applying innovative ideas to turn concepts into real, working solutions. With a passion for continuous growth and problem-solving, I focus on building applications that are not only functional but also impactful.
                        </p>
                        <a href="./resume.pdf" target="_blank" className="resume-btn">Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;