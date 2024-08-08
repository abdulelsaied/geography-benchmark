import React from 'react'

interface MenuButtonProps {
    text: string;
    buttonFunction: (...args: any[]) => void
}

const MenuButtons: React.FC<MenuButtonProps> = ({text, buttonFunction}) => {
    return (
        <button className = "bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                onClick = {() => buttonFunction()}>
            {text}
        </button>
    )
}

export default MenuButtons;