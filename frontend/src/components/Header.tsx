import React from 'react'

interface HeaderProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    backgroundColor: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle, icon, backgroundColor}) => {
    return (
        <div style={{ backgroundColor: backgroundColor || '#blue' }}>
            <div>
                {icon && <span>{icon}</span>}
                <h1>{title}</h1>
                {subtitle && <h2>{subtitle}</h2>}
            </div>
        </div>
    );
}

export default Header;
