import Papa from 'papaparse';

export interface Country {
    name: string;
    population: number;
    size: number;
    continent: string;
    country_code: string;
    primary_language: string;
}

const STORAGE_KEY = 'countries';

let countries: Country[] = [];


const fetchAndParseCSV = async (): Promise<Country[]> => {
    if (countries.length > 0) {
        console.log("got countries from memory");
        return countries;
    }

    // Check if data exists in sessionStorage
    const storedCountries = sessionStorage.getItem(STORAGE_KEY);
    if (storedCountries) {
        countries = JSON.parse(storedCountries);
        console.log("got countries from session storage");
        return countries;
    }

    // Fetch and parse the CSV
    const response = await fetch("/geobenchmark.csv");
    const text = await response.text();
    console.log("fetching and parsing countries");


    return new Promise((resolve, reject) => {
        Papa.parse(text, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                countries = result.data as Country[];
                sessionStorage.setItem(STORAGE_KEY, JSON.stringify(countries)); 
                resolve(countries);
            },
            error: (error: any) => reject(error),
        });
    });
};

export const getRandomCountry = async (): Promise<Country> => {
    const countryList = await fetchAndParseCSV();
    const randomIndex = Math.floor(Math.random() * countryList.length);
    return countryList[randomIndex];
};

export const getRandomCountryCode = async (): Promise<string> => {
    const countryList = await fetchAndParseCSV();
    const randomIndex = Math.floor(Math.random() * countryList.length);
    return countryList[randomIndex].country_code;
};

