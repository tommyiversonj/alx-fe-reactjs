import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        position: 'relative', // Changed from 'fixed' to 'relative' for better content flow
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',
        marginTop: 'auto' // Pushes the footer to the bottom of the content
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
            <p>Designed with ❤️ in React</p>
        </footer>
    );
}

export default Footer;