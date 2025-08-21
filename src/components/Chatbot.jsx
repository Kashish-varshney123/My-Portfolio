import React, { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Kashish's AI assistant. How may I help you? Ask me about her skills, projects, or experience!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const responses = {
        skills: "Kashish is skilled in JavaScript, React, Node.js, Python, HTML/CSS, and full-stack development!",
        projects: "She has worked on E-Commerce platforms, Portfolio websites, Disaster Management systems, Cyberpunk MemeHustle, and Crypto Dashboards.",
        experience: "Kashish is a passionate web developer with experience in building modern, responsive applications.",
        contact: "You can reach Kashish through the contact form below or connect via LinkedIn and GitHub!",
        default: "I can help you learn about Kashish's skills, projects, experience, or contact information. What would you like to know?"
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        const botResponse = getBotResponse(input.toLowerCase());
        
        setMessages(prev => [...prev, userMessage, { text: botResponse, sender: 'bot' }]);
        setInput('');
    };

    const getBotResponse = (message) => {
        if (message.includes('skill')) return responses.skills;
        if (message.includes('project')) return responses.projects;
        if (message.includes('experience') || message.includes('work')) return responses.experience;
        if (message.includes('contact') || message.includes('reach')) return responses.contact;
        if (message.includes('help') || message.includes('how')) return responses.help;
        return responses.default;
    };

    return (
        <div className="chatbot">
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h4>💬 Ask about Kashish</h4>
                    <button onClick={() => setIsOpen(false)}>×</button>
                </div>
                <div className="chatbot-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chatbot-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything..."
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
            <button 
                className="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                💬
            </button>
        </div>
    );
};

export default Chatbot;