import React from 'react'
import { useNavigate } from 'react-router-dom'

interface MenuCardProps {
    title: string
    subtitle: string
    icon: React.ReactNode
    to: string // specifies which page this card routes to 

}

const MenuCard: React.FC<MenuCardProps> = ({title, subtitle, icon, to}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    }

    return (
        <div 
            className = "w-[250px] h-[250px] m-auto bg-[#E6D3A3] rounded-xl border-[3px] border-r-[6px] border-b-[6px] border-black shadow-xl transition-transform duration-200 ease-in-out transform hover:bg-[#d4a738] hover:scale-105 hover:shadow-2xl hover:translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-inner cursor-pointer"
            onClick = {handleClick}
        >
            <div className = "flex flex-col items-center justify-center h-full text-center">
                {icon && <span className = "text-3xl mb-2">{icon}</span>}
                <h1 className = "text-2xl font-bold mb-1">{title}</h1>
                {subtitle && <h2 className = "text-lg text-gray-600">{subtitle}</h2>}
            </div>
        </div>
    )
}

export default MenuCard;
