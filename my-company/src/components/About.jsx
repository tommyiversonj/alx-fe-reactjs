import React from 'react';

function About() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#e6f7ff', minHeight: 'calc(100vh - 120px)' }}>
            <h1 style={{ color: '#2c3e50' }}>About Us</h1>
            <p style={{ color: '#34495e', lineHeight: '1.6' }}>
                Our company has been providing top-notch services since 1990. We specialize in various fields including
                <strong style={{ color: '#2980b9' }}> technology</strong>,
                <strong style={{ color: '#2980b9' }}> marketing</strong>, and
                <strong style={{ color: '#2980b9' }}> consultancy</strong>.
                Our mission is to empower businesses with innovative solutions and unparalleled support.
            </p>
            <p style={{ color: '#34495e', lineHeight: '1.6' }}>
                We pride ourselves on a team of dedicated professionals committed to achieving our clients' goals and fostering long-term partnerships.
            </p>
            <img src="https://via.placeholder.com/500x250?text=About+Our+Team" alt="About Our Team" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px' }} />
        </div>
    );
}

export default About;