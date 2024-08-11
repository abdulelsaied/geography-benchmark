import pool from '../database';

class CountryModel {

    async getCountryCode() {
        try {
            const result = await pool.query('SELECT country_code FROM Country ORDER BY RANDOM() LIMIT 1');
            console.log(result.rows[0]["country_code"])
            return result.rows[0]["country_code"];
        } catch(error) {
            console.log(error);
        } 
    }

    async getCountry() {
        try {
            const result = await pool.query('SELECT * FROM Country ORDER BY RANDOM() LIMIT 1');
            return result.rows[0];
        } catch(error) {
            console.log(error);
        } 
    }
}

const countryModel = new CountryModel();

export default countryModel;