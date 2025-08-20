import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <h2 className="section-title">Resume</h2>
                <div className="resume-content">
                    <div className="resume-section">
                        <h3>Experience</h3>
                        <div className="experience-item">
                            <div className="job-header">
                                <h4>Frontend Developer</h4>
                                <span className="company">Tech Company</span>
                                <span className="duration">2022 - Present</span>
                            </div>
                            <p>Developed responsive web applications using React and modern JavaScript. Collaborated with design teams to implement pixel-perfect UI components.</p>
                        </div>
                        <div className="experience-item">
                            <div className="job-header">
                                <h4>Junior Web Developer</h4>
                                <span className="company">Digital Agency</span>
                                <span className="duration">2021 - 2022</span>
                            </div>
                            <p>Built and maintained client websites using HTML, CSS, and JavaScript. Optimized website performance and implemented SEO best practices.</p>
                        </div>
                    </div>
                    
                    <div className="resume-section">
                        <h3>Education</h3>
                        <div className="education-item">
                            <h4>Bachelor of Computer Science</h4>
                            <span className="school">University Name</span>
                            <span className="year">2021</span>
                        </div>
                    </div>
                    
                    <div className="resume-download">
                        <a href="#" className="btn btn-primary" download>Download Full Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;