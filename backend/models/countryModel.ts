import pool from '../database';

class CountryModel {
    async getCountryCode() {
        try {
            const result = await pool.query('SELECT country_code FROM countries ORDER BY RANDOM() LIMIT 1');
            return result.rows[0]["country_code"];
        } catch(error) {
            console.log("problem getting country code")
            console.log(error);
        } 
    }
}

const countryModel = new CountryModel();

export default countryModel;