import React from 'react';

function Services() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f5f5dc', minHeight: 'calc(100vh - 120px)' }}>
            <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ background: '#dcedc8', margin: '10px 0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <strong style={{ color: '#33691e' }}>Technology Consulting:</strong> Expert advice and solutions for your IT infrastructure.
                </li>
                <li style={{ background: '#dcedc8', margin: '10px 0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <strong style={{ color: '#33691e' }}>Market Analysis:</strong> In-depth research to understand market trends and opportunities.
                </li>
                <li style={{ background: '#dcedc8', margin: '10px 0', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <strong style={{ color: '#33691e' }}>Product Development:</strong> From concept to launch, we help bring your ideas to life.
                </li>
            </ul>
            <img src="https://via.placeholder.com/550x280?text=Our+Services" alt="Our Services" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '8px' }} />
        </div>
    );
}

export default Services;