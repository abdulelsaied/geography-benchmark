const COUNTRY_API_BASE_URL = "http://localhost:8000/country";

const countryApi = {
    fetchRandomCountry: async () => {
        try {
            const response = await fetch(COUNTRY_API_BASE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            if (!response.ok) {
                throw new Error(`status: ${response.status}`)
            }
    
            const countryData = await response.json();
            return countryData;
        }
        catch (error) {
            console.log(error);
        }
    },
    
    fetchRandomCountryCode: async () => {
        try {
            const response = await fetch(COUNTRY_API_BASE_URL + "/country-code", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            if (!response.ok) {
                throw new Error(`status: ${response.status}`)
            }
    
            const countryCodeData = await response.json();
            return countryCodeData;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default countryApi;
