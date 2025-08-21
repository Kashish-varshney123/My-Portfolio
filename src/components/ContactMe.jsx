import React, { useState } from 'react';

const ContactMe = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (response.ok) {
                setMessage('Message sent successfully!');
                e.target.reset();
            } else {
                setMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setMessage('Failed to send message. Please try again.');
        }
        
        setTimeout(() => setMessage(''), 5000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">
                    Contact me
                </h2>
                <div className="contact-content">
                    <div className="interview-scheduler">
                        <h3>📅 Schedule an Interview</h3>
                        <form className="schedule-form" onSubmit={handleSubmit} name="interview" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="interview" />
                            <input type="text" name="name" placeholder="Your Name" required />
                            <div className="form-row">
                                <input type="date" name="date" min={new Date().toISOString().split('T')[0]} required />
                                <input type="time" name="time" required />
                            </div>
                            <select name="type" required>
                                <option value="">Select Interview Type</option>
                                <option value="technical">Technical Interview</option>
                                <option value="general">General Discussion</option>
                                <option value="project">Project Review</option>
                            </select>
                            <textarea name="notes" rows="3" placeholder="Additional notes (optional)"></textarea>
                            <button type="submit" className="schedule-btn">Schedule Interview</button>
                        </form>
                    </div>
                    <div className="contact-form-section">
                        <h3>Message me</h3>
                        <form className="contact-form" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                required
                            ></textarea>
                            <button type="submit" className="send-btn">Send message</button>
                        </form>

                    </div>
                </div>
                {message && (
                    <div className="message-status success">
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactMe;