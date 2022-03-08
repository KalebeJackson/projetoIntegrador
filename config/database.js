const dotenv = require('dotenv')
dotenv.config({
    path: '.env'
})
const config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql', 
    use_env_variable: false,
    define: { timestamps: false }
}
module.exports = config;