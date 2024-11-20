import React, { useState, useEffect } from 'react'

interface FlagProps {
    countryCode: string;
    width: number;
    height: number;
}

const Flag: React.FC<FlagProps> = ({countryCode, width, height}) => {

    const [flagUrl, setflagUrl] = useState('');

    useEffect(() => {
        (async () => {
            try {
                setflagUrl(`./src/flag-images/${countryCode}.webp`);
            } catch (err: any) {
                throw new Error(err.message)
            }
        })();
        
        return () => {
            if (flagUrl) {
                URL.revokeObjectURL(flagUrl);
            }
        }
    }, [countryCode])
    return (
        <div 
            className="border-4 border-black overflow-hidden flex items-center justify-center"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <img 
                src={flagUrl} 
                alt={`Flag of ${countryCode}`} 
                className="object-fill w-full h-full"
            />
        </div>
    )
}

export default Flag;
