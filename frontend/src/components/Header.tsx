import React from 'react'
import NavButton from './NavButton';
import { IoMdHelp, IoIosStats, IoIosInformationCircle } from "react-icons/io";


const Header: React.FC = () => {
    return (
        <>
            <div className="flex flex-row text-white pr-4 items-end mb-2">
                <div className="pl-4 pr-4 border-r-2 border-white">
                    <h1 className="text-4xl font-bold">GE🌎GRAPHY</h1>
                    <h1 className="text-4xl font-bold">BENCHMARK</h1>
                </div>
                <div className="ml-4">
                    <h4 className="text-xl">test your geo skills</h4>
                    <h4 className="text-xl">inspired by HumanBenchmark</h4>
                </div>
            </div>
            <div className = "flex flex-row ">
                <NavButton 
                    text = "help"
                    icon = {<IoMdHelp/>}
                />
                <NavButton 
                    text = "stats"
                    icon = {<IoIosStats/>}
                />
                <NavButton 
                    text = "about"
                    icon = {<IoIosInformationCircle/>}
                />
            </div>
        </>
    );
}

export default Header;
