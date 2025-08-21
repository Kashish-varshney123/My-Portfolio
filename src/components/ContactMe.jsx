import React from 'react';

const ContactMe = () => {

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">
                    Contact me
                </h2>
                <div className="contact-content">
                    <div className="interview-scheduler">
                        <h3>📅 Schedule an Interview</h3>
                        <form className="schedule-form" action="mailto:kashishvarshney838@gmail.com" method="post" encType="text/plain">
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
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
                        <form className="contact-form" action="mailto:kashishvarshney838@gmail.com" method="post" encType="text/plain">
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
            </div>
        </section>
    );
};

export default ContactMe;