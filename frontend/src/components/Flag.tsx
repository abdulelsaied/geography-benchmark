import React, { useState, useEffect } from 'react'

interface FlagProps {
    countryCode: string;
}

const Flag: React.FC<FlagProps> = ({countryCode}) => {

    const [flagUrl, setflagUrl] = useState('');

    useEffect(() => {
        (async () => {
            try {
                setflagUrl(`../src/assets/flag-images/${countryCode}.webp`);
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
        <div className="w-[380px] h-[253px] border-4 border-black overflow-hidden flex items-center justify-center">
            <img 
                src={flagUrl} 
                alt={`Flag of ${countryCode}`} 
                className="object-fill w-full h-full"
            />
        </div>
    )
}

export default Flag;
