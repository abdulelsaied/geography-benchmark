import React, { useState, useEffect } from 'react'
import { fetchFlag } from '../services/flagApi';

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
        <div>
            <img src = { flagUrl } alt = { `Flag of ${countryCode}` }/>
        </div>
    )
}

export default Flag;
