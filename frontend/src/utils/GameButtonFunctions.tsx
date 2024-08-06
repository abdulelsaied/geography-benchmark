import countryApi from "../services/countryApi"

export const handleGuess = async (guess: string) => {
    try {
        const country = await countryApi.fetchRandomCountry();
        console.log(country);
    } catch (error) {
        console.log(error);
    }
}

export const startGame = async () => {
    try {
        const countryCode = await countryApi.fetchRandomCountryCode();
        console.log(countryCode);
    } catch (error) {
        console.log(error);
    }
}

