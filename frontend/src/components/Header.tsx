import React from 'react'

interface HeaderProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle, icon, backgroundColor}) => {
    return (
        <header 
            className = "h-1/4" 
            style = {{ backgroundColor: backgroundColor}}>
            <div className = "flex flex-col items-center justify-center h-full text-center">
                {icon && <span className = "text-3xl mb-2">{icon}</span>}
                <h1 className = "text-3xl font-bold mb-1">{title}</h1>
                {subtitle && <h2 className = "text-lg text-gray-600">{subtitle}</h2>}
            </div>
        </header>
    );
}

export default Header;
