const pool = require("./../config/pgConnect.js");

const loginUserModule = async () => {
    try {
        console.log("loginUserModule");
    } catch (error) {
        throw error;
    }
}

const registerUserModule = async (username, email, hash_password, first_name, last_name) => {

    try {
        const db_result = await pool.query(
            `
                INSERT INTO users
                    (username, email, password_hash, first_name, last_name)
                VALUES
                    ($1, $2, $3, $4, $5)
            `,
            [username, email, hash_password, first_name, last_name]
        );

        return db_result.rowCount === 1 ? true : false;

    } catch (error) {

        throw error;

    }

}

const checkUserExistModule = async (email) => {

    try {
        const db_result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        
        return db_result.rows.length !== 0 ? db_result.rows[0] : false;

    } catch (error) {

        throw error;

    }

}

module.exports = { loginUserModule, registerUserModule, checkUserExistModule };
