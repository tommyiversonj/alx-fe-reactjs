import React from 'react';

import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#e0f7fa', minHeight: 'calc(100vh - 120px)' }}>
            <h1 style={{ color: '#2c3e50' }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #b2ebf2', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #80deea', borderRadius: '4px' }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #80deea', borderRadius: '4px' }}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #80deea', borderRadius: '4px', minHeight: '100px' }}
                    required
                />
                <button
                    type="submit"
                    style={{ padding: '10px 15px', backgroundColor: '#00bcd4', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1em' }}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;