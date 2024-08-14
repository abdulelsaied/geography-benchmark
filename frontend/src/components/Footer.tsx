import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-4 text-center text-xs lg:text-sm text-gray-600">
            <p>
                Made by{' '}
                <a 
                    href="https://www.linkedin.com/in/abdulelsaied/" 
                    className="hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Abdul El-Saied
                </a>
            </p>
        </footer>
    );
};

export default Footer;