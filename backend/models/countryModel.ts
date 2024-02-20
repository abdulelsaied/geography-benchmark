import pool from '../database';

class CountryModel {
    async getCountry() {
        try {
            const result = await pool.query('SELECT country_code FROM countries ORDER BY RANDOM() LIMIT 1');
            return result.rows[0];
        } catch(error) {
            console.log(error);
        } 
    }
}

const countryModel = new CountryModel();

export default countryModel;