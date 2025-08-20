import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Developed a full stack web application which simplifies the struggle for finding products for online shopping.",
            github: "https://github.com/Kashish-varshney123/E-Commerce"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website where users can view projects, skills and get in touch. This project was primarily created for showcasing work.",
            github: "https://github.com/Kashish-varshney123/My-Portfolio"
        },
        {
            title: "Disaster Management",
            description: "A comprehensive disaster management system for emergency response and resource coordination.",
            github: "https://github.com/Kashish-varshney123/disaster-management"
        },
        {
            title: "Cyberpunk MemeHustle",
            description: "An interactive meme generation and sharing platform with social features.",
            github: "https://github.com/Kashish-varshney123/Cyberpunk-MemeHustle"
        },
        {
            title: "Crypto Dashboard",
            description: "A real-time cryptocurrency tracking dashboard with portfolio management features.",
            github: "https://github.com/Kashish-varshney123/CryptoDashboard"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    My Projects
                </h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;