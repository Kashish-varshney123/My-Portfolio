import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    // EmailJS credentials from environment variables
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID_CONTACT = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
    const TEMPLATE_ID_INTERVIEW = process.env.REACT_APP_EMAILJS_INTERVIEW_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendEmail = async (e, templateId) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                templateId,
                e.target,
                PUBLIC_KEY
            );
            setMessage('Message sent successfully!');
            e.target.reset();
        } catch (error) {
            setMessage('Failed to send message. Please try again.');
            console.error('EmailJS error:', error);
        } finally {
            setIsSubmitting(false);
        }
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
                        <form className="schedule-form" onSubmit={(e) => sendEmail(e, TEMPLATE_ID_INTERVIEW)}>
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
                            <button type="submit" className="schedule-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Schedule Interview'}
                            </button>
                        </form>
                    </div>
                    <div className="contact-form-section">
                        <h3>Message me</h3>
                        <form className="contact-form" onSubmit={(e) => sendEmail(e, TEMPLATE_ID_CONTACT)}>
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
                            <button type="submit" className="send-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send message'}
                            </button>
                        </form>

                    </div>
                </div>
                {message && (
                    <div className={`message-status ${message.includes('success') ? 'success' : 'error'}`}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContactMe;