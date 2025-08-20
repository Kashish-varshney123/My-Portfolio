import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Angular', level: 80 },
        { name: 'CSS3', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'SQL', level: 75 },
        { name: 'Object Oriented Programming (OOPs)', level: 80 },
        { name: 'Git', level: 85 }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">
                    My skills
                </h2>
                <div className="skills-grid">
                    <div className="skills-column">
                        {skills.slice(0, 4).map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="skills-column">
                        {skills.slice(4).map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;